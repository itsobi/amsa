import { PageHeading } from '@/components/page-heading';
import { PageInfoContainer } from '@/components/page-info-container';

export default function ParkingPolicyPage() {
  return (
    <>
      <PageHeading title="Parking Policy" />
      <PageInfoContainer>
        <p>
          Parking is allowed only in designated parking areas. This includes the
          paved surface parking area and the unpaved overflow parking area on
          the west side of the complex. No parking is allowed on the gravel
          road, blocking entry or exit gates, or on center islands in paved
          parking areas. Parking is not allowed inside the AMSA field
          maintenance area (defined as the area inside the boulders) except with
          special permission from AMSA. Failure to comply will result in
          vehicles being towed.
        </p>
      </PageInfoContainer>
    </>
  );
}
