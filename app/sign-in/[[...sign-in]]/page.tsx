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

import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
import Link from 'next/link';
import { isClerkAPIResponseError } from '@clerk/nextjs/errors';
import { toast } from 'sonner';
import { ADMIN_EMAILS } from '@/lib/constants';

const signInFormSchema = z.object({
  email: z.email({
    message: 'Email must be a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

export default function SignInForm() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [formIsLoading, setFormIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof signInFormSchema>) => {
    if (!isLoaded) return;

    if (!ADMIN_EMAILS.includes(data.email)) {
      toast.error('Sorry, this feature is only available to AMSA admins.');
      return;
    }

    // Start the sign-in process using the email and password provided
    try {
      setFormIsLoading(true);
      const signInAttempt = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === 'complete') {
        await setActive({
          session: signInAttempt.createdSessionId,
        });
        toast.success('Signed in successfully');
        router.replace('/admin');
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
        toast.error('An error occurred while signing in');
        return;
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      if (isClerkAPIResponseError(err)) {
        toast.error(err.errors[0].longMessage);
      } else {
        toast.error(
          err instanceof Error
            ? err.message
            : 'An error occurred while signing in'
        );
      }
    } finally {
      setFormIsLoading(false);
    }
  };

  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Sign In</AlertDialogTitle>
          <AlertDialogDescription>
            Welcome back! Please enter your email and password to sign in. All
            accounts not associated with a AMSA will be terminated.
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
                  'Sign In'
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
            Don&apos;t have an account?{' '}
            <Link
              href="/sign-up"
              className="text-primary font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
        <div id="clerk-captcha" />
      </AlertDialogContent>
    </AlertDialog>
  );
}
