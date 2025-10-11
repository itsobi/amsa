'use client';

import { authClient } from '@/lib/auth-client';

interface Props {
  title: string;
  action?: React.ReactNode;
  description?: string;
}

export function PageHeading({ title, description, action }: Props) {
  const session = authClient.useSession();
  return (
    <div className="mb-10 space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-4xl font-semibold">{title}</h1>
        {action && session.data?.user.id && action}
      </div>
      {description && (
        <p className="text-muted-foreground text-sm md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
