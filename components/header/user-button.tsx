'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { User } from 'better-auth';
import { authClient } from '@/lib/auth-client';
import { LogOut, Tally5, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function UserButton({ user }: { user: User }) {
  const router = useRouter();
  const handleSignOut = async () => {
    const toastId = toast.loading('Signing out...');
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.dismiss(toastId);
          toast.success('Signed out successfully');
          router.replace('/');
        },
        onError: (error) => {
          toast.dismiss(toastId);
          toast.error(error.error.message);
        },
      },
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        {user.image ? (
          <Avatar>
            <AvatarImage src={user.image} />
            <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
          </Avatar>
        ) : (
          <div className="flex items-center justify-center rounded-full bg-accent size-8">
            <span className="text-sm">{user.name?.charAt(0)}</span>
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="font-semibold">
          {user.name}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/admin/update-results">
            <Tally5 className="size-4" />
            <span>Update Results</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/admin/update-standings">
            <TrendingUp className="size-4" />
            <span>Update Standings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="size-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
