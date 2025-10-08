'use client';

import { PageHeading } from '@/components/page-heading';
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from '@/components/ui/select';
import { convertDate, convertTime } from '@/lib/helpers';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Id } from '@/convex/_generated/dataModel';
import { LoadingScreen } from '@/components/loading-screen';
import { useCallback } from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableHeader,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { UpdateMatch } from './update-match';
import { MatchScore } from '@/app/(public)/schedules/_components/schedules-view';
import DeleteMatch from './delete-match';

export function UpdateResultsView() {
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
    <div className="mb-5">
      <PageHeading title="Schedules (Admin)" />
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

      <div className="mt-8">
        <h4 className="mb-8 text-center text-sm text-muted-foreground">
          *To update match result, click on the pencil icon*
        </h4>
        {Object.entries(schedule ?? {}).map(([date, matches], index) => (
          <div key={date} className="mb-8">
            <p className="text-lg font-bold mb-2.5">
              Week {index + 1} - {convertDate(date)}
            </p>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Time</TableHead>
                  <TableHead>Division</TableHead>
                  <TableHead>Home</TableHead>
                  <TableHead>Result</TableHead>
                  <TableHead>Visitor</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                {matches.map((match) => (
                  <TableRow key={match._id} className="hover:bg-transparent">
                    <TableCell>{convertTime(match.time)}</TableCell>
                    <TableCell>{getDivision(match.division)}</TableCell>
                    <TableCell className="w-[200px]">
                      {match.homeTeam}
                    </TableCell>
                    <TableCell className="w-[150px]">
                      <MatchScore
                        homeTeamScore={match.homeTeamScore}
                        awayTeamScore={match.awayTeamScore}
                        matchStatus={match.matchStatus}
                      />
                    </TableCell>
                    <TableCell>{match.awayTeam}</TableCell>
                    <TableCell>{match.venue}</TableCell>
                    <TableCell>{match.type}</TableCell>
                    <TableCell className="flex items-center gap-2">
                      <UpdateMatch match={match} />
                      <DeleteMatch match={match} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
}
