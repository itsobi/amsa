'use client';

import { LoadingScreen } from '@/components/loading-screen';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const user = authClient.useSession();

  const router = useRouter();

  useEffect(() => {
    if (user.data?.user.id) {
      router.replace('/admin');
    }
  }, [user]);

  if (user.isPending) {
    return <LoadingScreen />;
  }

  return <div>{children}</div>;
}
