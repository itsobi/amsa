'use client';

import { Id } from '@/convex/_generated/dataModel';
import { convertTime } from '@/lib/helpers';
import { ColumnDef } from '@tanstack/react-table';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { UpdateMatch } from './update-match';

function GetDivision({ division }: { division: Id<'divisions'> }) {
  const divisions = useQuery(api.division.getDivisions, {});

  const divisionName =
    divisions?.find((d) => d._id === division)?.division ?? 'Premier';
  return <span>{divisionName}</span>;
}

export type Match = {
  _id: Id<'matches'>;
  time: string;
  division: Id<'divisions'>;
  homeTeam: string;
  awayTeam: string;
  homeTeamScore: string;
  awayTeamScore: string;
  venue: string;
  type: string;
};

export const matchColumns: ColumnDef<Match>[] = [
  {
    header: 'Time',
    accessorKey: 'time',
    cell: ({ row }) => {
      return <span>{convertTime(row.original.time)}</span>;
    },
  },
  {
    header: 'Division',
    accessorKey: 'division',
    cell: ({ row }) => {
      return <GetDivision division={row.getValue('division')} />;
    },
  },

  {
    header: 'Home',
    accessorKey: 'homeTeam',
  },
  {
    header: 'Result',
    accessorKey: 'result',
    cell: ({ row }) => {
      return (
        <span>
          {row.original.homeTeamScore} - {row.original.awayTeamScore}
        </span>
      );
    },
  },

  {
    header: 'Visitor',
    accessorKey: 'awayTeam',
  },
  {
    header: 'Venue',
    accessorKey: 'venue',
  },

  {
    header: 'Type',
    accessorKey: 'type',
  },
  {
    id: 'update',
    cell: ({ row }) => {
      return <UpdateMatch match={row.original} />;
    },
  },
];
