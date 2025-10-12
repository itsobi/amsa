import { PageHeading } from '@/components/page-heading';
import { PageInfoContainer } from '@/components/page-info-container';

export default function StaffPage() {
  return (
    <>
      <PageHeading title="Staff" />
      <PageInfoContainer>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">AMSA Administrator</h4>
          <a
            href="mailto:admin@austinmenssoccer.com"
            className="underline underline-offset-4 text-blue-500"
          >
            Robert S.
          </a>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold">
            AMSA Marketing & Growth Coordinator
          </h4>
          <p>Bryan Kern</p>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Contractors</h4>
          <p>
            {' '}
            (please contact the AMSA Administrator for contact information):
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Referee Assignor</h4>
          <p>Todd Davis</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">OCSC Referee Coordinator</h4>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Offsite Referee Coordinator</h4>
          <p>Carl Smith</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">OCSC Field Facilitator</h4>
          <p>Alex Espinoza</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Offsite Site Supervisor</h4>
          <p>Jesus T.</p>
        </div>
      </PageInfoContainer>
    </>
  );
}
