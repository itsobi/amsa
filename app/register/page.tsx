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

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { toast } from 'sonner';
import { Loader, Mail } from 'lucide-react';
import { ADMIN_EMAILS } from '@/emails';
import { authClient } from '@/lib/auth-client';

const signUpFormSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required.',
  }),

  email: z.email({
    message: 'Email must be a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

export default function RegisterPage() {
  const [formIsLoading, setFormIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (formData: z.infer<typeof signUpFormSchema>) => {
    if (!ADMIN_EMAILS.includes(formData.email)) {
      toast.error('Sorry, this feature is only available for AMSA admins.');
      return;
    }

    setFormIsLoading(true);
    const { data, error } = await authClient.signUp.email({
      name: formData.name, // required
      email: formData.email.trim(), // required
      password: formData.password, // required
    });

    if (error) {
      toast.error(error.message);
      setFormIsLoading(false);
      return;
    }

    if (data) {
      setFormIsLoading(false);
      router.replace('/');
      toast.success(
        'We have sent you a verification email. Please check your email to continue.'
      );
    }
  };

  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Register</AlertDialogTitle>
          <AlertDialogDescription>
            Please enter your name, email and password to create an account. If
            you are not a AMSA admin, you will not be allowed to register for an
            account.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="text-sm"
                      {...field}
                      placeholder="John Doe"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
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
                  'Register'
                )}
              </Button>
            </div>
          </form>
        </Form>

        <Button
          variant="outline"
          onClick={() => router.replace('/')}
          className="w-full"
          type="button"
        >
          Cancel
        </Button>

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
