'use client';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

import { useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { toast } from 'sonner';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { isClerkAPIResponseError } from '@clerk/nextjs/errors';
import { Loader } from 'lucide-react';
import { ADMIN_EMAILS } from '@/lib/constants';

const signUpFormSchema = z.object({
  email: z.email({
    message: 'Email must be a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

export default function Page() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [verifying, setVerifying] = useState(false);
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [verifyIsLoading, setVerifyIsLoading] = useState(false);
  const [code, setCode] = useState('');

  const router = useRouter();

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof signUpFormSchema>) => {
    if (!isLoaded) {
      toast.error('Client it not loaded, please try again.');
      return;
    }

    if (!ADMIN_EMAILS.includes(data.email)) {
      toast.error('Sorry, this feature is only available to AMSA admins.');
      return;
    }

    try {
      setFormIsLoading(true);
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: 'email_code',
      });

      setVerifying(true);
      setFormIsLoading(false);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      if (isClerkAPIResponseError(err)) {
        toast.error(err.errors[0].longMessage);
      } else {
        toast.error(
          err instanceof Error
            ? err.message
            : 'An error occurred while signing up'
        );
      }
    } finally {
      setFormIsLoading(false);
    }
  };

  // Handle the submission of the verification form
  const handleVerify = async (e: React.FormEvent) => {
    if (code.length !== 6) {
      toast.error('Please enter a valid verification code.');
      return;
    }

    if (!isLoaded) {
      toast.error('Client it not loaded, please try again.');
      return;
    }

    try {
      setVerifyIsLoading(true);
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (signUpAttempt.status === 'complete') {
        await setActive({
          session: signUpAttempt.createdSessionId,
        });
        toast.success('Account created successfully');
        router.replace('/');
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
        toast.error('An error occurred while verifying');
      }
    } catch (err: any) {
      console.error('Error:', JSON.stringify(err, null, 2));
      if (isClerkAPIResponseError(err)) {
        toast.error(err.errors[0].longMessage);
      } else {
        toast.error(
          err instanceof Error
            ? err.message
            : 'An error occurred while verifying'
        );
      }
    } finally {
      setVerifyIsLoading(false);
    }
  };

  if (verifying) {
    return (
      <AlertDialog open={true}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Verify your email</AlertDialogTitle>
            <AlertDialogDescription>
              Please enter your verification code sent to your email to
              continue.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="flex flex-col items-center gap-6">
            <InputOTP
              value={code}
              onChange={(value) => setCode(value)}
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <Button className="w-full" type="button" onClick={handleVerify}>
              {verifyIsLoading ? (
                <Loader className="size-4 animate-spin" />
              ) : (
                'Verify'
              )}
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Sign Up</AlertDialogTitle>
          <AlertDialogDescription>
            Please enter your email and password to create an account. If you
            are not a AMSA admin, your account will be terminated.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="text-sm"
                      {...field}
                      placeholder="example@gmail.com"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="text-sm"
                      {...field}
                      placeholder="********"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-8 space-y-4">
              <Button
                className="w-full"
                type="submit"
                disabled={!form.formState.isValid || formIsLoading}
              >
                {formIsLoading ? (
                  <Loader className="size-4 animate-spin" />
                ) : (
                  'Sign Up'
                )}
              </Button>
              <Button
                variant="outline"
                onClick={() => router.replace('/')}
                className="w-full"
                type="submit"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>

        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link
              href="/sign-in"
              className="text-primary font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
        <div id="clerk-captcha" />
      </AlertDialogContent>
    </AlertDialog>
  );
}
