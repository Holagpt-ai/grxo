'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { IntlProvider as NextIntlProvider } from 'next-intl';
import Cookies from 'js-cookie';
import { Locale, defaultLocale, locales } from '@/lib/i18n';

interface IntlContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const IntlContext = createContext<IntlContextType | undefined>(undefined);

const LOCALE_COOKIE_NAME = 'NEXT_LOCALE';

function getInitialLocale(): Locale {
  // Check cookie first
  const cookieLocale = Cookies.get(LOCALE_COOKIE_NAME);
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // Check browser language
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.split('-')[0];
    if (locales.includes(browserLang as Locale)) {
      return browserLang as Locale;
    }
  }

  return defaultLocale;
}

export function IntlProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const [messages, setMessages] = useState<Record<string, any>>({});

  useEffect(() => {
    // Load messages for current locale
    import(`@/messages/${locale}.json`)
      .then((module) => {
        if (module.default && typeof module.default === 'object') {
          setMessages(module.default);
        } else {
          throw new Error(`Invalid messages format for locale ${locale}`);
        }
      })
      .catch((error) => {
        console.error(`Failed to load messages for locale ${locale}:`, error);
        // Fallback to default locale
        import(`@/messages/${defaultLocale}.json`)
          .then((module) => {
            if (module.default && typeof module.default === 'object') {
              setMessages(module.default);
            } else {
              console.error('Failed to load fallback messages');
              setMessages({}); // Empty fallback to prevent crashes
            }
          })
          .catch((fallbackError) => {
            console.error('Failed to load fallback messages:', fallbackError);
            setMessages({}); // Empty fallback to prevent crashes
          });
      });
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    Cookies.set(LOCALE_COOKIE_NAME, newLocale, { expires: 365 });
  };

  return (
    <IntlContext.Provider value={{ locale, setLocale }}>
      <NextIntlProvider locale={locale} messages={messages} timeZone="America/New_York">
        {children}
      </NextIntlProvider>
    </IntlContext.Provider>
  );
}

export function useIntl() {
  const context = useContext(IntlContext);
  if (!context) {
    throw new Error('useIntl must be used within IntlProvider');
  }
  return context;
}
