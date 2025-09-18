import { Loader } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center gap-1 h-screen">
      <Loader className="size-4 animate-spin" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  );
}
