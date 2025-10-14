'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';

if (!process.env.NEXT_PUBLIC_ADMIN_EMAILS) {
  throw new Error('ADMIN_EMAILS is not set');
}

const ADMIN_EMAILS = process.env.NEXT_PUBLIC_ADMIN_EMAILS.split(',');

const callbackURL =
  process.env.NODE_ENV === 'production'
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/admin`
    : 'http://localhost:3000/admin';

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
      name: formData.name,
      email: formData.email.trim(),
      password: formData.password,
      callbackURL: callbackURL,
    });

    if (error) {
      toast.error(
        error.message || 'An error occurred while trying to register.'
      );
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
    <div className="flex items-center justify-center pt-10">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Register for an account</CardTitle>
          <CardDescription>
            Please enter your name, email and password to create an account. If
            you are not a AMSA admin, you will not be allowed to create an
            account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="register-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="register-form-name">Name</FieldLabel>
                    <Input
                      {...field}
                      id="register-form-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="John Doe"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="register-form-email">Email</FieldLabel>
                    <Input
                      {...field}
                      id="register-form-email"
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
                    <FieldLabel htmlFor="register-form-password">
                      Password
                    </FieldLabel>
                    <Input
                      {...field}
                      id="register-form-password"
                      type="password"
                      aria-invalid={fieldState.invalid}
                      placeholder="********"
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
              form="register-form"
              disabled={!form.formState.isValid || formIsLoading}
            >
              {formIsLoading ? (
                <Loader className="size-4 animate-spin" />
              ) : (
                'Register'
              )}
            </Button>
          </form>
        </CardContent>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link
            href="/sign-in"
            className="text-primary font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>
      </Card>
    </div>
  );
}
