'use client';

import { Card, CardContent } from '@/components/ui/card';
import { authClient } from '@/lib/auth-client';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
        <div className="lg:w-[700px] lg:mx-auto lg:text-center space-y-2 mt-6">
          <h1 className="text-4xl font-semibold tracking-wide">AMSA League</h1>
          <p className="md:tracking-wide text-lg">
            Austin Men&apos;s Soccer Association&apos;s league &quot;AMSA&quot;
            is an amateur Sunday soccer league in Austin Texas, with its level
            ranging from highly competitive to competitive-rec level. 18 games
            during Spring and Fall determine promotion/relegation between twelve
            divisions. During the Summer month there is a 9 game league.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <Card>
            <CardContent>
              <h4 className="text-lg font-semibold mb-2 tracking-wide">
                What is it?
              </h4>
              <p>
                Competitive, affordable Sunday adult soccer league in Austin,
                Texas.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h4 className="text-lg font-semibold mb-2 tracking-wide">
                How many players?
              </h4>
              <p>
                11v11 soccer games on full-size grass soccer fields, with paid
                referees & assistant referees applying FIFA&apos;s Laws of the
                Game.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h4 className="text-lg font-semibold mb-2 tracking-wide">
                What is the age range?
              </h4>
              <p>
                Open-age, over-30, over-40 and over-50 divisions each with
                promotion/relegation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h4 className="text-lg font-semibold mb-2 tracking-wide">
                What is the competition level?
              </h4>
              <p>
                Levels ranging from highly competitive, experienced to
                recreational.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h4 className="text-lg font-semibold mb-2 tracking-wide">
                Where are the games played?
              </h4>
              <p className="mb-4">
                Most of our games are played at the Onion Creek Soccer Complex.
                OCSC is managed by AMSA in partnership with the City of Austin
                Parks And Recreation Department.
              </p>
              <Link
                href="https://www.google.com/maps/dir//onion+creek+soccer+complex/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8644b3a713d1604f:0xc3aa88085ae438b4?sa=X&ved=2ahUKEwjbt5CR9qrkAhUFUK0KHdKPC3sQ9RcwC3oECA8QDg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Onion Creek Soccer Complex <br />
                5600 E William Cannon Dr <br /> Austin, TX 78744
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h4 className="text-lg font-semibold mb-2 tracking-wide">
                Rainouts
              </h4>
              <p>
                AMSA manages the facility at Onion Creek Soccer Complex and
                handles all OCSC rain-outs. The Field Status page will be
                updated in the event that the OCSC fields are closed due to
                weather. AMSA *does not* make field closure decisions for NEMP
                and EMP. Call the number listed on the Field Status page to
                check field status before you go to your game.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h4 className="text-lg font-semibold mb-2 tracking-wide">
                Our Goal
              </h4>
              <p>
                AMSA strives to be the premier organization for providing
                quality adult amateur soccer, through its embodiment of
                sportsmanship and community involvement while providing top
                level soccer facilities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h4 className="text-lg font-semibold mb-2 tracking-wide">
                Looking for a team?
              </h4>
              <p>
                Fill out this{' '}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdDLeFo1Mf6W-pMJU5pVCqYxfngkqZpY1lJXKhYzYYZ2_VdJw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-500"
                >
                  form
                </a>{' '}
                to be added to the team recruitment list.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h4 className="text-lg font-semibold mb-2 tracking-wide">
                Follow & Connect
              </h4>
              <p>
                Instagram:{' '}
                <a
                  href="https://www.instagram.com/austinmenssoccer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-500"
                >
                  @austinmenssoccer
                </a>
              </p>
              <p>
                Facebook:{' '}
                <a
                  href="https://www.facebook.com/austinmenssoccer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-500"
                >
                  @austinmenssoccer
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h4 className="text-lg font-semibold mb-2 tracking-wide">
                Have any questions?
              </h4>
              <p>
                Contact us at{' '}
                <a
                  href="mailto:question@austinmenssoccer.com"
                  className="underline text-blue-500"
                >
                  austinmenssoccer@gmail.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
