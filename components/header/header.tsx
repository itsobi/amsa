'use client';

import Navigation from './navigation';
import { ThemeToggle } from './theme-toggle';
import { Logo } from './logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';
import { CustomSignInButton } from '../custom-sign-in-button';
import { LogIn } from 'lucide-react';

export function Header() {
  const { user } = useUser();
  const pathname = usePathname();
  const isAdmin = pathname.includes('/admin');

  if (isAdmin) {
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

  return (
    <div className="container mx-auto px-4 py-4 md:px-0 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex items-center gap-4">
        <Navigation />

        <ThemeToggle />
      </div>
    </div>
  );
}
