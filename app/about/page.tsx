'use client';

import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { GoldHeart } from '@/components/GoldHeart';

// Lazy load Footer component
const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

export default function About() {
  const t = useTranslations('about');
  const tStats = useTranslations('about.stats');
  const tVenues = useTranslations('about.venues');

  const venues = [
    t('venues.list.0'),
    t('venues.list.1'),
    t('venues.list.2'),
    t('venues.list.3'),
    t('venues.list.4'),
    t('venues.list.5'),
    t('venues.list.6'),
    t('venues.list.7'),
  ] as string[];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Header */}
      <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden py-16">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: 'url(/images/GXOMainHeadshotWebsite.JPG)',
              filter: 'contrast(1.3) brightness(0.7)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]">
            About Goldie XO
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-semibold tracking-wide">
            {t('headline')}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Main Content – Bio narrative + Photo + Sidebar */}
      <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Photo + Bio */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero image */}
              <div className="relative aspect-[4/3] max-w-lg mx-auto lg:mx-0 rounded-xl overflow-hidden border border-amber-500/30 shadow-[0_0_40px_rgba(251,191,36,0.15)]">
                <Image
                  src="/images/GXOMainHeadshotWebsite.JPG"
                  alt="Goldie XO"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Bio narrative – exact copy */}
              <div className="prose prose-invert prose-lg max-w-none space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Goldie XO&apos;s story is one of resilience, momentum, and rhythm—driven by passion and shaped by experience.
                </p>

                <h2 className="text-2xl font-bold text-amber-400 mt-10 mb-2">Roots</h2>
                <p className="text-gray-300 leading-relaxed">
                  Raised in New York City, Goldie was immersed early in the culture, sound, and nonstop energy that define the city. NYC wasn&apos;t just a backdrop—it was the training ground, instilling grit, creativity, and an instinct to keep moving forward no matter the circumstances.
                </p>

                <h2 className="text-2xl font-bold text-amber-400 mt-10 mb-2">The Pivot</h2>
                <p className="text-gray-300 leading-relaxed">
                  A serious car accident in early adulthood became a pivotal moment. What could have slowed everything down instead redirected the focus. Music shifted from interest to purpose. It became the outlet, the structure, and the fuel for rebuilding. The decks became a place of focus and freedom, and rhythm became a form of discipline. Progress wasn&apos;t optional—movement was the only direction.
                </p>

                <h2 className="text-2xl font-bold text-amber-400 mt-10 mb-2">Sound &amp; Scene</h2>
                <p className="text-gray-300 leading-relaxed">
                  Deeply rooted in New York City&apos;s underground scene, Goldie XO developed a signature sound by blending EDM with Latin House, creating sets that balance high-energy impact with emotional depth. Each performance is designed to connect—drawing people in, lifting the room, and creating shared moments through sound. From intimate basement parties to packed clubs and main stages, the journey has always been about authenticity, energy, and intention rather than trends.
                </p>

                <h2 className="text-2xl font-bold text-amber-400 mt-10 mb-2">Philosophy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Goldie&apos;s philosophy is straightforward and uncompromising:
                </p>
                <blockquote className="relative my-8 pl-6 border-l-4 border-amber-500 not-italic">
                  <span className="text-amber-300 text-xl font-semibold leading-relaxed">
                    &ldquo;The beat doesn&apos;t care where you came from. It just wants you to move.&rdquo;
                  </span>
                </blockquote>

                <p className="text-gray-300 leading-relaxed">
                  Today, Goldie XO carries that same intensity into every space—behind the decks, on stage, and behind the mic on the podcast. Each set, conversation, and creative project reflects a commitment to momentum, connection, and evolution. The mission is clear: elevate energy, create movement, and keep pushing forward.
                </p>

                <p className="text-amber-300 font-semibold text-lg">
                  The beat goes on—and so does the story.
                </p>
              </div>
            </div>

            {/* Right: Stats + Venues */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-lg p-6 shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                <div className="flex items-center gap-3 mb-6">
                  <GoldHeart size={35} />
                  <h3 className="text-2xl font-bold text-amber-400">{tStats('title')}</h3>
                </div>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-amber-500/20">
                    <div className="text-amber-300 font-semibold mb-1">{tStats('based')}</div>
                    <div className="text-gray-400 text-sm">New York City</div>
                  </div>
                  <div className="pb-4 border-b border-amber-500/20">
                    <div className="text-amber-300 font-semibold mb-1">{tStats('genre')}</div>
                    <div className="text-gray-400 text-sm">EDM &amp; Latin House</div>
                  </div>
                  <div className="pb-4 border-b border-amber-500/20">
                    <div className="text-amber-300 font-semibold mb-1">{tStats('experience')}</div>
                    <div className="text-gray-400 text-sm">Since 2014</div>
                  </div>
                  <div className="pb-4 border-b border-amber-500/20">
                    <div className="text-amber-300 font-semibold mb-1">{tStats('shows')}</div>
                    <div className="text-gray-400 text-sm">Global Performances</div>
                  </div>
                  <div>
                    <div className="text-amber-300 font-semibold mb-1">{tStats('festivals')}</div>
                    <div className="text-gray-400 text-sm">Major Events</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-lg p-6 shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <GoldHeart size={25} />
                  {tVenues('title')}
                </h3>
                <ul className="space-y-3">
                  {venues.map((venue, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm flex items-start gap-2 group hover:text-amber-300 transition-colors"
                    >
                      <span className="text-amber-500 mt-1 group-hover:scale-110 transition-transform">▸</span>
                      <span>{venue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
