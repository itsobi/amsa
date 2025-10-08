import { useState, useEffect } from 'react';

const breakpoint = 1024; // Changed to typical tablet breakpoint

export const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    // Set initial value
    setIsTablet(mediaQuery.matches);

    // Handler for when screen size changes
    const handler = (e: MediaQueryListEvent) => setIsTablet(e.matches);

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isTablet;
};
