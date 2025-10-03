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
      toast.error(error.message);
    } else {
      const { error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setFormIsLoading(false);
        toast.error(error.message);
      } else {
        setFormIsLoading(false);
        toast.success('Password reset successfully');
        router.replace('/admin');
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Reset password</CardTitle>
          <CardDescription>
            Please enter your name, email and password to create an reset your
            password. After verification, we will sign you in automatically.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
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
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="********" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="********"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-8"
                disabled={!form.formState.isValid || formIsLoading}
              >
                {formIsLoading ? (
                  <Loader className="size-4 animate-spin" />
                ) : (
                  'Reset Password'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
