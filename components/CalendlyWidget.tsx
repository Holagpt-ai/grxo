'use client';

import { useEffect, useRef } from 'react';

interface CalendlyWidgetProps {
  url?: string;
  height?: string;
}

export default function CalendlyWidget({ 
  url = 'https://calendly.com/djgoldiexo/booking', // Placeholder Calendly URL
  height = '700px' 
}: CalendlyWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div 
        ref={containerRef}
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: '320px', height }}
      />
    </div>
  );
}
