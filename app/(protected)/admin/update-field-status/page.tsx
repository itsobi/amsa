import { PageHeading } from '@/components/page-heading';

import { preloadQuery } from 'convex/nextjs';
import { api } from '@/convex/_generated/api';
import { UpdateFieldStatusView } from './_components/update-field-status-view';

export default async function UpdateFieldStatusPage() {
  const preloadedFields = await preloadQuery(api.fields.getFields, {});

  return (
    <>
      <PageHeading title="Field Status (Admin)" />

      <div className="flex justify-center w-full">
        <UpdateFieldStatusView preloadedFields={preloadedFields} />
      </div>
    </>
  );
}
