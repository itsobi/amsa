import { PageHeading } from '@/components/page-heading';
import { PageInfoContainer } from '@/components/page-info-container';

export default function ZeroTolerancePage() {
  return (
    <>
      <PageHeading title="Zero Tolerance Policy" />
      <PageInfoContainer>
        <p>
          The League has “zero tolerance” regarding any taunting,
          discrimination, bigotry, foul, abusive or threatening language
          directed towards other players, referees, or fans based on race,
          ethnicity, gender, sexual orientation, or religion.
        </p>
        <p>
          Referees are urged to treat such instances as Foul and Abusive
          Language in all cases.
        </p>
        <p>
          Referees are asked to punish such instances appropriately in all
          cases—with a verbal Caution, Yellow Card or Red Card—according to the
          severity of the situation and their own judgment.
        </p>
        <p>
          A “zero tolerance policy” means a referee can issue an immediate red
          card in such incidences if he/she deems it appropriate.
        </p>

        <p>
          In accordance with our “zero tolerance policy,” the AMSA D&P Committee
          holds the right to hear and review any accusations of such behavior,
          and levy punishments accordingly. These punishments may be up to and
          including individual players or teams being suspended from one or more
          matches or removed from the League entirely, based upon the severity
          of the actions and the track record of each guilty party.
        </p>
      </PageInfoContainer>
    </>
  );
}
