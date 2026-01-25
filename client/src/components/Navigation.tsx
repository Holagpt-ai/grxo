import { useState } from 'react';
import { Link } from 'wouter';
import { useTranslations } from 'next-intl';
import { LanguageToggle } from './LanguageToggle';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const t = useTranslations('nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'about', path: '/about' },
    { key: 'music', path: '/music' },
    { key: 'merch', path: '/merch' },
    { key: 'book', path: '/book' },
    { key: 'contact', path: '/contact' },
    { key: 'tourDates', path: '/tour-dates' },
    { key: 'podcast', path: '/podcast' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-amber-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <a className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent hover:from-amber-300 hover:to-yellow-400 transition-all">
              GXO
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.key} href={item.path}>
                <a className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium">
                  {t(item.key)}
                </a>
              </Link>
            ))}
          </div>

          {/* Language Toggle & Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <div className="flex items-center gap-3">
              {/* Social media icons placeholder */}
              <SocialIcon icon="youtube" />
              <SocialIcon icon="instagram" />
              <SocialIcon icon="spotify" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-amber-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-500/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.key} href={item.path}>
                  <a
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.key)}
                  </a>
                </Link>
              ))}
              <div className="pt-4 border-t border-amber-500/20">
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  return (
    <a
      href="#"
      className="text-gray-400 hover:text-amber-400 transition-colors"
      aria-label={icon}
    >
      <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs">
        {icon[0].toUpperCase()}
      </div>
    </a>
  );
}
