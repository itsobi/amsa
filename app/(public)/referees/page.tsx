import { PageHeading } from '@/components/page-heading';
import { PageInfoContainer } from '@/components/page-info-container';

export default function RefereesPage() {
  return (
    <>
      <PageHeading title="Become a Referee" />
      <PageInfoContainer>
        <div className="text-center space-y-2 text-lg">
          <p>
            Interested in becoming a USSF-certified Referee or Assistant
            Referee? Fill out this{' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScebNoURmoQ8CPnHNz1JgT2bevp_gDH6jH61lLSXq1kd_bFQA/viewform"
              className="text-blue-500 underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              form
            </a>
            .
          </p>

          <p>
            For information about refereeing in AMSA, contact our Referee
            Assignor,{' '}
            <a
              href="mailto:referees@austinmenssoccer.com"
              className="text-blue-500 underline underline-offset-4"
            >
              Todd Davis
            </a>
          </p>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Soccer games in Austin Men&apos;s Soccer Association (AMSA) would not
          happen without the men and women who officiate our games. Referees and
          assistant referees in AMSA must be USSF-certified at the Grassroots
          level and 18 years or older to officiate.
        </p>

        <div className="space-y-2">
          <h4 className="text-xl">Payment</h4>
          <ul className="list-inside space-y-2 pl-2">
            <li>
              - Center referees are paid $70 per game and assistant referees are
              paid $40 each, for a 3-person crew.
            </li>
            <li>
              - Center referee are paid $80 and the assistant referee $50 for a
              2-person crew.
            </li>
            <li>- A single center referee is paid $100 per game.</li>
            <li>
              - During summer play only a center referee is assigned per game,
              no assistant referees. The single center referee will receive $100
              per game.{' '}
              <span className="italic text-sm">
                (Fee increase effective Fall 2022)
              </span>
            </li>
            <li>
              - Base referee pay is paid in cash by both teams at the time of
              the game.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-xl">Bonus</h4>
          <ul className="list-inside space-y-2 pl-2">
            <li>
              - To encourage higher grade referees to officiate AMSA games, pay
              an incentive bonus for each game:
            </li>
            <li>
              - For each game they have officiated during a single AMSA Round
              (Fall or Spring; not Summer) a Regional referees receives a $10
              bonus per game and referees above Regional get a $15 bonus per
              game. To qualify a referee must officiate a minimum of 10
              documented AMSA games as referee or assistant referee. The count
              resets after each AMSA Round.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-xl">Incentive</h4>
          <ul className="list-inside space-y-2 pl-2">
            <li>
              - To retain referees and improve referee quality by paying an
              Incentive Bonus for referees that officiate at least 15 documented
              AMSA during a single AMSA Round (Fall or Spring): $15 per game for
              referees and assistant-referees.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-xl">Reimbursement</h4>
          <ul className="list-inside space-y-2 pl-2">
            <li>
              - Reimburse newly-certified Grassroots referees the cost of their
              certification and training (up to $80) after they have officiated
              10 AMSA games during their first year of refereeing for AMSA.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-xl">Refreshments</h4>
          <ul className="list-inside space-y-2 pl-2">
            <li>
              - AMSA provides a Referee Hospitality table at Onion Creek Soccer
              Complex and at the off-site fields during the AMSA Fall and Spring
              season games.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-xl">Assessments</h4>
          <ul className="list-inside space-y-2 pl-2">
            <li>
              - All referees seeking assessments, whether maintenance or
              upgrade, must have officiated in a minimum of four games during
              the current League season. This also applies to members of their
              assessment crew.
            </li>
          </ul>
        </div>
      </PageInfoContainer>
    </>
  );
}
