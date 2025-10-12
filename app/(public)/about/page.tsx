import { PageHeading } from '@/components/page-heading';
import { PageInfoContainer } from '@/components/page-info-container';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <PageHeading title="About AMSA" />
      <PageInfoContainer>
        <p>
          The Austin Men&apos;s Soccer Association (AMSA) is the primary amateur
          men&apos;s soccer league and one of the largest leagues in Texas with
          over 4000 registered players and more than 135 teams. The majority of
          AMSA&apos;s games are played on Sundays at the Onion Creek Soccer
          Complex (OCSC); however, additional games are played at Travis County
          fields.
        </p>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">AMSA Mission Statement</h4>
          <p className="pl-2">
            AMSA strives to be the premier organization for providing quality
            adult amateur soccer in Central Texas, through its embodiment of
            sportsmanship and community involvement while providing top level
            soccer facilities.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">People</h4>
          <ul className="pl-2 space-y-2">
            <li>
              <Link
                href="/executive-committee"
                className="underline underline-offset-4 text-blue-500"
              >
                AMSA Executive Committee
              </Link>
            </li>
            <li>
              <Link
                href="/staff"
                className="underline underline-offset-4 text-blue-500"
              >
                AMSA Staff
              </Link>
            </li>
            <li>
              <Link
                href="/past-leadership"
                className="underline underline-offset-4 text-blue-500"
              >
                Past Leadership
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">
            Constitution, Rules and Policies
          </h4>
          <ul className="pl-2 space-y-2">
            <li>
              <Link
                href="/constitution"
                className="underline underline-offset-4 text-blue-500"
              >
                AMSA Constitution
              </Link>
            </li>
            <li>
              <Link
                href="/rules"
                className="underline underline-offset-4 text-blue-500"
              >
                AMSA Rules
              </Link>
            </li>
            <li>
              <Link
                href="/policies"
                className="underline underline-offset-4 text-blue-500"
              >
                AMSA Policies
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Registration</h4>
          <ul className="pl-2 space-y-2">
            <li>
              <Link
                href="/team-registration"
                className="underline underline-offset-4 text-blue-500"
              >
                Team & Player Registration Information
              </Link>
            </li>
            <li>
              <Link
                href="/recruitment"
                className="underline underline-offset-4 text-blue-500"
              >
                Teams looking for a players
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Fields</h4>
          <ul className="pl-2 space-y-2">
            <li>
              <Link
                href="/fields"
                className="underline underline-offset-4 text-blue-500"
              >
                Field Information
              </Link>
            </li>
            <li>
              <Link
                href="/ocsc-field-rental"
                className="underline underline-offset-4 text-blue-500"
              >
                Onion Creek Soccer Complex Field Rental
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Referees</h4>
          <ul className="pl-2 space-y-2">
            <li>
              <Link
                href="/referees"
                className="underline underline-offset-4 text-blue-500"
              >
                Referees
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Social Media</h4>
          <ul className="pl-2 space-y-2">
            <li>
              <Link
                href="https://x.com/amsasoccer"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-blue-500"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/austinmenssoccer/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-blue-500"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/austinmenssoccer"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-blue-500"
              >
                Facebook
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">The AMSA History Project</h4>
          <ul className="pl-2 space-y-2">
            <li>
              <Link
                href="https://www.facebook.com/amsahistoryproject/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-blue-500"
              >
                AMSA History Project
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Contact, Questions</h4>
          <ul className="pl-2 space-y-2">
            <li>
              <Link
                href="/feedback"
                className="underline underline-offset-4 text-blue-500"
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </PageInfoContainer>
    </>
  );
}
