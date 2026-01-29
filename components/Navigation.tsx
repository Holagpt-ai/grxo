'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { LanguageToggle } from './LanguageToggle';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const t = useTranslations('nav');
  const pathname = usePathname();
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

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-amber-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo – GXO link to home */}
          <Link
            href="/"
            prefetch={true}
            className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent hover:from-amber-300 hover:to-yellow-400 transition-all"
            aria-label="Goldie XO – Home"
          >
            GXO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.key}
                  href={item.path}
                  prefetch={true}
                  className={`
                    relative text-sm font-medium transition-all duration-300
                    ${
                      active
                        ? 'text-amber-400'
                        : 'text-gray-300 hover:text-amber-400'
                    }
                  `}
                >
                  <span className="relative">
                    {t(item.key)}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                    )}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Language Toggle — social icons add in later sprint */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
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
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.key}
                    href={item.path}
                    prefetch={true}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      relative px-2 py-2 rounded-lg text-sm font-medium transition-all duration-300
                      ${
                        active
                          ? 'text-amber-400 bg-amber-500/10 border-l-4 border-amber-500 shadow-[0_0_15px_rgba(251,191,36,0.2)]'
                          : 'text-gray-300 hover:text-amber-400 hover:bg-amber-500/5'
                      }
                    `}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
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
