import { PageHeading } from '@/components/page-heading';
import { PageInfoContainer } from '@/components/page-info-container';

export default function SuspensionsPage() {
  return (
    <>
      <PageHeading
        title="AMSA Penalties (Suspensions, Fines)"
        description="Updated: Oct 3 2025
"
      />

      <PageInfoContainer>
        <ul className="space-y-2 list-disc list-inside">
          <li>Andres Vaso</li>
          <li>Almanza, Aldo</li>
          <li>Stephens, Drew</li>
          <li>Ayala, Miguel</li>
          <li>Burke, Cory</li>
          <li>Villamarin, Juan Pablo</li>
          <li>Villatoro, Moises</li>
          <li>Evans, Mark</li>
          <li>Garcia, Gustavo</li>
          <li>del Amo, Paul</li>
          <li>Patel, Veer</li>
          <li>Larios, Joshua</li>
          <li>Keiderling, Jamie</li>
          <li>Vargas, Walter</li>
          <li>Sequera, Yonathan</li>
          <li>Larkin, Tom</li>
          <li>Peardon, Taylor</li>
          <li>Hernandez, Alex</li>
          <li>Hutchison, Matthew</li>
          <li>Mojica, Will</li>
          <li>Jennison, Ocean</li>
          <li>Gutierrez, Isaac</li>
          <li>Baquedano, Diego</li>
          <li>Avalos, Brien</li>
          <li>Ottoniel, Moises</li>
          <li>Jaimes, Fernando</li>
          <li>Mukabi, Joel</li>
          <li>Sidle, Trent</li>
        </ul>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Yellow Cards</h4>
          <p>
            <span className="font-semibold">UB:</span> Unsporting behavior |{' '}
            <span className="font-semibold">DT:</span> Dissent by word or action
            | <span className="font-semibold">PI:</span> Persistent infringement
            | <span className="font-semibold">DR:</span> Delaying the restart |{' '}
            <span className="font-semibold">FRD:</span>
            Failure to respect the distance |{' '}
            <span className="font-semibold">E:</span> Entering or re-entering
            the field without permission |{' '}
            <span className="font-semibold">L:</span> Deliberately leaving the
            field without permission |{' '}
            <span className="font-semibold">YCA</span> (Yellow Card
            Accumulation): Three yellow cards within a Round = $10 & 1-matchday.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Red Cards</h4>
          <p>
            <span className="font-semibold">SFP:</span> Serious foul play = $25
            & 2-matchdays | <span className="font-semibold">VC:</span> Violent
            conduct = $50 & 3-matchdays | S: Spitting at any person = $50 &
            3-matchdays |<span className="font-semibold">DOGSO</span> (DGH/DGF):
            Denying an Obvious Goal-Scoring Opportunity = $10 & 1-matchday |{' '}
            <span className="font-semibold">AL:</span> Offensive/foul, insulting
            or abusive language and/or gestures = $10 & 1-matchday |{' '}
            <span className="font-semibold">2CT:</span> Second caution/yellow
            card in the same match = $10 & 1-matchday
          </p>
        </div>
      </PageInfoContainer>
    </>
  );
}
