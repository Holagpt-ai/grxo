'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GoldHeart } from './GoldHeart';
import { toast } from 'sonner';

// Zod schema for email validation
const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address').min(1, 'Email is required'),
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

const socialLinks = [
  { name: 'YouTube', icon: 'Y', url: '#' },
  { name: 'Instagram', icon: 'I', url: '#' },
  { name: 'Twitch', icon: 'T', url: '#' },
  { name: 'Spotify', icon: 'S', url: '#' },
  { name: 'SoundCloud', icon: 'SC', url: '#' },
  { name: 'Apple Music', icon: 'A', url: '#' },
  { name: 'Facebook', icon: 'F', url: '#' },
  { name: 'X', icon: 'X', url: '#' },
];

export function Footer() {
  const t = useTranslations('footer');
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || t('subscribeError'));
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
      <div className="container py-12">
        <div className="max-w-2xl mx-auto text-center">
          <GoldHeart className="mx-auto mb-6" size={50} />
          <h3 className="text-2xl font-bold text-amber-400 mb-2">{t('newsletter')}</h3>
          <p className="text-gray-400 mb-6">{t('newsletterDescription')}</p>
          
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

      {/* Social Icons */}
      <div className="border-t border-amber-500/20 py-8">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-amber-400 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] transition-all duration-300 text-xs font-bold"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-500">
            <span>© 2026 DJ Goldie XO. {t('rights')}.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-400 transition-colors">
                {t('privacy')}
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                {t('terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
