// Import global styles and fonts
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { Ban } from 'lucide-react';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex items-center justify-center from-muted/50 to-background h-full bg-gradient-to-b from-30%">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Ban />
            </EmptyMedia>
            <EmptyTitle>Page Not Found</EmptyTitle>
            <EmptyDescription>
              The page you are looking for does not exist.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button asChild>
              <Link href="/">Go Back Home</Link>
            </Button>
          </EmptyContent>
        </Empty>
      </body>
    </html>
  );
}
