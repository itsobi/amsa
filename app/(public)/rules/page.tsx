import { PageHeading } from '@/components/page-heading';
import Link from 'next/link';

const APPEALS = [
  '5.1 A player, captain, or team upon whom a penalty is imposed may file an appeal to all penalties.',
  '5.2 Appeals must be filed within 10 days of notice of imposition of the penalties. The Association may extend this deadline as necessary.',
  '5.3 Appeals shall be submitted in writing to the Disciplinary & Procedures Committee, and state (a) the grounds for the appeal and (b) the evidence in support of the appeal.',
  '5.4 A Referee’s decision may not be appealed to. The Referee’s match report and any supplement thereto or any revision thereof, shall be conclusive of the facts.',
  '5.5 The penalty for receiving a second caution in the same match may not be appealed to.',
  '5.6 The penalty for receiving three yellow cards in separate matches while playing for the same team during one season may not be appealed to.',
  '5.7 Penalties may be reduced for compelling reasons.',
  '5.8 The filing of an appeal shall have no suspensive effect of the execution of the penalty.',
  '5.9 After the filing of an appeal to a matchday suspension the decision shall be made within a ten days period.',
  '5.10 If an appeal is awarded the Association shall determine whether the reimbursement of fines, field rental costs, referee fees and any other financial penalties assessed shall be made.',
  '5.11 Appeal Hearing. In case the Disciplinary & Procedures Committee does not reach a unanimous decision, a hearing may be held.',
];

interface RulesOrderedListSectionProps {
  articleHeader: string;
  orderedList?: string[] | { text: string; sublist?: string[] }[];
}

