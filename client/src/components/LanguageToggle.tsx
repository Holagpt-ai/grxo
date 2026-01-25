import { useIntl } from '@/contexts/IntlContext';
import { locales, localeNames } from '@/lib/i18n';
import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const { locale, setLocale } = useIntl();

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <Button
          key={loc}
          variant="ghost"
          size="sm"
          onClick={() => setLocale(loc)}
          className={`
            relative text-sm font-medium transition-all duration-300
            ${
              locale === loc
                ? 'text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                : 'text-gray-400 hover:text-amber-300'
            }
          `}
          aria-label={`Switch to ${localeNames[loc]}`}
          aria-current={locale === loc ? 'true' : 'false'}
        >
          {loc.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
