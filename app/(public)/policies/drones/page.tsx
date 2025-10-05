import { PageHeading } from '@/components/page-heading';
import { PageInfoContainer } from '@/components/page-info-container';

export default function DronesPolicyPage() {
  return (
    <>
      <PageHeading title="Drone Policy" />
      <PageInfoContainer>
        <div className="space-y-6">
          <p>
            The flying of drones is prohibited at OCSC at all times when the
            fields are in use by AMSA. No soccer match will be allowed to start
            or continue if there is a drone or similar device flown above or in
            the immediate area of a soccer field. The referee will have full
            discretion to determine the area surrounding the field and the
            authority to suspend a game if drones are around.
          </p>
          <p>Approved by the AMSA Board of Captains on February 9, 2016.</p>
        </div>
      </PageInfoContainer>
    </>
  );
}
