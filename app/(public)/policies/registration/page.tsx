import { PageHeading } from '@/components/page-heading';
import { PageInfoContainer } from '@/components/page-info-container';

export default function RegistrationPolicyPage() {
  return (
    <>
      <PageHeading title="Team and Player Registration Policy" />
      <PageInfoContainer>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">A. Team Registration</h2>
          <p className="font-semibold">1. Notice</p>
          <p className="pl-2">
            Notice of registration for the Fall, Spring and Summer Rounds shall
            be sent approximately nine (9) weeks prior to the first match of
            each Round.
          </p>
          <div className="space-y-2 my-6">
            <p className="font-semibold">2. Deadlines</p>
            <ul className="pl-2 space-y-2">
              <li>
                a. Registration shall be due five (5) weeks prior to the first
                match.
              </li>
              <li>
                b. Late registration shall be allowed until four (4) weeks prior
                to the first match, subject to a penalty of $50.
              </li>
              <li>
                c. Thereafter, late registration shall be allowed until three
                (3) weeks prior to the first match only as follows, and subject
                to an additional penalty of $50 (total late fee of $100):
              </li>
              <li>
                i. Late registration for a particular division shall be allowed
                only if there is a “bye” in that division.
              </li>
              <li>
                ii. At the option of the Competition Committee, if there are at
                least six (6) teams who register late, they may be aggregated
                into a new division for the next Round.
              </li>
            </ul>
          </div>

          <div className="space-y-2 my-6">
            <p className="font-semibold">3. Fees</p>
            <ul className="pl-2 space-y-2">
              <li>
                a. Team registration fees shall be $600 per Round. Registration
                fees shall not be refunded after the deadline for late
                registration as provided in ‘A. Team Registration Section 2.b‘
                above. Notwithstanding the foregoing, is a division schedule
                does not provide nine (9) games per round, each remaining team
                shall be entitled to a pro-rata refund of their team
                registration fee.
              </li>
              <li>
                b. Team registration fees shall be payable at the time of
                registration.
              </li>
              <li>
                c. If a team fails to pay its team registration fee and
                penalties in full by at least three (3) weeks prior to the first
                match-date of a Round, it shall not be allowed to play in that
                Round, and their place in the schedule shall be treated as a
                “bye.”
              </li>
              <li>
                d. Teams shall have the option of paying their team registration
                fees on an annual basis before the start of the Fall Round. If
                paid annually at least five (5) weeks prior to the first match
                of the Fall Round, the annual amount shall be discounted five
                percent (5%).
              </li>
              <li>
                e. New teams are required to pay a $200 team bond (security
                deposit), which shall be refundable less fees owed should the
                team be expelled from or voluntarily leave the League.
              </li>
              <li>
                f. Newly-registering teams shall not be subject to monetary
                penalties for late registration, but shall be subject to
                monetary penalties for late payment of team registration fees.
                (A team which has an existing AMSA ID number or which has more
                than 10 players who played on the same team in the previous
                Round does not qualify as a “newly-registering team.”)
              </li>
              <li>
                g. Team fees must be paid in full by one credit card, check or
                money order.
              </li>
              <li>
                h. Team fees are not refundable after the final day of the
                registration period.
              </li>
            </ul>
          </div>

          <div className="space-y-2 my-6">
            <p className="font-semibold">4. Exceptions</p>
            <p>
              The Competition Committee shall have the authority to extend any
              of the foregoing deadlines for good cause shown. In the case of
              late payment of fees, a deadline may be extended only where the
              team submits in writing a reasonable proposal for payment.
            </p>
          </div>

          <h2 className="text-lg font-semibold">B. Player Registration</h2>
          <div className="space-y-2 my-6">
            <p className="font-semibold">1. Procedure</p>
            <p>In order to register, a player must do the following:</p>
            <ul className="pl-2 space-y-2">
              <li>
                a. Complete a registration form, including signing a waiver of
                liability in favor of the Association;
              </li>
              <li>b. Submit a photograph of himself; and</li>
              <li>c. Pay a registration fee.</li>
            </ul>
          </div>

          <div className="space-y-2 my-6">
            <p className="font-semibold">2. Fees</p>
            <p>
              Player fees shall be $40 per player per team each season. A player
              registering for more than one team shall pay $40 per team.
            </p>
          </div>

          <div className="space-y-2 my-6">
            <p className="font-semibold">3. Completion of Registration</p>
            <p>
              A player is considered registered only after he has paid his
              registration fee and has been listed on the team roster.
            </p>
          </div>

          <div className="space-y-2 my-6">
            <p className="font-semibold">4. Non-Refundability</p>
            <p>
              Player fees are non-refundable after the first match played by any
              team for which the player is registered, regardless whether the
              player actually plays in the match.
            </p>
          </div>

          <h2 className="text-lg font-semibold">C. Declined Payments</h2>
          <div className="space-y-6 my-6">
            <p>
              1. Payment of any fee or fine due to AMSA which is declined by any
              financial institution for any reason, shall be replaced by credit
              card, cashier’s check or money order in an amount which includes:{' '}
            </p>

            <ul>
              <li>a. the original declined amount</li>
              <li>b. any bank charges incurred by AMSA</li>
              <li>c. a $10.00 penalty.</li>
            </ul>

            <p>
              2. A player whose payment of registration fee is declined shall be
              removed from the roster of the team for which he sought to
              register; and he shall not be reinstated until and unless he has
              complied with this Section.
            </p>

            <p>
              3. A team whose payment of registration fee is declined shall be
              removed from the division for which they sought to register; and
              they shall not be reinstated until and unless they have complied
              with this Section.
            </p>

            <p>
              4. A team or player whose payment of any fine or penalty is
              declined shall be suspended from play, and shall not be reinstated
              until and unless they have complied with this Section.
            </p>
          </div>
        </div>
      </PageInfoContainer>
    </>
  );
}
