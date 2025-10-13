'use client';

import { useCallback, useEffect, useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  closestCenter,
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
  DragEndEvent,
  UniqueIdentifier,
  DragStartEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  useSortable,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Doc, Id } from '@/convex/_generated/dataModel';
import { CSS } from '@dnd-kit/utilities';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TeamColors } from '@/app/(public)/standings/_components/team-colors';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { PageHeading } from '@/components/page-heading';
import { UpdateStandingsDialog } from './update-standings-dialog';

function SortableItem({ standing }: { standing: Doc<'standings'> }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transition,
    transform,
    isDragging,
  } = useSortable({
    id: standing._id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <TableRow
      key={standing._id}
      ref={setNodeRef}
      style={style}
      className={cn(
        'hover:bg-transparent',
        isDragging && 'cursor-grabbing z-10 opacity-50 shadow-md'
      )}
    >
      <TableCell
        {...attributes}
        {...listeners}
        className="cursor-grab touch-none active:cursor-grabbing w-8"
      >
        ⋮⋮
      </TableCell>

      <TableCell>{standing.team}</TableCell>
      <TableCell>{standing.teamCaptain}</TableCell>
      <TableCell>
        <TeamColors color1={standing.color1} color2={standing.color2} />
      </TableCell>
      <TableCell>{standing.gamesPlayed}</TableCell>
      <TableCell>{standing.gamesWon}</TableCell>
      <TableCell>{standing.gamesDrawn}</TableCell>
      <TableCell>{standing.gamesLost}</TableCell>
      <TableCell>{standing.goalsScored}</TableCell>
      <TableCell>{standing.goalsAgainst}</TableCell>
      <TableCell>{standing.goalDifference}</TableCell>
      <TableCell className="font-bold">{standing.points}</TableCell>

      {/* pencil / dialog trigger */}
      <TableCell>
        <UpdateStandingsDialog standing={standing} />
      </TableCell>
    </TableRow>
  );
}

export function UpdateStandingsView() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [items, setItems] = useState<Doc<'standings'>[]>([]);
  const router = useRouter();

  const [_, setActiveId] = useState<UniqueIdentifier | null>(null);

  const fullSeason =
    searchParams.get('season') ||
    (process.env.NODE_ENV === 'production'
      ? 'jh786wvqvznmk7svxkw5xc95617s2s7c'
      : 'jn708hbzm6rcaqkwc626swbjy97qw3kc'); // Default to 25/26 season
  const division =
    searchParams.get('division') ||
    (process.env.NODE_ENV === 'production'
      ? 'jd7ak83pqwhks638z4qj8qxn0x7s21a7'
      : 'j571ej091962d8vs3wkks9qc957qp1hc'); // Default to Premier

  const fullSeasons = useQuery(api.fullSeasons.getFullSeasons, {});
  const divisions = useQuery(api.division.getDivisions, {});
  const standings = useQuery(api.standings.getStandings, {
    fullSeason: fullSeason as Id<'fullSeasons'>,
    division: division as Id<'divisions'>,
  });

  useEffect(() => {
    if (standings) {
      setItems(standings);
    }
  }, [standings]);

  const isOver50 = [
    'j5707f10haewn58et06gdsxpzh7qq60q',
    'j577kpfwkrk28tk2xe7xjx01817qqcyq',
  ].includes(division as Id<'divisions'>);

  const getFullSeason = (fullSeason: Id<'fullSeasons'>) => {
    return (
      fullSeasons?.find((s) => s._id === fullSeason)?.season ??
      'AMSA 2025/26 Season'
    );
  };
  const getDivision = (division: Id<'divisions'>) => {
    return divisions?.find((d) => d._id === division)?.division ?? 'Premier';
  };

  const updateStandings = useMutation(api.standings.updateStandings);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 100, // 100ms delay before activation
        tolerance: 5, // allow small movements before activating drag
      },
    }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item._id === active.id);
        const newIndex = items.findIndex((item) => item._id === over.id);

        const newItems = arrayMove(items, oldIndex, newIndex);

        updateStandings({
          tableUpdates: newItems.map((item, index) => ({
            id: item._id,
            tablePosition: index + 1,
          })),
        }).then((response) => {
          if (!response.success) {
            toast.error(response.message);
            setItems(items);
          }
        });

        return newItems;
      });
    }
  };

  return (
    <>
      <PageHeading title="Standings (Admin)" />

      <div className="flex items-center justify-between">
        <Select
          defaultValue={fullSeason}
          onValueChange={(string) =>
            router.push(`${pathname}?${createQueryString('season', string)}`)
          }
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Season" />
          </SelectTrigger>
          <SelectContent>
            {fullSeasons?.map((season) => (
              <SelectItem key={season._id} value={season._id}>
                {getFullSeason(season._id)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          defaultValue={division}
          onValueChange={(string) =>
            router.push(`${pathname}?${createQueryString('division', string)}`)
          }
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Division" />
          </SelectTrigger>
          <SelectContent>
            {divisions?.map((division) => (
              <SelectItem key={division._id} value={division._id}>
                {getDivision(division._id)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-10">
        <div className="my-5">
          {isOver50 && (
            <div className="flex items-center justify-center">
              <p className="text-sm text-gray-500">
                * This division has a maximum goal differential per game of 3 *
              </p>
            </div>
          )}
          <div className="mb-8 text-sm text-center text-muted-foreground space-y-2">
            <h4>
              *To update a team&apos;s table position, press and hold on the ⋮⋮
              icon and drop to the desired position*
            </h4>
            <h4>*To update a team&apos;s stats, click on the pencil icon*</h4>
          </div>

          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead />
                  {/* Column for drag handle */}
                  <TableHead>Team Name</TableHead>
                  <TableHead>Team Captain</TableHead>
                  <TableHead>Colors</TableHead>
                  <TableHead>GP</TableHead>
                  <TableHead>W</TableHead>
                  <TableHead>D</TableHead>
                  <TableHead>L</TableHead>
                  <TableHead>GS</TableHead>
                  <TableHead>GA</TableHead>
                  <TableHead>GD</TableHead>
                  <TableHead>Points</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                <SortableContext
                  items={items.map((item) => item._id)}
                  strategy={verticalListSortingStrategy}
                >
                  {items.map((item) => (
                    <SortableItem key={item._id} standing={item} />
                  ))}
                </SortableContext>

                {/* <DragOverlay
            adjustScale={true}
            dropAnimation={{
              duration: 150,
              easing: 'ease-out',
            }}
          >
            {activeId && <SortableItem standing={getActiveItem()!} />}
          </DragOverlay> */}
              </TableBody>
            </Table>
          </DndContext>
        </div>
      </div>
    </>
  );
}
