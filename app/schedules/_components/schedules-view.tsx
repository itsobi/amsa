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

  console.log(schedule);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div>
      <PageHeading title="Schedules" />
      <div className="flex items-center justify-between">
        <Select
          defaultValue="Fall 2025"
          onValueChange={(string) =>
            router.push(`${pathname}?${createQueryString('season', string)}`)
          }
        >
          <SelectTrigger className="w-[180px]">
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
          defaultValue="j571ej091962d8vs3wkks9qc957qp1hc" // Premier ID
          onValueChange={(string) =>
            router.push(`${pathname}?${createQueryString('division', string)}`)
          }
        >
          <SelectTrigger className="w-[180px]">
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
    </div>
  );
}
