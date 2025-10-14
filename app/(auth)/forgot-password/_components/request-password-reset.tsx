'use client';

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
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { FieldGroup } from '@/components/ui/field';

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
    <div className="flex items-center justify-center pt-10">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>
            Please enter your email to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="request-password-reset-form"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="request-password-reset-form-email">
                      Email
                    </FieldLabel>
                    <Input
                      {...field}
                      id="request-password-reset-form-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="example@gmail.com"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            <Button
              type="submit"
              className="w-full mt-8"
              form="request-password-reset-form"
              disabled={!form.formState.isValid || formIsLoading}
            >
              {formIsLoading ? (
                <Loader className="size-4 animate-spin" />
              ) : (
                'Request Password Reset'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
