'use client';

import { PageHeading } from '@/components/page-heading';
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from '@/components/ui/select';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { Id } from '@/convex/_generated/dataModel';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { convertDate, convertTime } from '@/lib/helpers';
import { LoadingScreen } from '@/components/loading-screen';

export function SchedulesView() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const season =
    searchParams.get('season') || 'jd7cstf17v6hjyfgtntqbgktsx7qq609'; // Default to Fall 2025
  const division =
    searchParams.get('division') || 'j571ej091962d8vs3wkks9qc957qp1hc'; // Default to Premier

  const seasons = useQuery(api.seasons.getSeasons, {});
  const divisions = useQuery(api.division.getDivisions, {});
  const schedule = useQuery(api.schedules.getSchedule, {
    season: season as Id<'seasons'>,
    division: division as Id<'divisions'>,
  });

  const selectedSeason =
    seasons?.find((s) => s._id === season)?.season ?? 'Fall 2025';
  const selectedDivision =
    divisions?.find((d) => d._id === division)?.division ?? 'Premier';

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

  if (schedule === undefined) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <PageHeading title="Schedules" />
      <div className="flex items-center justify-between">
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
              <SelectItem key={season._id} value={season.season}>
                {season.season}
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
                {division.division}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-10">
        <h4>
          {selectedSeason} - {selectedDivision}
        </h4>

        <div className="flex flex-col gap-4 mt-5">
          {Object.entries(schedule ?? {}).map(([date, matches], index) => (
            <>
              <p className="text-lg font-bold">
                Week {index + 1} - {convertDate(date)}
              </p>
              <Table key={date}>
                <TableHeader>
                  <TableRow>
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
                  {matches.map((match) => (
                    <TableRow key={match._id}>
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
                  ))}
                </TableBody>
              </Table>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
