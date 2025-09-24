import { VerifyEmail } from '@/components/email/verify-email';
import { ActionCtx } from './_generated/server';
import { Resend } from 'resend';
import { render } from '@react-email/components';
import { toast } from 'sonner';
import { ResetPassword } from '@/components/email/reset-password';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailVerificationEmail = async (
  ctx: ActionCtx,
  {
    to,
    url,
  }: {
    to: string;
    url: string;
  }
) => {
  const { error } = await resend.emails.send({
    from: 'AMSA <onboarding@resend.dev>',
    to,
    subject: 'Verify your email address',
    html: await render(<VerifyEmail url={url} />),
  });

  if (error) {
    toast.error(error.message);
  } else {
    toast.success('Please check your email to verify your account');
  }
};

export const sendResetPasswordEmail = async (
  ctx: ActionCtx,
  {
    to,
    url,
  }: {
    to: string;
    url: string;
  }
) => {
  const { error } = await resend.emails.send({
    from: 'AMSA <onboarding@resend.dev>',
    to,
    subject: 'Reset your password',
    html: await render(<ResetPassword url={url} />),
  });

  if (error) {
    toast.error(error.message);
  } else {
    toast.success('Please check your email to reset your password');
  }
};
