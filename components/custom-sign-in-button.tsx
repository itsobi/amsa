'use client';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { Button } from './ui/button';

import { Mail } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  buttonLabel?: string;
  buttonIcon?: React.ReactNode;
}

export function CustomSignInButton({ buttonLabel, buttonIcon }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          {buttonIcon && buttonIcon}
          {buttonLabel && buttonLabel}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>AMSA Admins Only</AlertDialogTitle>
          <AlertDialogDescription>
            This action is only available to AMSA admins. If your are not an
            AMSA admin, your account will be terminated.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex flex-col gap-4">
          <Button
            onClick={() => {
              setOpen(false);
              router.push('/register');
            }}
            className="w-full"
          >
            <Mail className="size-4" />
            Continue with Email/Password
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
