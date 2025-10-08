'use client';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

if (!process.env.NEXT_PUBLIC_ADMIN_EMAILS) {
  throw new Error('NEXT_PUBLIC_ADMIN_EMAILS is not set');
}

const ADMIN_EMAILS = process.env.NEXT_PUBLIC_ADMIN_EMAILS.split(',');

const callbackURL =
  process.env.NODE_ENV === 'production'
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/forgot-password`
    : 'http://localhost:3000/forgot-password';

const requestPasswordResetFormSchema = z.object({
  email: z.email({
    message: 'Email must be a valid email address.',
  }),
});

export function RequestPasswordReset() {
  const [formIsLoading, setFormIsLoading] = useState(false);
  const form = useForm<z.infer<typeof requestPasswordResetFormSchema>>({
    resolver: zodResolver(requestPasswordResetFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const verifyUser = useMutation(api.users.verifyResetPasswordRequest);

  const onSubmit = async (
    formData: z.infer<typeof requestPasswordResetFormSchema>
  ) => {
    if (!ADMIN_EMAILS.includes(formData.email)) {
      toast.error('Sorry, this feature is only available for AMSA admins.');
      return;
    }

    const verifyUserResponse = await verifyUser();

    if (!verifyUserResponse.success) {
      toast.error(verifyUserResponse.message);
      return;
    }

    await authClient.requestPasswordReset(
      {
        email: formData.email,
        redirectTo: callbackURL,
      },
      {
        onRequest: () => {
          setFormIsLoading(true);
        },
        onSuccess: () => {
          setFormIsLoading(false);
          toast.success('Please check your email to reset your password');
        },
        onError: (ctx) => {
          setFormIsLoading(false);
          toast.error(ctx.error.message);
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>
            Please enter your email to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="example@gmail.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-8"
                disabled={!form.formState.isValid || formIsLoading}
              >
                {formIsLoading ? (
                  <Loader className="size-4 animate-spin" />
                ) : (
                  'Register'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
