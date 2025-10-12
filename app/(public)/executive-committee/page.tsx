import { PageInfoContainer } from '@/components/page-info-container';

import { PageHeading } from '@/components/page-heading';

export default function ExecutiveCommitteePage() {
  return (
    <div>
      <PageHeading title="Executive Committee" />
      <PageInfoContainer>
        <p>
          The Austin Men&apos;s Soccer Association is governed by its Executive
          Committee which is made up of AMSA Officers and Division
          Commissioners. The Executive Committee reports to the AMSA Board of
          Captains. Please email the{' '}
          <a
            href="mailto:admin@austinmenssoccer.com"
            className="underline underline-offset-4 text-blue-500"
          >
            AMSA Administrator
          </a>{' '}
          if you need contact information for any EC members.
        </p>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Officers</h4>
          <ul className="list-inside space-y-2 pl-2">
            <li>President: Austin Manning</li>
            <li>Past President: Matt Prewett</li>
            <li>Vice President: Roberto Silva</li>
            <li>Treasurer: Matt Prewett</li>
            <li>Field Commissioner: Eric Cole</li>
            <li>Senior Commissioner: Nigel Bowman</li>
            <li>Rules & Policies Commissioner: vacant</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Division Commissioners</h4>
          <ul className="list-inside space-y-2 pl-2">
            <li>Senior Commissioner: Nigel Bowman (Austin Thunder FC)</li>
            <li>AMSA Premier: Oscar Orroyo</li>
            <li>AMSA D1: Matt Berman (ATX United FC)</li>
            <li>AMSA D2: Will Henderson (Verity FC)</li>
            <li>AMSA D3: Scott Brenneman</li>
            <li>AMSA D4: Matias Garcia (Nopaleros)</li>
            <li>AMSA D5: Kevin Fricke (Austin Athletic Club)</li>
            <li>AMSA O30P: Mike Butterworth (Austin Thunder FC)</li>
            <li>AMSA O30A: Tom McCarthy (South Austin FC)</li>
            <li>AMSA O30B: Mason Canales (Austin Power FC)</li>
            <li>AMSA O40P: Jonathon Tack (FC Wolverine)</li>
            <li>AMSA O40A: </li>
            <li>AMSA O40B: Victor Juarez</li>
            <li>AMSA O50P: Scott Thomsen (n/a)</li>
            <li>AMSA O50A: Lee Gould (Austin Thunder FC)</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold">AMSA Committees</h4>
          <ul className="list-inside space-y-2 pl-2">
            <li>Chair of the Competition Committee: Nigel Bowman</li>
            <li>
              Chair of the Discipline & Procedures Committee: Jonathon Tack
            </li>
            <li>Chair of the Field Sub-Committee: Eric Cole</li>
            <li>Chair of the Referee Sub-Committee: Jonathon Tack</li>
            <li>
              Chair of the Technology and Website Sub-Committee: Kevin Fricke
            </li>
          </ul>
        </div>
      </PageInfoContainer>
    </div>
  );
}
