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

import { useRouter, useSearchParams } from 'next/navigation';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import { authClient } from '@/lib/auth-client';

const callbackURL = process.env.NEXT_PUBLIC_SITE_URL
  ? `${process.env.NEXT_PUBLIC_SITE_URL}/admin`
  : 'http://localhost:3000/admin';

const signInFormSchema = z.object({
  email: z.email({
    message: 'Email must be a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

export default function SignInPage() {
  const searchParams = useSearchParams();
  const errorParam = searchParams.get('error');

  console.log(errorParam);
  const [formIsLoading, setFormIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (formData: z.infer<typeof signInFormSchema>) => {
    setFormIsLoading(true);
    const { data, error } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setFormIsLoading(false);
      if (error.status === 403) {
        toast.error('Please verify your email to continue.');
        return;
      }
      toast.error(error.message);
    } else if (data) {
      setFormIsLoading(false);
      toast.success('Signed in successfully');
      router.replace('/admin');
    }
  };

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
    <AlertDialog open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Sign In</AlertDialogTitle>
          <AlertDialogDescription>
            Welcome back! Please enter your email and password to continue.
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
                type="button"
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
              href="/register"
              className="text-primary font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
        <div id="clerk-captcha" />
      </AlertDialogContent>
    </AlertDialog>
  );
}
