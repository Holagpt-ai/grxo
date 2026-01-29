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
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section – single main Goldie headshot, no overlapping background */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-12">
        {/* Dark background only – no duplicate/overlapping photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/95 to-black" />

        {/* Floating gold heart logo */}
        <motion.div 
          className="absolute top-20 right-10 md:top-32 md:right-20 z-10"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <GoldHeart size={80} className="animate-pulse-slow" />
        </motion.div>

        {/* Main headshot – single clean photo (no overlapping background) */}
        <motion.div
          className="relative z-0 w-full max-w-md mx-auto mb-8 md:mb-10 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-[0_0_40px_rgba(251,191,36,0.2)]">
            <Image
              src="/images/GXOMainHeadshotWebsite.JPG"
              alt="Goldie XO"
              fill
              sizes="(max-width: 768px) 90vw, 384px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 container max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {tHero('headline')}
            </motion.h1>
            <motion.p 
              className="text-2xl text-amber-200 mb-4 font-medium tracking-wide drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              {tHero('subheadline')}
            </motion.p>
            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              {tHero('description')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="/music">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold text-lg px-8 py-6 shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:shadow-[0_0_50px_rgba(251,191,36,0.8)] transition-all"
                  >
                    {tHero('listenNow')}
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="/book">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 font-bold text-lg px-8 py-6 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all"
                  >
                    {tHero('preorderBook')}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* About Teaser Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
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
        className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-y border-amber-500/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h3 
              className="text-4xl font-bold text-amber-400 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {tSpinning('title')}
            </motion.h3>
            <motion.p 
              className="text-2xl text-gray-400 mb-6 font-medium"
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
        className="py-16 bg-gradient-to-b from-black via-purple-900/10 to-black relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
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
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-3">{tBook('title')}</h2>
                <p className="text-2xl text-amber-400 font-medium mb-6">{tBook('subtitle')}</p>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-6">
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
