'use client';

import { PageHeading } from '@/components/page-heading';
import { PageInfoContainer } from '@/components/page-info-container';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import { Button } from '@/components/ui/button';
import { Tally5, Trees, TrendingUp } from 'lucide-react';
import Link from 'next/link';

import { useRouter, useSearchParams } from 'next/navigation';

export function AdminHomeView() {
  const searchParams = useSearchParams();
  const errorParam = searchParams.get('error');

  const router = useRouter();

  if (errorParam === 'invalid_token') {
    return (
      <AlertDialog open={true}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Invalid Token</AlertDialogTitle>
            <AlertDialogDescription>
              Sorry, email verification was unsuccessful. Please register for an
              account to continue.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Button onClick={() => router.replace('/register')}>Continue</Button>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  return (
    <>
      <PageHeading
        title="Admin Home"
        description="Welcome to the Admin Home. By being an admin, you can update scores and standings."
      />
      <PageInfoContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="flex flex-col gap-6 max-w-lg border p-4 rounded-sm shadow-sm">
            <div className="space-y-1">
              <h4 className="md:text-lg">Update Match Scores</h4>
              <p className="text-sm text-muted-foreground">
                Update weekly scores of teams. Updates will take effect
                immediately.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Tally5 className="size-4xl" />
            </div>
            <div className="py-4">
              <Link href="/admin/update-results">
                <Button className="w-full">Update Scores</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-between max-w-lg border p-4 rounded-sm shadow-sm">
            <div className="space-y-1">
              <h4 className="md:text-lg">Update Table Standings</h4>
              <p className="text-sm text-muted-foreground">
                Update table standings of teams. Updates will take effect
                immediately.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <TrendingUp className="size-4xl" />
            </div>
            <div className="py-4">
              <Link href="/admin/update-standings">
                <Button className="w-full">Update Standings</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-between max-w-lg border p-4 rounded-sm shadow-sm">
            <div className="space-y-1">
              <h4 className="md:text-lg">Update Field Status</h4>
              <p className="text-sm text-muted-foreground">
                Update status of fields. Updates will take effect immediately.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Trees className="size-4xl" />
            </div>
            <div className="py-4">
              <Link href="/admin/update-field-status">
                <Button className="w-full">Update Field Status</Button>
              </Link>
            </div>
          </div>
        </div>
      </PageInfoContainer>
    </>
  );
}
