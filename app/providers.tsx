'use client';

import { ThemeProvider } from '@/components/contexts/ThemeContext';
import { IntlProvider } from '@/components/contexts/IntlContext';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import ErrorBoundary from '@/components/ErrorBoundary';
import { Navigation } from '@/components/Navigation';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <IntlProvider>
          <TooltipProvider>
            <Navigation />
            {children}
            <Toaster />
          </TooltipProvider>
        </IntlProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
