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
import { useRouter } from 'next/navigation';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { ADMIN_EMAILS } from '@/emails';

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
  const router = useRouter();
  const [formIsLoading, setFormIsLoading] = useState(false);
  const form = useForm<z.infer<typeof requestPasswordResetFormSchema>>({
    resolver: zodResolver(requestPasswordResetFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (
    formData: z.infer<typeof requestPasswordResetFormSchema>
  ) => {
    if (!ADMIN_EMAILS.includes(formData.email)) {
      toast.error('Sorry, this feature is only available for AMSA admins.');
      return;
    }

    setFormIsLoading(true);
    const { error } = await authClient.requestPasswordReset({
      email: formData.email,
      redirectTo: callbackURL,
    });

    if (error) {
      setFormIsLoading(false);
      toast.error(error.message);
    } else {
      setFormIsLoading(false);
      toast.success('Please check your email to reset your password');
    }
  };

  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Forgot Password</AlertDialogTitle>
          <AlertDialogDescription>
            Please enter your email to reset your password.
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

            <div className="mt-8 space-y-4">
              <Button
                className="w-full"
                type="submit"
                disabled={!form.formState.isValid || formIsLoading}
              >
                {formIsLoading ? (
                  <Loader className="size-4 animate-spin" />
                ) : (
                  'Reset Password'
                )}
              </Button>
              <Button
                variant="outline"
                onClick={() => router.replace('/')}
                className="w-full"
                type="button"
                disabled={formIsLoading}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
