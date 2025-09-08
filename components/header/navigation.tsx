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
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronRight, Menu } from 'lucide-react';
import {
  AMSAPoliciesNavigationItems,
  leagueNavigationItems,
  sheetNavigationItems,
} from '@/lib/routes';

function ListItem({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 justify-start w-full text-sm hover:bg-accent p-2 rounded"
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

  const router = useRouter();

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
      <Sheet>
        <SheetTrigger className="cursor-pointer hover:text-primary">
          <Menu className="size-4" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col h-full overflow-y-auto">
            <nav className="px-4 text-sm">
              <ul>
                {sheetNavigationItems.map((item) => (
                  <li key={item.label} className="mb-2">
                    {item.subItems ? (
                      <>
                        <button
                          className="flex items-center justify-between w-full cursor-pointer hover:bg-accent p-2 rounded"
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
                                      className="cursor-pointer w-full justify-start h-auto p-2 font-normal text-sm hover:bg-accent rounded"
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
                                              className="flex items-center gap-2 p-2 rounded hover:bg-accent text-sm"
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
                                    className="flex items-center gap-2 p-2 rounded hover:bg-accent text-sm"
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
                        className="flex items-center gap-2 p-2 rounded hover:bg-accent"
                      >
                        <item.icon className="size-4" />
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
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
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Recruitment</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Recruitment</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Fields</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Referees</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
