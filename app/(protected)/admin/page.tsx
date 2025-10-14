import { PageHeading } from '@/components/page-heading';
import { AdminHomeView } from './_components/admin-home-view';

export default function AdminHomePage() {
  return (
    <>
      <PageHeading
        title="Admin Home"
        description="Welcome to the Admin Home. By being an admin, you can update scores and standings."
      />
      <AdminHomeView />
    </>
  );
}
