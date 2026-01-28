'use client';

import { useState } from 'react';
import { useIntl } from '@/components/contexts/IntlContext';
import { locales, localeNames } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ChevronDown, Globe } from 'lucide-react';

// Flag emojis for visual enhancement
const flagEmojis: Record<string, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
};

export function LanguageToggle() {
  const { locale, setLocale } = useIntl();
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (loc: typeof locales[number]) => {
    setLocale(loc);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <Button
        variant="ghost"
        size="default"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative flex items-center gap-2 px-3 py-2 text-base font-semibold
          transition-all duration-300 rounded-lg
          ${
            isOpen
              ? 'text-amber-400 bg-amber-500/10 shadow-[0_0_20px_rgba(251,191,36,0.4)] border border-amber-500/30'
              : 'text-gray-300 hover:text-amber-400 hover:bg-amber-500/5 border border-transparent hover:border-amber-500/20'
          }
        `}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe size={18} className="text-amber-400" />
        <span className="text-xl">{flagEmojis[locale]}</span>
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <span className="sm:hidden">{locale.toUpperCase()}</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          {/* Menu */}
          <div className="absolute right-0 mt-2 z-50 w-48 bg-gray-900 border border-amber-500/30 rounded-lg shadow-xl overflow-hidden">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 text-left
                  transition-all duration-200
                  ${
                    locale === loc
                      ? 'bg-amber-500/20 text-amber-400 font-semibold shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                      : 'text-gray-300 hover:bg-amber-500/10 hover:text-amber-400'
                  }
                `}
                aria-label={`Switch to ${localeNames[loc]}`}
                aria-current={locale === loc ? 'true' : 'false'}
              >
                <span className="text-2xl">{flagEmojis[loc]}</span>
                <span className="flex-1 font-medium">{localeNames[loc]}</span>
                {locale === loc && (
                  <span className="text-amber-400 text-sm">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
