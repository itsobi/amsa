'use client';

import Navigation from './navigation';
import { ThemeToggle } from './theme-toggle';
import { Logo } from './logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { UserButton } from './user-button';
import { LoadingScreen } from '../loading-screen';
import { useIsTablet } from '@/lib/hooks/use-is-tablet';

function HeaderContainer({ children }: { children: React.ReactNode }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      {children}
    </header>
  );
}

export function Header() {
  const isTablet = useIsTablet();

  const user = authClient.useSession();

  if (user.isPending) {
    return <LoadingScreen />;
  }

  return (
    <HeaderContainer>
      <div className="container mx-auto px-4 py-4 md:px-0 flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex items-center gap-4">
          {user.data?.user.id && isTablet && (
            <UserButton user={user.data.user} />
          )}
          {isTablet && <ThemeToggle />}
          <Navigation />
          {user.data?.user.id && !isTablet && (
            <UserButton user={user.data.user} />
          )}
          {!isTablet && <ThemeToggle />}
        </div>
      </div>
    </HeaderContainer>
  );
}