function RulesOrderedListSection({
  articleHeader,
  orderedList,
}: RulesOrderedListSectionProps) {
  return (
    <div className="space-y-2 mb-6">
      <h3 className="text-xl">{articleHeader}</h3>
      {orderedList?.length && (
        <ol className="space-y-2 list-decimal list-inside pl-2">
          {orderedList.map((item, index) => (
            <li key={index}>
              {typeof item === 'object' ? item.text : item}
              {typeof item === 'object' && item.sublist && (
                <ol className="space-y-2 list-decimal list-inside pl-4 mt-2">
                  {typeof item === 'object' &&
                    item.sublist &&
                    item.sublist.map((subItem) => <li>{subItem}</li>)}
                </ol>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

interface RulesUnorderedListSectionProps {
  articleHeader: string;
  unorderedList?: string[];
}

function RulesUnorderedListSection({
  articleHeader,
  unorderedList,
}: RulesUnorderedListSectionProps) {
  return (
    <div className="space-y-2 mb-6">
      <h3 className="text-xl">{articleHeader}</h3>

      {unorderedList?.length && (
        <ul className="space-y-2 list-inside pl-2">
          {unorderedList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function RulesPage() {
  return (
    <>
      <PageHeading title="AMSA Rules" />

      <div className="flex flex-col gap-8 mx-auto max-w-5xl">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Preface</h2>

          <ul className="space-y-2">
            <li>
              - The AMSA Rules are based on authority which is provided by the
              AMSA Constitution.
            </li>
            <li>
              - The AMSA Rules include provisions which govern all competitions
              organized by the Association.
            </li>
          </ul>
        </div>

        {/* 1 Competitions and Divisions */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            1 Competitions and Divisions
          </h2>

          <h3 className="text-xl">1.1 Competition Committee</h3>

          <ol className="space-y-2 list-decimal list-inside pl-2">
            <li>
              <span className="font-semibold">Purpose:</span> There shall be a
              Competition Committee for the purpose of deciding on competition
              matters, including but not limited to Division Alignments and
              Scheduling.
            </li>
            <li>
              <span className="font-semibold">Composition:</span> The Chairman
              of the Competition Committee shall be the Senior Commissioner, who
              is Appointed by the President of the Association. The Competition
              Committee shall consist of members of the Executive Committee, all
              of whom are appointed by the President.
            </li>
          </ol>

          <div className="mb-6" />

          <RulesOrderedListSection
            articleHeader="1.2 Season"
            orderedList={[
              'The Association season will run from early Fall of one year until the late Spring of the next year. Each season will be made up of two “Rounds,” which will consist of a Fall “Round” (1st Round) and a Spring “Round” (2nd Round). Separately, there shall be a Summer Season. All schedules shall be subject to the approval of the Executive Committee.',
              'The Spring Round shall be considered complete based upon the end-date as designated by the Competition Committee prior to the start of the Spring Round. Once the Spring Round has begun, any changes to the end-date must be approved by the Executive Committee.',
            ]}
          />
          <RulesOrderedListSection
            articleHeader="1.3 Competitions"
            orderedList={[
              'The Association shall sponsor league play in two competitions: an Open competition and an Age Restricted competition. Any team meeting the general requirements of the Association may enter the Open competition. Teams in the Age Restricted competition shall be composed entirely of players who meet the age requirements for that division. ',
            ]}
          />

          <RulesUnorderedListSection
            articleHeader="1.4 Divisional Structure Within Competitions"
            unorderedList={[
              'All teams competing within the Association, in either Open competition or Age-Restricted competition, shall be grouped within a Division',
              'The number of teams in a division shall normally be ten, except when necessary to accommodate a workable schedule among all registered teams.',
            ]}
          />

          <RulesUnorderedListSection
            articleHeader="1.4.1 Open Competition Divisions"
            unorderedList={[
              'Teams competing in Open Competition shall be grouped into Divisions, to be known as Premier Division, Division 1, Division 2, and so on.',
            ]}
          />

          <RulesOrderedListSection
            articleHeader="1.4.2 Age-Restricted Competition Divisions"
            orderedList={[
              'Teams competing in Age-Restricted Competition shall be grouped into one of three Age Categories, to be known as Over 30, Over 40, and Over 50.',
              'Teams within each age bracket shall be further grouped into divisions, to be known as Premier Division, Division A, and Division B, and so on.',
              "All FIFA, IFAB and AMSA Rules shall apply to the Men's Age-Restricted Divisions, with the only exception being Age qualification.",
              'A player is eligible to participate in the age-restricted competition if he has attained the required age by July 31 of the upcoming year.',
            ]}
          />

          <p className="pl-4 italic text-center mb-6">
            *By way of example, a player who turns 30 by July 31, 2025 is
            eligible to play in an O30 division during the entire 2024-25
            season.*
          </p>

          <RulesOrderedListSection
            articleHeader="1.5 Classification"
            orderedList={[
              {
                text: 'The Competition Committee shall have the power to accept and deny teams.',
              },
              {
                text: 'Continued participation in AMSA will be at the discretion of the Competition Committee, upon guidance from the D&P Committee.',
              },
              {
                text: 'The Competition Committee shall have the power to determine classification of teams between divisions (“Division Alignments”).',
              },
              {
                text: 'The classification shall be determined in preference of having an even-number of teams per division, with the ideal amount to be 10 teams per division, or as determined by the Competition Committee.',
              },
              {
                text: 'The Competition Committee shall seek to promote parity of competition in any division in determining classification, using the following criteria:',
                sublist: [
                  'The competitive level of the team, as evidenced by (1) their won-loss and goals-for-versus-goals-against record in the preceding season; (2) the loss and / or addition of players; and (3) any other relevant information as to the competitive level of the team.',
                  'The impact on other teams in any division affected by the classification.',
                  'The wishes of other teams in any division affected by the classification.',
                ],
              },
              {
                text: 'The Competition Committee shall have the power to change division alignment between Rounds based on performance and perceived strength of teams, so long as the adjustment does not deprive a team of a right to promotion, or violate some other rule of the Association.',
              },
              {
                text: 'Any team other than a new team may appeal their classification prior to the start of the next season. An appeal may be taken as to promotion, relegation, or any decision affecting classification other than initial placement of a new team. Appeal shall be made to the Competition Committee and the Commissioners of the affected divisions, in consultation with the President and Administrator.',
              },
              {
                text: 'The Competition Committee shall have the power to adjust the classification of an appealing team.',
              },
              {
                text: 'Any team wishing to join the Open or the Age-Restricted Competition shall submit their registration to AMSA, whereupon the Competition Committee shall place them in a division appropriate to their competitive level, taking into consideration the criteria set out in Rule 1.4-4 above.',
              },
              {
                text: 'The Division Alignment for the Summer Season is determined dependent on the number of registered teams; division alignment will be implemented as much as possible on the basis of regular season [performance / perceived strength].',
              },
            ]}
          />

          <RulesUnorderedListSection
            articleHeader="1.6 Standings"
            unorderedList={[
              '1.6.1 Standings shall be based on all games played in the Division since the beginning of the Season, subject to Rule 1.7 regarding promotion and relegation. The final standings for each division shall include only those teams active in that division at the end of a Season.',
              'The teams shall be ordered in the Season standings by the following:',
              '1. Total points (three points for a win, one point for a draw).',
              '2. Goal difference, that is, goals scored minus goals conceded.',
              '3. Total number of wins.',
              '4. Total goals scored.',
              '5. Head-to-head match results.',
              '6. Coin toss.',
              '1.6.2 Should any team drop out or be suspended from further play, all games involving that team for the entire season shall be considered “non-counting” games whose results will not be counted in the Division standings. However, if a team has played all of its games in the first Round before dropping out or being suspended, their results in the first Round shall be counted in the standings.',
            ]}
          />

          <RulesUnorderedListSection
            articleHeader="1.7 Promotion and Relegation Between Divisions"
            unorderedList={[
              'All promotions and relegations shall be ratified by the Competition Committee with consideration given to the ‘Division Alignments’ process.',
              '1.7.1 Teams in each Open Competition Division finishing first and second at the end of the annual season shall be promoted to the next higher division within that category, and teams finishing last and next-to-last shall be relegated to the next lower division within that category.',
              '1.7.2 In the Age-Restricted Competitions, within each age group that has more than one Division, the team finishing first at the end of the annual season shall be promoted to the next higher division within that category, and team finishing last shall be relegated to the next lower division within that category.',
              '1.7.3 A team added to a Division after the beginning of the season shall be eligible for the championship and for promotion based on results for the entire Season, but shall be subject to relegation based only on results from the Round such team was added, by comparing their total points to the total points of each other team as from that Round.',
            ]}
          />
          <p className="pl-4 italic text-center mb-6">
            By way of example, if a team is added to a division at the beginning
            of the second Round, their eligibility for championship and
            promotion would be determined by comparing their total points in the
            second Round to the total points of each other team during the
            entire season. But their liability to relegation would be determined
            by comparing their total points to the total points of each other
            team during only the second Round.
          </p>

          <p className="pl-2">
            1.7.4 Notwithstanding the foregoing, teams in the Open competition
            shall not be relegated to an Age-Restricted competition, and teams
            in an Age-Restricted Competition shall not be promoted to the Open
            competition. Nor shall teams in one Age-Restricted competition be
            subject to promotion or relegation to a chronologically-different
            Age-Restricted competition (for example, from Over-30 to Over-40).
          </p>
        </div>

        {/* 2 Registration */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">2 Registration</h2>
          <p className="mb-6">
            The Association shall establish rules and policy governing the
            procedure, deadlines and fees for registration of both teams and
            players.
          </p>

          <RulesUnorderedListSection
            articleHeader="2.1 Fees"
            unorderedList={[
              'The Association Establishes Team & Player Registration Fees via the Team & Player Registration Policy, along with Registration deadlines.',
            ]}
          />

          <RulesOrderedListSection
            articleHeader="2.2 Team Registration"
            orderedList={[
              'All teams shall be registered with the Association. For pertinent provisions, refer to the AMSA Team and Player Registration Policy.',
              'Teams may become affiliated with the Texas State Soccer Association South (TSSAS), USSSA Soccer, the United States Soccer Federation (USSF), and the Federation Internationale de Football Association (FIFA), along with the United States Amateur Soccer Association (USASA), and other soccer-related organizations. Teams will be responsible for registering on or before such deadlines as are set for league, tournament, and State or National Cup play.',
            ]}
          />

          <RulesUnorderedListSection
            articleHeader="2.3 Clubs"
            unorderedList={[
              'Any club organization with unified branding  may register one or more teams in each competition. All such teams shall play under the Club name with qualifying suffixes to distinguish the teams.',
            ]}
          />

          <RulesOrderedListSection
            articleHeader="2.4 Player Registration"
            orderedList={[
              'Every player shall be registered with the Administrator and be registered with a team. For pertinent provisions, refer to the AMSA Team and Player Registration Policy.',
              'Multiple Registration. A player may register with one or more other teams but may not register with more than one team within the same Division.',
              'At the time of registration with any additional team, players shall designate primary or secondary team status for each registration. Players may request a designation change from the league administrator prior to the start of a season’s round or when transferring between teams, subject to approval by the Competition Committee.',
            ]}
          />

          <h3 className="text-xl">2.5 Player Transfer</h3>
          <p>2.5.1 Regular Season</p>
          <p>A registered player may move from one team to another:</p>
          <ol className="space-y-2 list-decimal list-inside pl-2 mb-6">
            <li>
              The captain of the transferor&apos;s new team shall submit a
              transfer request to the Administrator at least 72 hours before the
              next game of transferor&apos;s new team. NOTE: Only the League
              Admin is allowed to add or transfer players between teams.
            </li>
            <li>
              Transfer is considered effective when (1) the player has been
              removed from his old team&apos;s roster, and (2) the player has
              been added to the new team&apos;s roster.
            </li>
            <li>
              In the event a registered team dissolves during the season,
              players registered with that team will be considered free agents
              and eligible to register with another team without incurring any
              registration fees, transfer fees or waiting periods, subject to
              approval by the Administrator.
            </li>
            <li>
              No transfers shall be permitted after the 5th scheduled Match Day
              of the Spring Round, except for:
              <ol className="space-y-2 list-decimal list-inside pl-4 mt-2">
                <li>
                  From the beginning of the season until the end of February a
                  player may change teams without delay once, provided all of
                  the proper procedures have been followed. A player who changes
                  teams a second time during this interval is not eligible to
                  play in the next four games played by the new team.
                  <ol className="space-y-2 list-decimal list-inside pl-4 mt-2">
                    <li>
                      The four game sit-out requirement shall be waived for
                      players changing from teams that have folded in
                      mid-season.
                    </li>
                    <li>
                      The Executive Committee or its agents may waive the
                      requirement if the player can show that he did not play in
                      the preceding four games played by the team he is leaving.
                    </li>
                  </ol>
                  <li>
                    After the 4th scheduled Match Day of the Spring Round until
                    the start of the summer season, no transfers will be
                    permitted.
                  </li>
                </li>
              </ol>
            </li>
            <li>
              The Administrator shall notify the previous captain of the
              transferor team in advance of any transfer.
            </li>
          </ol>

          <RulesOrderedListSection
            articleHeader="2.5.2 Summer Season"
            orderedList={[
              'Players who are currently registered with an AMSA team may be added to any other team roster free of charge for the Summer (“free Summer registration”)',
              'All new players must register with AMSA for the Summer season. The player registration is valid only for the Summer season.',
            ]}
          />
        </div>

        {/* Match Rules and Procedures */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            3 Match Rules and Procedures
          </h2>

          <RulesUnorderedListSection
            articleHeader="3.1 Match Schedule"
            unorderedList={[
              'All pregame requirements as defined by AMSA Rule 3.3 and IFAB Laws of the Game must be met for a team to be considered ready for kick off,  including the enumerated additions below.',
            ]}
          />

          <RulesUnorderedListSection
            articleHeader="3.1.1 Team Roster and Player Cards"
            unorderedList={[
              '1. A team roster containing the first and last name and date of birth of each registered player shall be issued by the Administrator to the team captain. Before each game, the team captain shall print the roster and present it to the “Referee”, defined as any match official. Instead of providing a printed team roster, a hand-written team roster may be presented, so long as it contains the aforementioned requirements. Eligible players may be added (‘written in’) to the team roster prior to the start of the game.',
              '2. It is the responsibility of the team captain to ensure that all players listed are registered and eligible to play at the time of the game.',
              '3. Each player should present to the referee the digital player card issued by the Administrator, or a government-issued photo identity card. The referee shall verify the identity of each player and the corresponding jersey number on the team roster, or shall add the number to the team roster. Late-arriving eligible players must check in with match officials at earliest opportunity.',
              '4. No more than four (4) secondary status players shall be eligible to sign in to a game.',
            ]}
          />

          <p className="pl-2 italic text-center mb-6">
            This Rule must be invoked before the start of the match by notifying
            the Referee and the opposing team, or it shall be considered waived.
            The referee shall document invocation of this rule on the match
            report. Captains have the right to review the opposing team&apos;s
            roster prior to the start of a match.
          </p>

          <RulesOrderedListSection
            articleHeader="3.1.2 Referee Fees"
            orderedList={[
              'Each team must give the referee the designated referee fees before kick-off or as approved by the referee.',
            ]}
          />

          <RulesUnorderedListSection
            articleHeader="3.2 Delays"
            unorderedList={[
              '3.2.1 If one or both teams do not meet pregame requirements at scheduled kick-off time, a ten minute grace period is permitted.',
              '1. If a team does not meet pregame requirements after the ten minute grace period, the present/ready team may allow an additional ten minute grace period, or require the referee to abandon the game.',
              '2 If a team does not meet pregame requirements after the second grace period, the game shall be considered abandoned.',
              '3. If after the grace period(s) the game is played, the delayed time will be deducted from game time if necessary to accommodate the ending time. If there is no following game, the game may be played in full length.',
              '3.2.2 Games must end at least ten minutes before the next game scheduled on the same field. In case of a delay, the referee shall shorten the half-time to a minimum of five minutes and shorten both halves equally in order to end on time. If there is no following game, the game shall be played in full length but not beyond two hours from the scheduled start time.',
              '3.2.3 A game may not be shortened if the delay is caused by the referee or league. ',
              '3.2.4 The referee may add extra time.',
            ]}
          />

          <h3>3.3 Laws of the Game</h3>
          <p>
            All games shall be played under the IFAB’s Laws of the Game with the
            following exceptions and additions:
          </p>

          <ol className="space-y-2 list-decimal list-inside pl-2">
            <li>
              Games may be scheduled on fields that do not meet IFAB&apos;s Laws
              of the Game regarding size, markings, and equipment
              <ol className="space-y-2 list-decimal list-inside pl-4 mt-2">
                <li>
                  Uniforms: All players of a team, except the goalkeeper, must
                  have jerseys of a uniform or matching color. The jerseys must
                  be numbered permanently on the back with at least eight inch
                  numerals (Hand-written or taped-on numbers are not allowed).
                  If the Referee determines that the colors of the teams do not
                  distinguish from each other, the visiting team must change
                  their jerseys.
                </li>
                <li>
                  Players may not change jersey numbers during the game without
                  the referee&apos;s approval.
                </li>
                <li>No two players may have the same jersey number.</li>
                <li>
                  Wearable technology devices must be covered by a wristband.
                </li>
              </ol>
            </li>
            <li>
              Substitutions shall be permitted in accordance with IFAB’s Laws of
              the Game with the following differences:
            </li>
          </ol>

          <ol className="space-y-2 list-decimal list-inside pl-4 mt-2">
            <li>
              A player removed for a substitute may later re-enter via a
              subsequent substitution during the game.
            </li>
            <li>There is no limit on the number of substitutions.</li>
            <li>
              During a stoppage of play the team taking a goal kick, a kick off,
              or a throw-in may be permitted by the referee to make a
              substitution.
            </li>
            <li>
              The referee shall permit the substitution of an injured player
              during a stoppage of play.
            </li>
          </ol>

          <RulesOrderedListSection
            articleHeader="3.4 Postponement of Games"
            orderedList={[
              'Games may be postponed by the Association for such reasons as weather and / or field conditions, field availability, conflict in schedules, and force majeure.',
              'A team may request that a game be postponed with the written consent of the other team. A request to postpone must be submitted to the Administrator and the other captain at least five days in advance of the match in question. The other captains must consent to the postponement at least three days in advance of the match and subsequently approved and confirmed by the League Administrator. A requesting team may not  be granted more than one match postponement per round',
              'In the event a team is scheduled to play a USSF-sanctioned match or tournament concurrent with AMSA League play, the AMSA match will be rescheduled. The Administrator must be informed and receive details not later than three days before the scheduled game.  Provisions outlined in Rule 4.8.1 will be invoked in the case of late notice.',
              'A team which has two or more players playing for an Association’s select team in the same weekend as a scheduled match may decide that the scheduled match be postponed. The Administrator shall be informed and receive details not later than two weeks before the scheduled game.',
              'Under exceptional circumstances the Competition Committee may allow a match to be postponed upon a team’s request, without the consent of both teams. Such a request shall be sent to the Administrator.',
            ]}
          />

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfct0WIGcSUp_ItcGYr9pPGipBkIws2TNl9fPaICwiHBgMn_A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-blue-500 text-center block mb-6"
          >
            Request a Postponement..
          </a>

          <RulesUnorderedListSection
            articleHeader="3.5 Games without an Official Referee"
            unorderedList={[
              'If on the day of the game, an official referee is not available by ten minutes after the scheduled kickoff time, either team may decide to postpone the game. In this instance, the Administrator shall be informed accordingly.',
              'Within the context of this section, if a qualified center referee is found within 10 minutes of game-time, whether or not that referee was scheduled to officiate that game, the game may not be cancelled.',
            ]}
          />

          <RulesUnorderedListSection
            articleHeader="3.6 Abandoned Games"
            unorderedList={[
              '3.6.1 The following shall apply to games that are abandoned for reasons such as weather and / or field conditions, and force majeure:',
              '- If a game is abandoned after the second half has begun, the game shall be considered completed; and the result at the time of abandonment shall stand.',
              '- If a game is abandoned before the second half has begun, the game shall be replayed in its entirety.',
              '3.6.2. When the abandonment is caused by one or both of the teams after the game had been started, the game shall be considered completed. The result of the match will be determined by the Competition Committee based on the match report and input from the D&P Committee as necessary.',
            ]}
          />

          <RulesUnorderedListSection
            articleHeader="3.7 Field Usage After Cancelled or Abandoned Games"
            unorderedList={[
              'If, at game-time, a game is cancelled for lack of officials or for lack of sufficient players, or if a game is abandoned, any number of players may play an informal game until the start of the next scheduled game.',
            ]}
          />
        </div>

        {/* Penalties */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">4 Penalties</h2>

          <RulesUnorderedListSection
            articleHeader="4.1 Power to Punish"
            unorderedList={[
              'The Association has the power to punish clubs, teams, captains, coaches, players, and bystanders for violations of the Rules or other Misconduct.',
            ]}
          />

          <RulesOrderedListSection
            articleHeader="4.2 Disciplinary & Procedures Committee"
            orderedList={[
              'Purpose: There shall be a Disciplinary & Procedures  (D&P) Committee for the purpose of deciding upon disciplinary matters (i.e. imposition of penalties and appeals thereto).',
              'Composition: The D&P Committee shall consist of a minimum of three  voting members of the Executive Committee and a Chairman appointed by the President. The Chairman of the D&P Committee will be responsible to present any necessary facts to the panel, but will not participate in the decisions of the panel.',
              ' DECISIONS: A member of the D&P Committee may not participate in a decision involving any team from the division in which his team or club is registered. Decisions shall be taken by a majority of votes.',
            ]}
          />
          <RulesUnorderedListSection
            articleHeader="4.3 Imposition of Penalties"
            unorderedList={[
              '4.3.1 Referee Report: The Administrator shall review the Referee’s match report and any supplement thereto filed by the referee and shall impose the applicable penalties on behalf of the D&P Committee. ',
              '4.3.2 Emergency Panel: The President or the Chairman of the D&P Committee, with the President’s approval, may convene an emergency D&P panel in appropriate cases. In such cases, penalties may be imposed in deviation from those that are provided for in the Rules, if considered necessary under the circumstances.',
            ]}
          />

          <p>4.3.3 Hearing:</p>
          <ol className="space-y-2 list-decimal list-inside pl-2 mb-6">
            <li>
              The D&P Committee may hold a hearing in appropriate cases. In such
              cases, penalties may be imposed in deviation from those that are
              provided for in the AMSA Rules, if considered necessary under the
              circumstances.
            </li>
            <li>
              A hearing shall be scheduled by the Chairman of the D&P Committee
              and notice shall be given at least five (5) days in advance of the
              hearing. If an affected party cannot attend, they may request one
              postponement, which shall not be unreasonably refused. Hearings
              may be held by video conference or other means which will allow
              all parties to participate simultaneously. Referees may be
              invited.
            </li>
            <li>
              The Chairman of the D&P Committee shall establish procedures to
              ensure a full and fair development of facts and applicable rules.
            </li>
            <li>
              Referees may be invited. The affected party shall have the right
              to bring witnesses, present evidence and make a statement at the
              hearing.
            </li>
            <li>
              Cases involving a hearing shall be decided by majority vote of the
              D&P Committee. The Chairman of the D&P Committee shall be
              responsible for notifying all affected parties of the verdict.
            </li>
          </ol>

          <RulesUnorderedListSection
            articleHeader="4.4 Penalties for Players"
            unorderedList={[
              '4.4.1 A suspension shall be measured for a period of time or by match-days, rather than matches, and shall apply for the specified number of match-days to all teams for whom the player is registered.',
              'If a penalty is imposed which includes a suspension, the player shall not be eligible, as enforced from the next matchday. A “match-day” is a day on which a match is played by one or more of the teams for which the player is registered.',
            ]}
          />

          <div className="mb-6">
            <p className="mb-2">
              By way of example: If a multi-player receives a three-match
              suspension while playing for his primary team, he would be
              suspended from all of the following matches during the next three
              match-days:
            </p>
            <ul className="italic">
              <li>Match-Day One: Only his secondary team plays.</li>
              <li>Match-Day Two: Both his primary and secondary teams play.</li>
              <li>Match-Day Three: Only his primary team plays.</li>
            </ul>
          </div>

          <div className="mb-6">
            <p className="mb-2">
              4.4.2 The following minimum penalties apply to the red card
              (sending-off) offenses:
            </p>
            <ul className="space-y-2 pl-2 mb-6">
              <li>
                <span className="font-semibold">
                  Violent conduct (including fighting, heatbutting, biting):
                </span>{' '}
                Minimum three match-day suspension and a minimum $50.00 fine.
              </li>
              <li>
                <span className="font-semibold">Spitting:</span> Three match-day
                suspension and a minimum $50.00 fine.{' '}
              </li>
              <li>
                <span className="font-semibold">Serious foul play:</span> Two
                match-day suspension and a $25.00 fine.{' '}
              </li>
              <li>
                <span className="font-semibold">
                  Denying a goal or an obvious goal-scoring opportunity (DOGSO):
                </span>{' '}
                One match-day suspension and a $10.00 fine.
              </li>
              <li>
                <span className="font-semibold">
                  Using offensive, insulting or abusive language and/or
                  action(s):
                </span>{' '}
                One match-day suspension and a $10.00 fine.
              </li>
              <li>
                <span className="font-semibold">
                  Receiving a second caution in the same match:
                </span>{' '}
                One match-day suspension and a $10.00 fine.
              </li>
              <li>
                <span className="font-semibold">
                  Failure to promptly leave the vicinity of the field after
                  having been sent off:
                </span>{' '}
                One match-day suspension and $25.00 fine. been sent off: One
                match-day suspension and $25.00 fine.
              </li>
            </ul>
            <p>
              4.4.3 A player who is sent off from a match shall not play in any
              match until his case has been assessed by the D&P Committee. A
              violation of the foregoing rule shall double any resulting penalty
              imposed on the player.
            </p>
          </div>

          <RulesUnorderedListSection
            articleHeader="Misconduct By Bystander (Registered Members)"
            unorderedList={[
              'Misconduct by bystanders who are or have been duly registered AMSA players (members) shall  be penalized by the D&P Committee.',
            ]}
          />

          <RulesOrderedListSection
            articleHeader="4.6 Misconduct Towards Officials"
            orderedList={[
              'Violent conduct (including fighting, biting, headbutting, spitting) toward a Match Official, Association officer or staff: Minimum Six-month suspension and / or a minimum fine of $50.00.',
              'A threat of violence conduct toward a Match Official, Association officer or staff: Four match-day suspension and $60.00 fine.',
              'Using offensive, insulting or abusive language and / or action(s) toward a Match Official, Association officer or staff: Three match-day suspension and a $35.00 fine.',
            ]}
          />

          <p className="text-center italic mb-6">
            See: USSF - "Stronger Policy To Protect Our Referees" on{' '}
            <a
              href="https://www.ussoccer.com/rap"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-blue-500"
            >
              https://www.ussoccer.com/rap
            </a>
          </p>

          <RulesUnorderedListSection articleHeader="4.7 Accumulation of Cards" />

          <RulesUnorderedListSection
            articleHeader="4.7.1 Two or More Red Cards"
            unorderedList={[
              'The additional penalty for a sending off in any subsequent match while playing for the same team during a season shall be as follows:',
              '- Second red card: one match-day suspensions and a $25.00 fine.',
              '— Third red card: two match-day suspensions and a $50.00 fine.',
              '— Fourth and following red cards: four match-day suspensions and a $100.00 fine.',
            ]}
          />

          <RulesUnorderedListSection
            articleHeader="4.7.2 Three or More Yellow Cards"
            unorderedList={[
              'The penalty for a player receiving three yellow cards in separate matches while playing for any one team during one season shall be a one match-day suspension and a $10.00 fine.',
              '1. A player’s tally of yellow cards accumulated shall be erased, following the conclusion of each Round.',
              '2. Suspensions for 3 or more yellow cards listed above must be served for the team with which the player collected the most recent set of 3 cautions.',
            ]}
          />

          <RulesOrderedListSection
            articleHeader="4.8 Participation by an Ineligible Player"
            orderedList={[
              {
                text: 'Participation in a match by an ineligible player shall be penalized as follows:',
                sublist: [
                  'One match-day suspension for player and Captain; $50.00 fine for the team; and a 3-0 loss by forfeiture of the match.',
                  'If a player participated under another player’s name, the suspension for player and Captain shall be three matches; $50.00 fine for the team; and a 3-0 loss by forfeiture of the match.',
                  'Subsequent offenses: Three match-day suspension for player and Captain, $100.00 fine for the team; forfeiture of the match; and, additionally, a deduction of three points in the standings; in the event the player participated under another player’s name, the suspension shall be six match-days.',
                ],
              },
            ]}
          />

          <p className="italic mb-6 text-center">
            NOTE: If the official Captain is not present at the match, the
            penalty shall apply to the designated Captain at check-in, or the
            person who signed the roster.
          </p>

          <RulesUnorderedListSection articleHeader="4.9 Penalties for Teams" />

          <RulesOrderedListSection
            articleHeader="4.9.1 Cancellation of Games"
            orderedList={[
              'Any cancellation of a game with timely notice to the Administrator i.e. by 4:00 PM on Thursday in the week of the match, shall be penalized by a 3-0 loss by forfeiture of the game and a $25.00 fine. NOTE: The fine will double for each subsequent cancellation of a game.',
              'Any cancellation of a game with late notice to the Administrator i.e. by 12:00 PM on Friday in the week of the match, shall be penalized by a 3-0 loss by forfeiture of the game and a $25.00 fine, and payment of the full cost of referees assigned to the game. NOTE: The fine will double for each subsequent cancellation of a game.',
              'Any cancellation of a game after noon on Friday, or without any notice at all, shall be penalized by a 3-0 loss by forfeiture of the game and a $100.00 fine, and payment of the full cost of referees assigned to the game. NOTE: The fine will double for each subsequent cancellation of a game.',
            ]}
          />

          <p className="italic mb-6 text-center">
            By way of example: A team fails to give timely notice as provided
            above, and fails to have at least seven eligible players ready to
            play by the time the match is required to start under the Rules.
          </p>

          <RulesUnorderedListSection
            articleHeader="4.9.2 Failure to Reschedule a Postponed Match"
            unorderedList={[
              'All re-scheduled games must be completed by the end of the Spring Round. Failure to complete rescheduled matches as assigned shall result in a 3-0 loss by forfeit and a $50.00 fine.',
            ]}
          />

          <RulesOrderedListSection
            articleHeader="4.9.3 Abandonment of Matches"
            orderedList={[
              'Teams that cause a game to be abandoned shall be penalized with 3-0 loss by forfeiture + $100.00 fine. If the abandonment was caused before half time referee fees shall be owed to the opposing team by the abandoning team.',
              'When the abandonment is caused by one team and the team that did not cause the abandonment of the game was leading the score by a difference of more than three goals, the score shall stand.',
              'When an Abandonment is caused by both teams, no points will be awarded (i.e. the match will NOT count and will NOT be scored as a tie).',
            ]}
          />

          <RulesUnorderedListSection
            articleHeader="4.9.4 Excessive Misconduct"
            unorderedList={[
              'Penalties may be applied for excessive misconduct by a team, including but not limited to any of the following:',
              '- Fines',
              '- A cash bond against future misconduct',
              '- Forfeiture of matches',
              '- Deduction of points in the standings',
              '- Team probation',
              '- Removal from the competition for the current and / or future seasons',
              '- Disbandment of a team.',
            ]}
          />

          <RulesUnorderedListSection
            articleHeader="4.9.5 Misconduct by Bystanders"
            unorderedList={[
              'Penalties may be assessed to a team for misconduct by a person associated with a team:',
              '1. Disrupting or delaying a match: a minimum penalty of $25 fine.',
              '2. Using offensive, insulting, or abusive language and / or actions: a minimum penalty of $20.00 fine.',
              '3. A threat of violent conduct: a minimum penalty of $50.00 fine.',
              '4. Violent conduct: a minimum penalty of $100.00 fine.',
              'The penalty shall double in case the misconduct is directed at a Match Official, Association officer or staff.',
            ]}
          />

          <RulesOrderedListSection
            articleHeader="4.9.6 Accumulation of Forfeiture Offenses"
            orderedList={[
              'If during the season a third forfeit is assessed to a team, the team will be removed from the schedule and will not be allowed to play for the rest of the season.',
              'All the results shall be removed from the standings. Notwithstanding the foregoing, if a team has completed all of its games in the First Round (Fall), those results shall stand if deemed appropriate and fair on all teams within the division by the Competition Committee.',
            ]}
          />

          <RulesOrderedListSection
            articleHeader="4.10 Unauthorized Play"
            orderedList={[
              'Individual players who participate in unauthorized play, such as play after field closure for a rainout, at any complex used by the Association, are subject to the following penalty: one matchday suspension and a $25.00 fine. If the team participates in such play it shall be additionally penalized by a fine of $150.00.',
              'A complex or part thereof is considered closed if (a) the gate to the complex is closed; (b) goal nets are not in place; (c) a notice is posted at the entrance to the complex or at the field; (d) notice of closure has been given to a player or the team by a Match Official, Association officer, Association Commissioner or staff; or is posted on the Association website.',
            ]}
          />

          <p className="mb-6 italic">
            See AMSA Rule{' '}
            <span className="font-semibold">
              3.7 Field Usage After Cancelled or Abandoned Game
            </span>
          </p>

          <RulesUnorderedListSection
            articleHeader="4.11 Effect of Penalties"
            unorderedList={[
              '4.11.1 A suspension shall be measured for a period of time or by match-days, rather than matches, and shall apply for the specified number of match-days to all teams for whom the player is registered.',
              'If a penalty is imposed which includes a suspension, the player shall not be eligible, as enforced from the next match-day. A “match-day” is a day on which a match is played by one or more of the teams for which the player is registered.',
            ]}
          />

          <div className="mb-6">
            <p className="mb-2">
              By way of example: If a multi-player receives a three-match
              suspension while playing for his primary team, he would be
              suspended from all of the following matches during the next three
              match-days:
            </p>
            <ul className="italic">
              <li>Match-Day One: Only his secondary team plays.</li>
              <li>Match-Day Two: Both his primary and secondary teams play.</li>
              <li>Match-Day Three: Only his primary team plays.</li>
            </ul>
          </div>

          <p className="mb-6">
            4.11.2 Suspensions are to be served on the next following matchday.
          </p>

          <p className="mb-6">
            4.11.3 CARRYOVER OF PENALTIES A player with an unpaid fine shall be
            ineligible across all AMSA competitions until such time as all
            suspensions are served and all fines paid
          </p>

          <p className="mb-6">
            4.11.4 A suspension imposed during a regular season shall only be
            served during regular season (i.e. do not carry over to the Summer
            season), whereas a suspension imposed during the Summer season does
            carry over to the regular season.
          </p>

          <p className="mb-6">
            4.11.5 SPECIAL PROVISION FOR SUMMER Any unpaid fines from the
            regular season must be paid in order for the player to be eligible
            to play during the Summer, provided the player is not on an extended
            suspension.
          </p>

          <p>
            4.11.6 MULTI-PLAYER PENALTIES Penalties for players (“multi-player”)
            who are registered to play for more than one team:
          </p>

          <ol className="space-y-2 list-decimal list-inside pl-2 mb-6">
            <li>
              A player who is ejected from a match shall not play in any
              subsequent match on the same day, but the day of the ejection
              shall not count as a “match-day” in the computation of any
              resulting suspension.
            </li>
            <li>
              Violation of the foregoing rule shall double any resulting
              suspension imposed on the player, but shall not cause the affected
              team to forfeit, unless it is shown that the team was aware of the
              previous ejection before the match began.
            </li>
          </ol>

          <p>
            4.11.7 RESPONSIBILITY FOR TEAM FINES In the event a team fine has
            not been paid within ten (10) days of notification from the
            Administrator, the team shall forfeit each succeeding game until the
            fine is paid.
          </p>
        </div>

        {/* Appeals */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">5 Appeals</h2>

          <div className="space-y-6">
            {APPEALS.map((appeal) => (
              <p key={appeal}>{appeal}</p>
            ))}
          </div>
        </div>

        <Link
          href="/appeals"
          className="text-center underline underline-offset-4 text-blue-500"
        >
          File an Appeal...
        </Link>

        <p className="italic text-sm">
          As amended by the Board of Captains on August 21, 2025.
        </p>
      </div>
    </>
  );
}
