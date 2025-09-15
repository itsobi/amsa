'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { isClerkAPIResponseError } from '@clerk/nextjs/errors';

import { useSignIn } from '@clerk/nextjs';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { Loader2, Mail } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  buttonLabel?: string;
  buttonIcon?: React.ReactNode;
}

export function CustomSignInButton({ buttonLabel, buttonIcon }: Props) {
  const { signIn } = useSignIn();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  if (!signIn) return null;

  const handleGoogleSignIn = async () => {
    setOpen(false);
    try {
      return signIn.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: '/sign-in/sso-callback',
        redirectUrlComplete: '/',
      });
    } catch (error) {
      console.error(error);
      const errorMessage = isClerkAPIResponseError(error)
        ? error.errors[0].longMessage
        : error instanceof Error
        ? error.message
        : 'An error occurred while signing in';
      toast.error('Error signing in', {
        description: errorMessage,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          {buttonIcon && buttonIcon}
          {buttonLabel && buttonLabel}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>AMSA Admins Only</DialogTitle>
          <DialogDescription>
            This action is only available to AMSA admins. If your are not an
            AMSA admin, your account will be terminated.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <Button
            variant="outline"
            onClick={handleGoogleSignIn}
            className="w-full"
          >
            <Image
              src="/images/google.png"
              alt="Google"
              width={24}
              height={24}
              className="size-4"
            />
            <span>Continue with Google</span>
          </Button>
          <Button
            onClick={() => {
              setOpen(false);
              router.push('/sign-in');
            }}
            variant="outline"
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
      </DialogContent>
    </Dialog>
  );
}
