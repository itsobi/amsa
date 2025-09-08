'use client';

import { Switch } from '@/components/ui/switch';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={isDark}
        onCheckedChange={() => setTheme(isDark ? 'light' : 'dark')}
        id="theme-toggle"
      />
      {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </div>
  );
}
