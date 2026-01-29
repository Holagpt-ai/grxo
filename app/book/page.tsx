'use client';

import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GoldHeart } from '@/components/GoldHeart';
import { ShoppingBag, ExternalLink, Download } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

// Lazy load Footer component
const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

export default function Book() {
  const t = useTranslations('book');
  const tSynopsis = useTranslations('book.synopsis');
  const tPurchase = useTranslations('book.purchase');
  const tEndorsements = useTranslations('book.endorsements');
  const tInside = useTranslations('book.inside');
  const tPodcast = useTranslations('book.podcastPromo');

  const handlePreorder = () => {
    toast.info('Preorder functionality coming soon!', {
      description: 'Stripe integration will be added in the next sprint',
    });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Abstract Book Cover */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-magenta-500/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Book Cover – homepage hero image */}
            <div className="relative">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-lg overflow-hidden border-2 border-amber-500/30 shadow-[0_0_60px_rgba(251,191,36,0.2)]">
                <Image
                  src="/images/GXOMainHeadshotWebsite.JPG"
                  alt="The Beat Goes On book cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
                {/* Gradient overlay for author line readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-right">
                  <p className="text-sm text-amber-400 font-semibold">Goldie XO</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 blur-3xl -z-10 rounded-lg" />
            </div>

            {/* Book Info */}
            <div>
              <GoldHeart className="mb-4" size={40} />
              <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-gradient">
                {t('title')}
              </h1>
              <p className="text-2xl text-amber-300 font-semibold mb-4">{t('hero.tagline')}</p>
              <div className="prose prose-invert prose-lg max-w-none mb-8">
                <p className="text-gray-400 leading-relaxed">{t('description')}</p>
              </div>
              <p className="text-amber-400 font-bold mb-8">{t('hero.releaseDate')}</p>

              {/* Purchase Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={handlePreorder}
                  className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold text-lg px-8 py-6 shadow-[0_0_30px_rgba(251,191,36,0.4)]"
                >
                  <ShoppingBag size={20} className="mr-2" />
                  {t('preorder')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synopsis Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <GoldHeart size={35} />
            <h2 className="text-4xl font-bold text-amber-400">{tSynopsis('title')}</h2>
          </div>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed">
              {tSynopsis('text')}
            </p>
          </div>
        </div>
      </section>

      {/* PDF Preview & Download */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <GoldHeart size={35} />
            <h2 className="text-4xl font-bold text-amber-400">{t('preview.title')}</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Read a sample below or download the PDF to your device.
          </p>
          <div className="rounded-xl overflow-hidden border border-amber-500/30 bg-gray-900/50 mb-6">
            <iframe
              src="/pdfs/TheBeatGoesOn.pdf"
              title="The Beat Goes On – PDF Preview"
              width="100%"
              height={800}
              className="w-full min-h-[600px] md:min-h-[800px]"
            />
          </div>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold">
            <a href="/pdfs/TheBeatGoesOn.pdf" download="TheBeatGoesOn.pdf">
              <Download size={20} className="mr-2" />
              {t('preview.download')}
            </a>
          </Button>
        </div>
      </section>

      {/* Purchase Options */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-y border-amber-500/20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-8">
            <GoldHeart size={35} />
            <h3 className="text-3xl font-bold text-amber-400">{tPurchase('title')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              size="lg"
              onClick={handlePreorder}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold h-auto py-4"
            >
              <div className="flex flex-col items-center gap-2">
                <ShoppingBag size={24} />
                <span>{tPurchase('preorderNow')}</span>
              </div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 h-auto py-4"
              asChild
            >
              <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center gap-2">
                  <ExternalLink size={24} />
                  <span>{tPurchase('buyOnAmazon')}</span>
                </div>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 h-auto py-4"
              asChild
            >
              <a href="https://barnesandnoble.com" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center gap-2">
                  <ExternalLink size={24} />
                  <span>{tPurchase('buyOnBarnesNoble')}</span>
                </div>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 h-auto py-4"
              asChild
            >
              <a href="https://books.apple.com" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center gap-2">
                  <ExternalLink size={24} />
                  <span>{tPurchase('buyOnAppleBooks')}</span>
                </div>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Endorsements */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <GoldHeart size={35} />
            <h3 className="text-4xl font-bold text-amber-400">{tEndorsements('title')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-xl p-6 shadow-lg hover:border-amber-500 transition-all">
                  <div className="mb-4">
                    <GoldHeart size={30} />
                  </div>
                  <p className="text-gray-300 italic mb-4">
                    "{tEndorsements(`quotes.${index}.text`)}"
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-4" />
                  <p className="text-amber-400 font-bold text-sm">
                    — {tEndorsements(`quotes.${index}.author`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the Book */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <GoldHeart size={35} />
            <h3 className="text-4xl font-bold text-amber-400">{tInside('title')}</h3>
          </div>
          <div className="space-y-4">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
                  <GoldHeart size={16} />
                </div>
                <p className="text-gray-300 group-hover:text-amber-400 transition-colors">
                  {tInside(`chapters.${index}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Cross-Promotion */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-y border-amber-500/20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GoldHeart size={40} />
            <h3 className="text-4xl font-bold text-amber-400">{tPodcast('title')}</h3>
          </div>
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed">{tPodcast('description')}</p>
          </div>
          <Link href="/podcast">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold text-lg px-8 py-6 shadow-[0_0_30px_rgba(251,191,36,0.4)]"
            >
              {tPodcast('cta')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
