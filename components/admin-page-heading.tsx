'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { useAuth } from '@clerk/nextjs';
import { Button } from './ui/button';
import { SquarePen } from 'lucide-react';
import Link from 'next/link';

interface Props {
  title: string;
  tooltipText: string;
  actionHref: string;
}

export function AdminPageHeading({ title, actionHref, tooltipText }: Props) {
  const { userId } = useAuth();
  return (
    <div className="flex items-center justify-between mb-10">
      <h1 className="text-4xl font-semibold">{title}</h1>
      {userId && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={actionHref}>
              <Button variant="outline">
                <SquarePen className="size-4" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>{tooltipText}</TooltipContent>
        </Tooltip>
      )}
    </div>
  );
}
