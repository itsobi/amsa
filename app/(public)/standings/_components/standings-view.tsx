'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { PageHeading } from '@/components/page-heading';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useCallback } from 'react';
import { LoadingScreen } from '@/components/loading-screen';
import { TeamColors } from './team-colors';
import { Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function StandingsView() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const fullSeason =
    searchParams.get('season') || 'jn708hbzm6rcaqkwc626swbjy97qw3kc'; // Default to Fall 2025
  const division =
    searchParams.get('division') || 'j571ej091962d8vs3wkks9qc957qp1hc'; // Default to Premier

  const fullSeasons = useQuery(api.fullSeasons.getFullSeasons, {});
  const divisions = useQuery(api.division.getDivisions, {});
  const standings = useQuery(api.standings.getStandings, {
    fullSeason: fullSeason as Id<'fullSeasons'>,
    division: division as Id<'divisions'>,
  });

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

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  if (standings === undefined) {
    return <LoadingScreen />;
  }

  return (
    // TODO: For OVER 50 TABLES: ** This division has a maximum goal differential per game of 3 **
    <div>
      <PageHeading title="Standings" />

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
        <div className="flex items-center justify-between">
          <h4>{getDivision(division as Id<'divisions'>)}</h4>
          <Link href="/admin/update-standings">
            <Button variant="outline">
              <Pencil className="size-4" />
              Update Standings
            </Button>
          </Link>
        </div>

        <div className="my-5">
          {isOver50 && (
            <div className="flex items-center justify-center">
              <p className="text-sm text-gray-500">
                * This division has a maximum goal differential per game of 3 *
              </p>
            </div>
          )}
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {standings.map((standing) => (
                <TableRow key={standing._id} className="hover:bg-transparent">
                  <TableCell>{standing.team}</TableCell>
                  <TableCell>{standing.teamCaptain}</TableCell>
                  <TableCell>
                    <TeamColors
                      color1={standing.color1}
                      color2={standing.color2}
                    />
                  </TableCell>
                  <TableCell>{standing.gamesPlayed}</TableCell>
                  <TableCell>{standing.gamesWon}</TableCell>
                  <TableCell>{standing.gamesDrawn}</TableCell>
                  <TableCell>{standing.gamesLost}</TableCell>
                  <TableCell>{standing.goalsScored}</TableCell>
                  <TableCell>{standing.goalsAgainst}</TableCell>
                  <TableCell>{standing.goalDifference}</TableCell>
                  <TableCell className="font-bold">{standing.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {isOver50 && (
            <div className="flex items-center justify-center">
              <p className="text-sm text-gray-500">
                * This division has a maximum goal differential per game of 3 *
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
