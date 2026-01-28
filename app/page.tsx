'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { GoldHeart } from '@/components/GoldHeart';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  const tHero = useTranslations('hero');
  const tAbout = useTranslations('about');
  const tSpinning = useTranslations('currentlySpinning');
  const tBook = useTranslations('book');
  
  // Generate waveform bar heights only on client to avoid hydration mismatch
  const [waveformHeights, setWaveformHeights] = useState<number[]>([]);
  
  useEffect(() => {
    // Generate random heights only on client side
    setWaveformHeights(Array.from({ length: 50 }).map(() => Math.random() * 100));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background with abstract portrait */}
        <div className="absolute inset-0">
          {/* Base image with blend modes for neon effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ 
              backgroundImage: 'url(/images/GXOMainHeadshotWebsite.JPG)',
              filter: 'contrast(1.2) brightness(0.8)',
            }}
          />
          
          {/* Neon overlay layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/20 via-transparent to-cyan-500/20 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400/15 via-transparent to-lime-400/15 mix-blend-screen" />
          
          {/* Paint splatter effect */}
          <div 
            className="absolute inset-0 opacity-30 mix-blend-color-dodge"
            style={{
              backgroundImage: 'url(/images/picgold.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        {/* Floating gold heart logo */}
        <div className="absolute top-20 right-10 md:top-32 md:right-20 z-10">
          <GoldHeart size={80} className="animate-pulse-slow" />
        </div>

        {/* Content */}
        <div className="relative z-10 container px-4 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]">
            {tHero('headline')}
          </h1>
          <p className="text-2xl md:text-3xl text-amber-300 mb-4 font-bold tracking-wide drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]">
            {tHero('subheadline')}
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {tHero('description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/music">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold text-lg px-8 py-6 shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] transition-all"
              >
                {tHero('listenNow')}
              </Button>
            </Link>
            <Link href="/book">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 font-bold text-lg px-8 py-6 backdrop-blur-sm"
              >
                {tHero('preorderBook')}
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* About Teaser Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Small abstract portrait */}
              <div className="relative w-48 h-48 flex-shrink-0">
                <div 
                  className="absolute inset-0 rounded-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: 'url(/images/GXOMainHeadshotWebsite.JPG)',
                    filter: 'contrast(1.3) saturate(1.5)',
                  }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/30 to-yellow-500/30 mix-blend-screen" />
                <div className="absolute inset-0 rounded-full border-4 border-amber-500/50 shadow-[0_0_30px_rgba(251,191,36,0.3)]" />
              </div>

              {/* Bio text */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-bold text-amber-400 mb-4 flex items-center justify-center md:justify-start gap-3">
                  <GoldHeart size={40} />
                  {tAbout('title')}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {tAbout('teaser')}
                </p>
                <Link href="/about">
                  <Button 
                    variant="ghost" 
                    className="text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 font-semibold"
                  >
                    {tAbout('readMore')} →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Spinning Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-y border-amber-500/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-amber-400 mb-2">{tSpinning('title')}</h3>
            <p className="text-gray-400 mb-6">{tSpinning('subtitle')}</p>
            
            {/* Mini player placeholder */}
            <div className="bg-gray-900 rounded-lg p-6 border border-amber-500/30 shadow-[0_0_20px_rgba(251,191,36,0.1)]">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GoldHeart size={40} />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-white font-bold text-lg">Latin House Fusion Mix</h4>
                  <p className="text-gray-400 text-sm">DJ Goldie XO • 2024</p>
                </div>
                <Button 
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-black rounded-full w-14 h-14 p-0 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                >
                  ▶
                </Button>
              </div>
              
              {/* Waveform visualization placeholder */}
              <div className="mt-4 flex items-center gap-1 h-12" suppressHydrationWarning>
                {waveformHeights.length > 0 ? (
                  waveformHeights.map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-amber-500/30 rounded-full"
                      style={{ height: `${height}%` }}
                    />
                  ))
                ) : (
                  // Placeholder bars with fixed height during SSR
                  Array.from({ length: 50 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-amber-500/30 rounded-full"
                      style={{ height: '50%' }}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Highlight Section */}
      <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Book cover mockup */}
              <div className="relative w-80 h-96 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-yellow-600 to-amber-700 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <GoldHeart size={80} className="mb-6" />
                    <h3 className="text-3xl font-black text-black mb-2">{tBook('title')}</h3>
                    <p className="text-black/80 font-semibold text-lg">{tBook('subtitle')}</p>
                    <div className="absolute bottom-8 text-black/70 text-sm font-bold">
                      DJ GOLDIE XO
                    </div>
                  </div>
                  {/* Abstract paint splatter overlay */}
                  <div 
                    className="absolute inset-0 opacity-20 mix-blend-multiply rounded-lg"
                    style={{
                      backgroundImage: 'url(/images/picgold.png)',
                      backgroundSize: 'cover',
                    }}
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-lg blur-xl -z-10" />
              </div>

              {/* Book info */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-4 py-1 bg-amber-500/20 border border-amber-500/50 rounded-full text-amber-400 text-sm font-semibold mb-4">
                  {tBook('availableSoon')}
                </div>
                <h2 className="text-5xl font-black text-white mb-3">{tBook('title')}</h2>
                <p className="text-2xl text-amber-400 font-semibold mb-6">{tBook('subtitle')}</p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {tBook('description')}
                </p>
                <Link href="/book">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold text-lg px-8 py-6 shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] transition-all"
                  >
                    {tBook('preorder')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
