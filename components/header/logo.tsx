'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!theme || !mounted) return null;

  if (theme === 'dark')
    return (
      <Image
        priority
        src="/images/white-logo.png"
        alt="logo"
        width={150}
        height={150}
      />
    );

  return (
    <Image
      priority
      src="/images/amsa-logo.png"
      alt="logo"
      width={150}
      height={150}
    />
  );
}
