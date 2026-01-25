import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GoldHeart } from './GoldHeart';
import { toast } from 'sonner';

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
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call (placeholder for now)
    setTimeout(() => {
      toast.success(t('subscribeSuccess'));
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer className="bg-black border-t border-amber-500/20">
      {/* Newsletter Section */}
      <div className="container py-12">
        <div className="max-w-2xl mx-auto text-center">
          <GoldHeart className="mx-auto mb-6" size={50} />
          <h3 className="text-2xl font-bold text-amber-400 mb-2">{t('newsletter')}</h3>
          <p className="text-gray-400 mb-6">{t('newsletterDescription')}</p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-gray-900 border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500"
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.3)]"
            >
              {t('subscribe')}
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
