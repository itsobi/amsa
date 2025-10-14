'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';

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
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';

const resetPasswordFormSchema = z.object({
  email: z.email({
    message: 'Email must be a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  confirmPassword: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

export function ResetPassword({ token }: { token: string }) {
  const router = useRouter();
  const [formIsLoading, setFormIsLoading] = useState(false);
  const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (
    formData: z.infer<typeof resetPasswordFormSchema>
  ) => {
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    setFormIsLoading(true);
    const { error } = await authClient.resetPassword({
      newPassword: formData.password,
      token,
    });

    if (error) {
      setFormIsLoading(false);
      toast.error(
        error.message ||
          'An error occurred while trying to reset your password.'
      );
    } else {
      const { error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setFormIsLoading(false);
        toast.error(
          error.message || 'An error occurred while trying to sign you in.'
        );
      } else {
        setFormIsLoading(false);
        toast.success('Password reset successfully');
        router.replace('/admin');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-10">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Reset password</CardTitle>
          <CardDescription>
            Please enter your email and new password to reset your password.
            After verification, we will sign you in automatically.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="reset-password-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="reset-password-form-email">
                      Email
                    </FieldLabel>
                    <Input
                      {...field}
                      id="reset-password-form-email"
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
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="reset-password-form-password">
                      Password
                    </FieldLabel>
                    <Input
                      {...field}
                      id="reset-password-form-password"
                      aria-invalid={fieldState.invalid}
                      placeholder="********"
                      autoComplete="off"
                      type="password"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="confirmPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="reset-password-form-confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input
                      {...field}
                      id="reset-password-form-confirm-password"
                      aria-invalid={fieldState.invalid}
                      placeholder="********"
                      autoComplete="off"
                      type="password"
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
              form="reset-password-form"
              disabled={!form.formState.isValid || formIsLoading}
            >
              {formIsLoading ? (
                <Loader className="size-4 animate-spin" />
              ) : (
                'Reset Password'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
