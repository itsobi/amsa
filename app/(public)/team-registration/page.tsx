import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { PageHeading } from '@/components/page-heading';
import { PageInfoContainer } from '@/components/page-info-container';
import Link from 'next/link';

export default function TeamRegistrationPage() {
  return (
    <>
      <PageHeading title="Team Registration" />
      <PageInfoContainer>
        <h2 className="text-xl">
          Team registration for{' '}
          <a
            href="https://register.ateamo.com/c7386cc87368a3d30cf93a013b7881e4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline underline-offset-4"
          >
            AMSA 2025 Fall season is open
          </a>
          . Player registration is always open.{' '}
          <Link
            href="/recruitment"
            className="text-blue-500 underline underline-offset-4"
          >
            Find a team
          </Link>
          .
        </h2>

        <div className="space-y-2">
          <h4 className="text-xl">Regular Season (Fall 2025 + Spring 2026)</h4>
          <ul className="space-y-2">
            <li>
              The AMSA regular season consists of the 2025 Fall Round (kicks off
              early-September, runs to early-December) and the 2026 Spring Round
              (early-February to mid-May).
            </li>
            <li>
              Each division plays 9 games in the Fall Round and 9 games in the
              Spring Round. All games are on Sundays. The 18 games total
              determine the division champion, and the bottom team(s) are
              relegated, top 1 or 2 teams win promotion.
            </li>
            <li>
              For divisions that have do not consist of 10 teams the total
              number of scheduled games may be different than 9+9.
            </li>
            <li>Rained out games are rescheduled.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-xl">Team Registration (Regular season)</h4>
          <p>
            Team Registration Fees: The team registration fee is $600 per Round
            ($600 for Fall round; $600 for Spring round). Late fees are applied
            during the final weeks of the registration period ($100 late fee).
          </p>
        </div>

        <div className="space-y-2">
          <div className="space-y-2">
            <h4 className="text-xl">AMSA 2025 Fall Team Registration</h4>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>AMSA 2025 Fall Team Registration</TableHead>
                  <TableHead>Fee</TableHead>
                  <TableHead>Ends</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-transparent">
                  <TableCell>Early Team Registration</TableCell>
                  <TableCell>$600.00</TableCell>
                  <TableCell> Aug 10th 2025</TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent">
                  <TableCell>Regular Team Registration</TableCell>
                  <TableCell>$650.00</TableCell>
                  <TableCell> Aug 17th 2025</TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent">
                  <TableCell>Late Team Registration</TableCell>
                  <TableCell>$700.00</TableCell>
                  <TableCell> Aug 23rd 2025</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <h4 className="font-semibold">2025 Fall Game Dates</h4>
            <p>
              Sundays: Sept 7 | Sept 14 | Sept 21 | Sept 28 | Oct 5 | _BYE Oct
              12_ | Oct 19 | Oct 26 | Nov 2 | Nov 9
            </p>
            <p>Make-up days: Nov 16 | Nov 23 | Nov 30 | Dec 7 | Dec 14</p>
          </div>

          <div>
            <h4 className="font-semibold">Kick-off Times</h4>
            <p>(DST): 8 AM | 10 AM | 12 PM | 2 PM | 4 PM</p>
            <p>OR: 8 AM | 9.55 AM | 11.50 AM | 1.45 PM | 3.40 PM</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="space-y-2">
            <h4 className="text-xl">AMSA 2026 Spring Team Registration</h4>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>AMSA 2026 Fall Team Registration</TableHead>
                  <TableHead>Fee</TableHead>
                  <TableHead>Ends</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-transparent">
                  <TableCell>Early Bird</TableCell>
                  <TableCell>$600.00</TableCell>
                  <TableCell>Jan/26</TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent">
                  <TableCell>Regular</TableCell>
                  <TableCell>$650.00</TableCell>
                  <TableCell>Jan/26</TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent">
                  <TableCell>Late Bird</TableCell>
                  <TableCell>$700.00</TableCell>
                  <TableCell>Jan/26</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <h4 className="font-semibold">2026 Spring Game Dates</h4>
            <p>*Dates to be determined*</p>
          </div>

          <div>
            <h4 className="font-semibold">Kick-off Times</h4>
            <p>8 AM | 10 AM | 12 PM | 2 PM | 4 PM</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="space-y-2">
            <h4 className="text-xl">AMSA 2026 SUMMER (11v11 SUNDAY)</h4>
            <p>
              The Summer season runs from mid-June to mid August (9 games, no
              make-up’s).
            </p>
            <div className="my-6">
              <ul className="mb-4">
                <li className="font-semibold">Team Registration Fees</li>
                <li>
                  The registration fee is $400 during the first 4 weeks of the
                  Summer registration period. Late fees are applied during the
                  final week of the registration period ($100 late fee).
                </li>
              </ul>

              <ul>
                <li className="font-semibold">Player Registration Fees</li>
                <li>
                  $60. Players who were not registered in the Fall and/or Spring
                  will need to register and pay the $60 registration fee for the
                  Summer season. Players who did play in the Fall and/or Spring
                  (i.e. registered and paid) are allowed to play for free in the
                  Summer.
                </li>
              </ul>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>
                    AMSA 2026 Summer 11v11 Sunday – Team Registration{' '}
                  </TableHead>
                  <TableHead>Fee</TableHead>
                  <TableHead>Ends</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-transparent">
                  <TableCell>AMSA Early Team Registration</TableCell>
                  <TableCell>$400.00</TableCell>
                  <TableCell>May 5/2026</TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent">
                  <TableCell>AMSA Regular Team Registration</TableCell>
                  <TableCell>$450.00</TableCell>
                  <TableCell>May 12/2026</TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent">
                  <TableCell>AMSA Late Team Registration </TableCell>
                  <TableCell>$500.00</TableCell>
                  <TableCell>May 19/2026</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-xl">PLAYER REGISTRATION INFORMATION</h4>
          <ul className="pl-2 space-y-2">
            <li>
              - If you are a player looking to join a team: please complete the{' '}
              <Link
                href="/"
                className="underline underline-offset-4 text-blue-500"
              >
                “Looking for a team”
              </Link>{' '}
              form on our frontpage.
            </li>
            <li>
              - A players can register with & join a team any day of the year.
            </li>
            <li>
              — Players must first be invited by a team captain to join a team.
              The captain will share a link to register in{' '}
              <a
                href="https://ateamo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-blue-500"
              >
                Ateamo.com
              </a>
              .
            </li>
            <li>
              Players must register through{' '}
              <a
                href="https://ateamo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-blue-500"
              >
                Ateamo.com
              </a>
              .
            </li>
            <li>
              — Player registration fee: $60 for the 2025-26 season. Valid from
              the start of the Fall 2025 Round, through Spring 2026 Round, to
              the end of the Summer 2026 Season.
            </li>
            <li>
              — Players must pay the registration fee for each team that they
              register for. Players can only register for no more than one team
              per division.
            </li>
            <li>— Players can transfer between teams within a division.</li>
            <li>
              — Minimum age: Players must be 18 years or older to be eligible to
              play in an AMSA game.
            </li>
            <li>
              — Age-restricted divisions: in the current season a player must
              reach the minimum age before August 1st. Before Aug 1st: be or
              turn 30 to play on an Over 30 team; 40 to play on an Over 40 team;
              50 to play on an Over 50 team.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-xl">TEAM DEPOSIT</h4>
          <p>
            All new teams are required to deposit a $200 team bond (security
            deposit). The team bond is refunded only if a team leaves the League
            (less any outstanding fees or fines).
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-xl">Referee Fees</h4>
          <p>
            Each team is required to pay 50% of the Referee fees before the
            start of each game, in cash (exact change).
          </p>

          <div className="space-y-2">
            <p className="font-semibold">Fall & Spring Round referee fees:</p>
            <ul>
              <li>3-person crew $150 ($75 per team)</li>
              <li>2-person crew $130 ($65 per team)</li>
              <li>1 Center Ref $100 ($50 per team)</li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">Summer season referee fees:</p>
            <ul>
              <li>
                Only a single Center Ref is assigned – $100 ($50 per team).
              </li>
            </ul>
          </div>
        </div>
      </PageInfoContainer>
    </>
  );
}
