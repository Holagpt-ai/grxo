'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GoldHeart } from '@/components/GoldHeart';
import Link from 'next/link';

// Lazy load components below the fold
const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

const MusicPlayer = dynamic(() => import('@/components/MusicPlayer').then(mod => ({ default: mod.MusicPlayer })), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-900 rounded-xl p-8 border border-amber-500/30 shadow-lg animate-pulse">
      <div className="h-20 bg-gray-800 rounded mb-4" />
      <div className="h-12 bg-gray-800 rounded mb-4" />
      <div className="h-10 bg-gray-800 rounded" />
    </div>
  ),
});

export default function Home() {
  const tHero = useTranslations('hero');
  const tAbout = useTranslations('about');
  const tSpinning = useTranslations('currentlySpinning');
  const tBook = useTranslations('book');

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section – responsive, full-bleed image */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden">
        {/* Full-width hero image – responsive sizes */}
        <div className="absolute inset-0 rounded-none">
          <Image
            src="/images/GXOMainHeadshotWebsite.JPG"
            alt="Goldie XO portrait"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Overlay for readability and seamless blend into dark below */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90 rounded-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-none" />

        {/* Floating gold heart logo */}
        <motion.div 
          className="absolute top-16 right-4 sm:top-20 sm:right-10 md:top-32 md:right-20 z-10"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <GoldHeart size={80} className="animate-pulse-slow drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
        </motion.div>

        {/* Content – responsive typography, full-width buttons on mobile */}
        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-20 sm:pt-24 pb-12 sm:pb-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_40px_rgba(251,191,36,0.6)] [text-shadow:0_0_60px_rgba(251,191,36,0.3)]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {tHero('headline')}
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-200 mb-4 sm:mb-6 font-semibold tracking-wide drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              {tHero('subheadline')}
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            >
              {tHero('description')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-stretch sm:items-center w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
            >
              <motion.div className="w-full sm:w-auto min-h-[44px] flex" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Link href="/music" className="w-full sm:w-auto flex min-h-[44px]">
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto min-h-[48px] min-w-[44px] bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-black font-black text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] transition-all duration-300 border-0"
                  >
                    {tHero('listenNow')}
                  </Button>
                </Link>
              </motion.div>
              <motion.div className="w-full sm:w-auto min-h-[44px] flex" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Link href="/book" className="w-full sm:w-auto flex min-h-[44px]">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto min-h-[48px] min-w-[44px] border-2 border-amber-400/90 text-amber-300 hover:bg-amber-500/20 font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 backdrop-blur-sm hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] transition-all duration-300"
                  >
                    {tHero('preorderBook')}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient – seamless transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-[1]" />
      </section>

      {/* About Teaser Section */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Small abstract portrait */}
              <div className="relative w-48 h-48 flex-shrink-0">
                <div 
                  className="absolute inset-0 rounded-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: 'url(/images/GXOMainHeadshotWebsite.JPG)',
                    filter: 'contrast(1.3) saturate(1.5)',
                  }}
                  aria-hidden="true"
                  role="presentation"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/30 to-yellow-500/30 mix-blend-screen" />
                <div className="absolute inset-0 rounded-full border-4 border-amber-500/50 shadow-[0_0_30px_rgba(251,191,36,0.3)]" />
              </div>

              {/* Bio text */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-bold text-amber-400 mb-3 flex items-center justify-center md:justify-start gap-3">
                  <GoldHeart size={40} />
                  {tAbout('title')}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
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
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Currently Spinning Section */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-y border-amber-500/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-amber-400 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {tSpinning('title')}
            </motion.h3>
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {tSpinning('subtitle')}
            </motion.p>
            
            {/* Functional Music Player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <MusicPlayer
                url="https://soundcloud.com/djgoldiexo/latin-house-fusion-mix"
                title={tSpinning('mixTitle')}
                artist="Goldie XO"
                year="2024"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Book Highlight Section */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black via-purple-900/10 to-black relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Book cover mockup */}
              <div className="relative w-80 h-96 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-yellow-600 to-amber-700 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <GoldHeart size={80} className="mb-4 md:mb-6" />
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
                    aria-hidden="true"
                    role="presentation"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-lg blur-xl -z-10" />
              </div>

              {/* Book info */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-4 py-1 bg-amber-500/20 border border-amber-500/50 rounded-full text-amber-400 text-sm font-semibold mb-4">
                  {tBook('availableSoon')}
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">{tBook('title')}</h2>
                <p className="text-xl md:text-2xl text-amber-400 font-medium mb-4 md:mb-6">{tBook('subtitle')}</p>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-4 md:mb-6">
                    {tBook('description')}
                  </p>
                </div>
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
      </motion.section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
