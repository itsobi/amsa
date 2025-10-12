import { PageInfoContainer } from '@/components/page-info-container';

import { PageHeading } from '@/components/page-heading';

export default function ContactPage() {
  return (
    <div>
      <PageHeading title="Contact Us" />
      <PageInfoContainer>
        <div className="text-center">
          <p className="font-semibold">Austin Men&apos;s Soccer Association</p>
          <p>4408 Spicewood Springs Rd.</p>
          <p>Austin, TX 78759</p>
          <p>Office: 512-9912499</p>
          <p>
            Email:{' '}
            <a
              href="mailto:admin@austinmenssoccer.com"
              className="text-blue-500 underline underline-offset-4"
            >
              admin@austinmenssoccer.com
            </a>
          </p>
        </div>
      </PageInfoContainer>
    </div>
  );
}
