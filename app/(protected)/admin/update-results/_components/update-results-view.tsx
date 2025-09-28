'use client';

import { PageHeading } from '@/components/page-heading';
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from '@/components/ui/select';
import { convertDate } from '@/lib/helpers';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Id } from '@/convex/_generated/dataModel';
import { LoadingScreen } from '@/components/loading-screen';
import { useCallback } from 'react';
import { matchColumns } from './matches-columns';
import { DataTable } from '@/components/data-table/data-table';

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
            <DataTable columns={matchColumns} data={matches} />
          </div>
        ))}
      </div>
    </div>
  );
}
