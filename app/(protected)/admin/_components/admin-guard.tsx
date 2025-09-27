'use client';

import { CustomSignInButton } from '@/components/custom-sign-in-button';

import { Authenticated, Unauthenticated } from 'convex/react';

export function AdminGuard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <div className="flex items-center justify-center text-center min-h-screen fixed inset-0 px-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-6xl">🚫</span>
            <h1 className="text-2xl font-bold">
              Sorry, you are not authorized to access this page.
            </h1>

            <CustomSignInButton buttonLabel="Sign in to continue" />
          </div>
        </div>
      </Unauthenticated>
    </>
  );
}
