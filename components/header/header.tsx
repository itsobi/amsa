'use client';

import Navigation from './navigation';
import { ThemeToggle } from './theme-toggle';
import { Logo } from './logo';
import Link from 'next/link';
import { CustomSignInButton } from '../custom-sign-in-button';
import { LogIn } from 'lucide-react';
import { useAuth, UserButton, useUser } from '@clerk/nextjs';

export function Header() {
  const { isLoaded, user } = useUser();
  return (
    <div className="container mx-auto px-4 py-4 md:px-0 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex items-center gap-4">
        <Navigation />
        {user ? (
          <UserButton />
        ) : (
          <>
            <div className="block md:hidden">
              <CustomSignInButton buttonIcon={<LogIn className="size-4" />} />
            </div>
            <div className="hidden md:block">
              <CustomSignInButton
                buttonIcon={<LogIn className="size-4" />}
                buttonLabel="Admin Login"
              />
            </div>
          </>
        )}
        <ThemeToggle />
      </div>
    </div>
  );
}
