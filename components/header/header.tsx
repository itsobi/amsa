'use client';

import Navigation from './navigation';
import { ThemeToggle } from './theme-toggle';
import { Logo } from './logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CustomSignInButton } from '../custom-sign-in-button';
import { LogIn } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { authClient } from '@/lib/auth-client';
import { UserButton } from './user-button';
import { LoadingScreen } from '../loading-screen';

const user = true;

export function Header() {
  const pathname = usePathname();
  const isAdmin = pathname.includes('/admin');

  const user = authClient.useSession();

  if (user.isPending) {
    return <LoadingScreen />;
  }

  if (isAdmin && user.data?.user.id) {
    return (
      <div className="container mx-auto px-4 py-4 md:px-0 flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex items-center gap-4">
          <Navigation />
          {user.data?.user.id && <UserButton user={user.data.user} />}
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
