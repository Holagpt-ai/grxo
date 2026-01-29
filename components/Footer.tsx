'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Twitch,
  Music,
  Video,
  Cloud,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GoldHeart } from './GoldHeart';
import { toast } from 'sonner';

const quickLinks: { key: string; path: string }[] = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'music', path: '/music' },
  { key: 'merch', path: '/merch' },
  { key: 'book', path: '/book' },
  { key: 'contact', path: '/contact' },
  { key: 'tourDates', path: '/tour-dates' },
  { key: 'podcast', path: '/podcast' },
];

const socialLinks: { name: string; url: string; icon: LucideIcon }[] = [
  { name: 'Instagram', url: 'https://instagram.com/goldiexo', icon: Instagram },
  { name: 'TikTok', url: 'https://tiktok.com/@goldiexo', icon: Video },
  { name: 'Spotify', url: 'https://open.spotify.com/artist/goldiexo', icon: Music },
  { name: 'YouTube', url: 'https://youtube.com/@goldiexo', icon: Youtube },
  { name: 'SoundCloud', url: 'https://soundcloud.com/goldiexo', icon: Cloud },
  { name: 'X', url: 'https://x.com/goldiexo', icon: Twitter },
  { name: 'Facebook', url: 'https://facebook.com/goldiexo', icon: Facebook },
  { name: 'Twitch', url: 'https://twitch.tv/goldiexo', icon: Twitch },
];

// Zod schema for email validation (trim whitespace)
const subscribeSchema = z.object({
  email: z.string().trim().min(1, 'Email is required').email('Please enter a valid email address'),
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = async (data: SubscribeFormData) => {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email.trim() }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? t('subscribeError'));
      }

      toast.success(t('subscribeSuccess'));
      reset();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : t('subscribeError');
      toast.error(errorMessage);
    }
  };

  return (
    <footer className="bg-black border-t border-amber-500/20">
      {/* Newsletter Section */}
      <div className="container max-w-6xl mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto text-center">
          <GoldHeart className="mx-auto mb-4" size={50} />
          <h3 className="text-2xl font-bold text-amber-400 mb-2">{t('newsletter')}</h3>
          <p className="text-gray-400 mb-4">{t('newsletterDescription')}</p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder={t('emailPlaceholder')}
                {...register('email')}
                className={`flex-1 bg-gray-900 border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 ${
                  errors.email ? 'border-red-500 focus:border-red-500' : ''
                }`}
                disabled={isSubmitting}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-400 text-left">
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : t('button')}
            </Button>
          </form>
        </div>
      </div>

      {/* Sitemap: Quick Links + Legal + Sitemap XML */}
      <div className="border-t border-amber-500/20 py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Quick Links */}
            <div>
              <h4 className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-3">
                {t('quickLinks')}
              </h4>
              <ul className="space-y-1.5">
                {quickLinks.map(({ key, path }) => (
                  <li key={key}>
                    <Link
                      href={path}
                      className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                    >
                      {tNav(key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h4 className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-3">
                {t('legal')}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {t('privacy')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {t('terms')}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Sitemap XML */}
            <div>
              <h4 className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-3">
                {t('sitemap')}
              </h4>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
              >
                sitemap.xml
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social badges */}
      <div className="border-t border-amber-500/20 py-6">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-amber-400 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] hover:scale-110 transition-all duration-300"
                aria-label={name}
              >
                <Icon size={22} strokeWidth={2} />
              </a>
            ))}
          </div>
          {/* Copyright + Legal links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-sm text-gray-500">
            <span>© 2026 Goldie XO. {t('rights')}.</span>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                {t('privacy')}
              </Link>
              <Link href="/terms" className="hover:text-amber-400 transition-colors">
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
