'use client';

import { useSearchParams } from 'next/navigation';

import { RequestPasswordReset } from './_components/request-password-reset';
import { ResetPassword } from './_components/reset-password';

export default function ForgotPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  if (token) {
    return <ResetPassword token={token} />;
  }

  return <RequestPasswordReset />;
}
