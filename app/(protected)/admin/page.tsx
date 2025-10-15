import { PageHeading } from '@/components/page-heading';
import { AdminHomeView } from './_components/admin-home-view';

export default function AdminHomePage() {
  return (
    <>
      <PageHeading
        title="Admin Home"
        description="Welcome. By being an admin, you are able to update scores, standings, and field statuses."
      />
      <AdminHomeView />
    </>
  );
}
