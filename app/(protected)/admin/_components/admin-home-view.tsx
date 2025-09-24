'use client';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

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
  return <div>AdminHomeView</div>;
}
