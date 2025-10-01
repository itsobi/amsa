'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useIsTablet } from '@/lib/hooks/use-is-tablet';

import { Logo } from './logo';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  ChevronRight,
  Lock,
  Menu,
  ShieldUser,
} from 'lucide-react';
import {
  AMSAPoliciesNavigationItems,
  leagueNavigationItems,
  sheetNavigationItems,
} from '@/lib/routes';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { authClient } from '@/lib/auth-client';

const linkClassName =
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50';

function ListItem({
  href,
  label,
  icon,
  isActive,
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 justify-start w-full text-sm hover:bg-accent p-2 rounded',
        isActive && 'bg-accent rounded'
      )}
    >
      {icon && icon}
      {label}
    </Link>
  );
}

export default function Navigation() {
  const isTablet = useIsTablet();
  const [isMounted, setIsMounted] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const user = authClient.useSession();

  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const toggleExpanded = (label: string, parentPath?: string) => {
    const fullPath = parentPath ? `${parentPath}-${label}` : label;
    setExpandedItems((prev) =>
      prev.includes(fullPath)
        ? prev.filter((item) => item !== fullPath)
        : [...prev, fullPath]
    );
  };

  if (isTablet) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="cursor-pointer hover:text-primary" asChild>
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="w-fit">
            <SheetTitle>
              <Link href="/" onClick={() => setOpen(false)}>
                <Logo />
              </Link>
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col h-full overflow-y-auto">
            <nav className="px-4 text-sm">
              <ul>
                {sheetNavigationItems.map((item) => (
                  <li
                    key={item.label}
                    className={cn(
                      'mb-2',
                      pathname === item.href && 'bg-accent rounded'
                    )}
                  >
                    {item.subItems ? (
                      <>
                        <button
                          className={cn(
                            'flex items-center justify-between w-full cursor-pointer hover:bg-accent p-2 rounded',
                            pathname === item.href && 'bg-accent rounded'
                          )}
                          onClick={() => toggleExpanded(item.label)}
                        >
                          <div className="flex items-center gap-2">
                            <item.icon className="size-4" />
                            {item.label}
                          </div>
                          {expandedItems.includes(item.label) ? (
                            <ChevronDown className="size-4" />
                          ) : (
                            <ChevronRight className="size-4" />
                          )}
                        </button>

                        {expandedItems.includes(item.label) && (
                          <ul className="mt-2 ml-4 space-y-1 border-l border-border pl-4">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.label}>
                                {subItem.subItems ? (
                                  <>
                                    <button
                                      className={cn(
                                        'cursor-pointer w-full justify-start h-auto p-2 font-normal text-sm hover:bg-accent rounded',
                                        pathname === subItem.href &&
                                          'bg-accent rounded'
                                      )}
                                      onClick={() =>
                                        toggleExpanded(
                                          subItem.label,
                                          item.label
                                        )
                                      }
                                    >
                                      <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-2">
                                          <subItem.icon className="size-4" />
                                          <span>{subItem.label}</span>
                                        </div>
                                        {expandedItems.includes(
                                          `${item.label}-${subItem.label}`
                                        ) ? (
                                          <ChevronDown className="size-4" />
                                        ) : (
                                          <ChevronRight className="size-4" />
                                        )}
                                      </div>
                                    </button>

                                    {expandedItems.includes(
                                      `${item.label}-${subItem.label}`
                                    ) && (
                                      <ul className="mt-2 ml-4 space-y-1 border-l border-border pl-4">
                                        {subItem.subItems.map((nestedItem) => (
                                          <li key={nestedItem.label}>
                                            <Link
                                              href={nestedItem.href}
                                              className={cn(
                                                'flex items-center gap-2 p-2 rounded hover:bg-accent text-sm',
                                                pathname === nestedItem.href &&
                                                  'bg-accent rounded'
                                              )}
                                            >
                                              <span>{nestedItem.label}</span>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </>
                                ) : (
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      'flex items-center gap-2 p-2 rounded hover:bg-accent text-sm',
                                      pathname === subItem.href &&
                                        'bg-accent rounded'
                                    )}
                                    onClick={() => setOpen(false)}
                                  >
                                    <subItem.icon className="size-4" />
                                    <span>{subItem.label}</span>
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center gap-2 p-2 rounded hover:bg-accent',
                          pathname === item.href && 'bg-accent rounded'
                        )}
                      >
                        <item.icon className="size-4" />
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            {user.data?.user.id && (
              <div className="px-4 pb-4">
                <Link
                  href="/admin"
                  className={cn(
                    'flex items-center gap-2 p-2 rounded hover:bg-accent w-full text-sm',
                    pathname === '/admin' && 'bg-accent'
                  )}
                  onClick={() => setOpen(false)}
                >
                  <Lock className="size-4" />
                  <span>Admin</span>
                </Link>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>League</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-1">
              {leagueNavigationItems.map((item) => (
                <ListItem
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  icon={<item.icon className="size-4" />}
                  isActive={pathname === item.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>AMSA Policies</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[350px] gap-1">
              {AMSAPoliciesNavigationItems.map((item) => (
                <ListItem
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  icon={<item.icon className="size-4" />}
                  isActive={pathname === item.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/recruitment"
              className={cn(
                linkClassName,
                pathname === '/recruitment' && 'bg-accent'
              )}
            >
              Recruitment
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/fields"
              className={cn(
                linkClassName,
                pathname === '/fields' && 'bg-accent'
              )}
            >
              Fields
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/referees"
              className={cn(
                linkClassName,
                pathname === '/referees' && 'bg-accent'
              )}
            >
              Referees
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/about"
              className={cn(
                linkClassName,
                pathname === '/about' && 'bg-accent'
              )}
            >
              About
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {user.data?.user.id && (
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/admin"
                className={cn(
                  linkClassName,
                  pathname === '/admin' && 'bg-accent'
                )}
              >
                Admin
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
