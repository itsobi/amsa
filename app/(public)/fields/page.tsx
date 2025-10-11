import { PageHeading } from '@/components/page-heading';
import { FieldsView } from './_components/fields-view';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';

export default function FieldsPage() {
  return (
    <>
      <PageHeading
        title="Fields"
        action={
          <Link href="/admin/update-field-status">
            <Button variant="outline">
              <Pencil />
              Edit Field Status
            </Button>
          </Link>
        }
      />
      <FieldsView />
    </>
  );
}
