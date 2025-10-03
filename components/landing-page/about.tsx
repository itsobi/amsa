import { Card } from '@/components/ui/card';
import Link from 'next/link';

export function About() {
  return (
    <section className="py-12 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-black text-foreground tracking-tight ">
                About
              </h2>

              <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                <p>
                  11v11 soccer games on{' '}
                  <Link
                    href={'/fields'}
                    className="underline underline-offset-4 text-blue-500"
                  >
                    full-size grass soccer fields
                  </Link>
                  , with{' '}
                  <Link
                    href={'/referees'}
                    className="underline underline-offset-4 text-blue-500"
                  >
                    paid referees & assistant referees
                  </Link>{' '}
                  applying FIFA&apos;s Laws of the Game.
                </p>
                <p>
                  Open-age, over-30, over-40 and over-50 divisions each with
                  promotion/relegation. Levels ranging from highly competitive,
                  experienced to recreational.
                </p>
                <p>
                  Whether you&apos;re a seasoned player or just getting back
                  into the sport, AMSA offers the perfect opportunity to stay
                  active, make friends, and compete every Sunday.
                </p>
                <p>
                  AMSA strives to be the premier organization for providing
                  quality adult amateur soccer, through its embodiment of
                  sportsmanship and community involvement while providing top
                  level soccer facilities.
                </p>
                <p className="text-center">
                  Looking for a team? Fill out this{' '}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdDLeFo1Mf6W-pMJU5pVCqYxfngkqZpY1lJXKhYzYYZ2_VdJw/viewform"
                    className="underline underline-offset-4 text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    form
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-8 text-center space-y-2">
                <div className="text-5xl font-black">100+</div>
                <div className="text-sm font-bold uppercase tracking-wide">
                  Teams
                </div>
              </Card>
              <Card className="p-8 text-center space-y-2 bg-secondary">
                <div className="text-5xl font-black">1000+</div>
                <div className="text-sm font-bold uppercase tracking-wide">
                  Players
                </div>
              </Card>
              <Card className="p-8 text-center space-y-2 bg-secondary ">
                <div className="text-5xl font-black ">17</div>
                <div className="text-sm font-bold uppercase tracking-wide">
                  Years
                </div>
              </Card>
              <Card className="p-8 text-center space-y-2">
                <div className="text-5xl font-black">14</div>
                <div className="text-sm font-bold uppercase tracking-wide">
                  Divisions
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
