import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardFooter } from '../ui/card';

export function Faq() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-foreground tracking-tight text-balance">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 space-y-4 bg-card">
              <div className="text-sm font-bold text-primary uppercase tracking-wide">
                How many games are there in a season?
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Austin Men&apos;s Soccer Association&apos;s league
                &apos;AMSA&apos; is an amateur Sunday soccer league in Austin
                Texas, with its level ranging from highly competitive to
                competitive-rec level. 18 games during Spring and Fall determine
                promotion/relegation between twelve divisions. During the Summer
                month there is a 9 game league.
              </p>
            </Card>
            <Card className="p-8 space-y-4 bg-card">
              <div className="text-sm font-bold text-primary uppercase tracking-wide">
                Where are the games played?
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Most of our games are played at the Onion Creek Soccer Complex.
                OCSC is managed by AMSA in partnership with the City of Austin
                Parks And Recreation Department.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Onion Creek Soccer Complex 5600 E William Cannon Dr Austin, TX
                78744
              </p>

              <a
                href="https://www.google.com/maps/dir//onion+creek+soccer+complex/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8644b3a713d1604f:0xc3aa88085ae438b4?sa=X&ved=2ahUKEwjbt5CR9qrkAhUFUK0KHdKPC3sQ9RcwC3oECA8QDg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full">Directions</Button>
              </a>
            </Card>
            <Card className="p-8 space-y-4 bg-card md:col-span-2">
              <div className="text-sm font-bold text-primary uppercase tracking-wide">
                Rainouts
              </div>

              <p className="text-muted-foreground leading-relaxed">
                AMSA manages the facility at Onion Creek Soccer Complex and
                handles all OCSC rain-outs. The{' '}
                <Link
                  href="/field-status"
                  className="underline text-blue-500 underline-offset-4"
                >
                  Field Status
                </Link>{' '}
                page will be updated in the event that the OCSC fields are
                closed due to weather. AMSA *does not* make field closure
                decisions for NEMP and EMP. Call the number listed on the{' '}
                <Link
                  href="/field-status"
                  className="underline text-blue-500 underline-offset-4"
                >
                  Field Status
                </Link>{' '}
                page to check field status before you go to your game.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
