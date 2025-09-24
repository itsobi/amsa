import { VerifyEmail } from '@/components/email/verify-email';
import { ActionCtx } from './_generated/server';
import { Resend } from 'resend';
import { render } from '@react-email/components';
import { toast } from 'sonner';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailVerification = async (
  ctx: ActionCtx,
  {
    to,
    url,
  }: {
    to: string;
    url: string;
  }
) => {
  const { data, error } = await resend.emails.send({
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
