import Navigation from './navigation';
import { ThemeToggle } from './theme-toggle';
import { Logo } from './logo';

export function Header() {
  return (
    <div className="container mx-auto px-4 py-4 md:px-0 flex justify-between items-center">
      <Logo />

      <div className="flex items-center gap-4">
        <Navigation />
      </div>
    </div>
  );
}
