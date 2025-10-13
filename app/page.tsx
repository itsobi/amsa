import { About } from '@/components/landing-page/about';
import { Connect } from '@/components/landing-page/connect';
import { Faq } from '@/components/landing-page/faq';
import { Hero } from '@/components/landing-page/hero';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Faq />
      <Connect />
    </main>
  );
}
