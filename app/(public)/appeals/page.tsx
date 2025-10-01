import { PageHeading } from '@/components/page-heading';
import { PageInfoContainer } from '@/components/page-info-container';
import Link from 'next/link';

export default function AppealsPage() {
  return (
    <>
      <PageHeading title="AMSA Appeals" />
      <PageInfoContainer>
        <p>
          <Link href="/rules" className="underline text-blue-500">
            AMSA Rule 5
          </Link>{' '}
          describes the AMSA Appeal process. Carefully read all 11 paragraphs
          (AMSA Rules 5.1-5.11) before submitting a request to appeal a penalty.
          AMSA Rule 5.3 and AMSA Rule 5.4 prevent most requests to appeal from
          being accepted.
        </p>

        <p>
          File your appeal via this{' '}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2sgRdBIRgQ84Tn4GHAQiroPAIQ6db1p-G1cHHaehpXz15sA/viewform"
            className="underline text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            form
          </a>
          .
        </p>

        <p>
          <span className="font-bold">Please note:</span> The AMSA Administrator
          is not at liberty to discuss the appeal. A penalty is a disciplinary
          matter, which is under the purview of the{' '}
          <a
            href="mailto:disco@austinmenssoccer.com"
            className="underline text-blue-500"
          >
            AMSA Disciplinary Committee
          </a>
          . Questions about the appeal process may be directed at:{' '}
          <a
            href="mailto:admin@austinmenssoccer.com"
            className="underline text-blue-500"
          >
            admin@austinmenssoccer.com
          </a>
        </p>
      </PageInfoContainer>
    </>
  );
}
