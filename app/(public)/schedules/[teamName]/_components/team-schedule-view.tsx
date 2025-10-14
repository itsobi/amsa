'use client';

import { LoadingScreen } from '@/components/loading-screen';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { convertDate, convertTime } from '@/lib/helpers';
import { useQuery } from 'convex/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Ban } from 'lucide-react';

interface Props {
  teamName: string;
}

export function TeamScheduleView({ teamName }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedSeason =
    searchParams.get('season') || 'jd7cstf17v6hjyfgtntqbgktsx7qq609';

  const seasons = useQuery(api.seasons.getSeasons, {});
  const divisions = useQuery(api.division.getDivisions, {});
  const teamSchedule = useQuery(api.schedules.getTeamSchedule, {
    teamName,
    season: selectedSeason as Id<'seasons'>,
  });

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

  if (teamSchedule === undefined) {
    return <LoadingScreen />;
  }

  if (teamSchedule.length === 0) {
    return (
      <Empty className="min-h-[60vh] flex items-center justify-center">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Ban />
          </EmptyMedia>
          <EmptyTitle>Not Found</EmptyTitle>
          <EmptyDescription>
            The team you are looking for does not exist.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button asChild>
            <Link href="/schedules">Go Back To Schedules</Link>
          </Button>
        </EmptyContent>
      </Empty>
    );
  }

  return (
    <div className="mb-5">
      <div>
        <Select
          defaultValue={selectedSeason}
          onValueChange={(string) =>
            router.push(`${pathname}?${createQueryString('season', string)}`)
          }
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Season" />
          </SelectTrigger>
          <SelectContent>
            {seasons?.map((season) => (
              <SelectItem key={season._id} value={season._id}>
                {season.season}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-10 mt-10">
        {teamSchedule?.map((match, index) => (
          <div key={match._id}>
            <p className="text-lg font-bold mb-2.5">
              Week {index + 1} - {convertDate(match.date)}
            </p>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Time</TableHead>
                  <TableHead>Division</TableHead>
                  <TableHead className="w-[200px]">Home</TableHead>
                  <TableHead>Result</TableHead>
                  <TableHead className="w-[200px]">Visitor</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead>Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow key={match._id} className="hover:bg-transparent">
                  <TableCell>{convertTime(match.time)}</TableCell>
                  <TableCell>{getDivision(match.division)}</TableCell>
                  <TableCell>{match.homeTeam}</TableCell>
                  <TableCell>
                    {match.homeTeamScore} - {match.awayTeamScore}
                  </TableCell>
                  <TableCell>{match.awayTeam}</TableCell>
                  <TableCell>{match.venue}</TableCell>
                  <TableCell>{match.type}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
}
