import { PageInfoContainer } from '@/components/page-info-container';
import { PageHeading } from '@/components/page-heading';

export default function OpenCarryPolicyPage() {
  return (
    <>
      <PageHeading title="Open Carry Policy" />
      <PageInfoContainer>
        <ol className="space-y-6 list-decimal">
          <li>
            The open display of any firearm or weapon in the vicinity of any
            AMSA sanctioned competition, practice, meeting or other event, other
            than by a licensed law enforcement officer, shall be considered a
            dangerous condition such as would preclude the safety of
            participants, officials and spectators.
          </li>
          <li>
            No AMSA member association shall permit the start or continuation of
            any AMSA sanctioned game, practice, meeting or event if a dangerous
            condition exists under paragraph (a) of this Rule.
          </li>
          <li>
            Any designated official of a member association, or in the absence
            of such, the referee, shall be the sole judge of whether an open
            display is &quot;in the vicinity&quot; of the competition, practice,
            meeting or other event.
          </li>
          <li>
            Nothing in this rule shall be construed as limiting the
            referee&apos;s authority to abandon or delay a match.
          </li>
        </ol>
      </PageInfoContainer>
    </>
  );
}
