'use client';

import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { GoldHeart } from '@/components/GoldHeart';
import { Button } from '@/components/ui/button';

const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

export default function PrivacyPage() {
  const t = useTranslations('footer');

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <GoldHeart size={40} />
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400">
              {t('privacy')}
            </h1>
          </div>
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-4">
            <p>
              This is a placeholder for the Privacy Policy. Goldie XO respects your privacy.
              Full policy content will be added here.
            </p>
            <p>
              For questions, visit the <Link href="/contact" className="text-amber-400 hover:underline">Contact</Link> page.
            </p>
          </div>
          <div className="mt-10">
            <Button asChild variant="outline" className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
