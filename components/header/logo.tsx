'use client';

import Image from 'next/image';

export function Logo() {
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
