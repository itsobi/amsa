import { Button } from '@/components/ui/button';
import { PageHeading } from '@/components/page-heading';
import { StandingsView } from './_components/standings-view';
import { Pencil } from 'lucide-react';
import Link from 'next/link';

export default function StandingsPage() {
  return (
    <>
      <PageHeading
        title="Standings"
        action={
          <Link href="/admin/update-standings">
            <Button variant="outline">
              <Pencil className="size-4" />
              Update Standings
            </Button>
          </Link>
        }
      />
      <StandingsView />
    </>
  );
}
