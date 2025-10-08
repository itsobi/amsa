import { Button } from '../ui/button';
import { FacebookIcon, InstagramIcon } from './icons';

export function Connect() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Follow & Connect
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://www.facebook.com/austinmenssoccer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white gap-2"
            >
              <FacebookIcon />
              Facebook
            </Button>
          </a>
          <a
            href="https://www.instagram.com/austinmenssoccer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F56040] hover:opacity-90 text-white gap-2"
            >
              <InstagramIcon />
              Instagram
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
