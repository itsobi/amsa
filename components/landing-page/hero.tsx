import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
        <img
          src="/soccer-players-on-field-action-shot.jpg"
          alt="Soccer action"
          className="w-full h-full object-cover opacity-30"
        />
      </div> */}

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl lg:text-8xl font-black text-secondary-foreground tracking-tight text-balance">
            AUSTIN MEN&apos;S
            <br />
            SOCCER
            <br />
            ASSOCIATION
          </h1>

          <p className="text-xl md:text-2xl text-secondary-foreground/90 font-medium max-w-2xl mx-auto text-pretty">
            Competitive, affordable Sunday adult soccer league in Austin, Texas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/schedules">
              <Button size="lg">View Schedules</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
