import { PageInfoContainer } from '@/components/page-info-container';
import { PageHeading } from '@/components/page-heading';

export default function MailingPolicyPage() {
  return (
    <>
      <PageHeading title="Mailing List Policy" />
      <PageInfoContainer>
        <ol className="space-y-6 list-decimal">
          <li>
            AMSA mailing lists (including the AMSA captains contact list) may
            not be used by any other organization without the express consent of
            the AMSA President.
          </li>
          <li>
            AMSA mailing lists may be used by other organizations only for
            purposes which are related to soccer and which would benefit the
            members of AMSA.
          </li>
          <li>
            In the event AMSA consents to the use of its mailing list by another
            organization, AMSA shall distribute the material provided by the
            other organization via &quot;email blast&quot;, and AMSA shall not
            provide the list itself to the other organization.
          </li>
          <li>
            Unless decided otherwise by the President of AMSA, the charge for
            use of AMSA&apos;s mailing list shall be $200 per email blast sent
            by AMSA. The $200 fee must be paid prior to AMSA&apos;s sending the
            email blast.
          </li>
        </ol>
      </PageInfoContainer>
    </>
  );
}
