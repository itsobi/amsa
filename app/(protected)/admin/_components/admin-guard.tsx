'use client';

import { Button } from '@/components/ui/button';

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';

import { Authenticated, Unauthenticated } from 'convex/react';
import { Ban } from 'lucide-react';
import Link from 'next/link';

export function AdminGuard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <div className="flex items-center justify-center text-center min-h-screen fixed inset-0 px-4">
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Ban />
              </EmptyMedia>
              <EmptyTitle>Not Authorized</EmptyTitle>
              <EmptyDescription>
                You are not authorized to access this page.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <div className="flex gap-2">
                <Button asChild variant="outline">
                  <Link href="/">Go Back Home</Link>
                </Button>
                <Button asChild>
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </div>
            </EmptyContent>
          </Empty>
        </div>
      </Unauthenticated>
    </>
  );
}
