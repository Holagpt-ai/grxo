'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { GoldHeart } from '@/components/GoldHeart';
import { Footer } from '@/components/Footer';
import { Play, Clock } from 'lucide-react';
import Link from 'next/link';

const platforms = [
  { name: 'spotify', icon: 'S', url: 'https://spotify.com' },
  { name: 'appleMusic', icon: 'A', url: 'https://podcasts.apple.com' },
  { name: 'youtube', icon: 'Y', url: 'https://youtube.com' },
  { name: 'soundcloud', icon: 'SC', url: 'https://soundcloud.com' },
];

const episodes = [
  {
    id: 1,
    title: 'From Brooklyn Basements to Global Stages',
    description: 'The journey from underground warehouse parties to international festivals. Goldie shares stories of her early days in NYC\'s club scene.',
    duration: '45:30',
    category: 'clubStories',
    date: 'Jan 15, 2024',
  },
  {
    id: 2,
    title: 'The Art of Latin House Production',
    description: 'A deep dive into creating the perfect Latin House track. Featuring production tips, favorite plugins, and workflow secrets.',
    duration: '52:15',
    category: 'producerChats',
    date: 'Jan 8, 2024',
  },
  {
    id: 3,
    title: 'EDM Meets Reggaeton: Breaking Genre Boundaries',
    description: 'Exploring the fusion of EDM and Latin rhythms. How to blend different genres while maintaining authenticity.',
    duration: '38:45',
    category: 'latinHouse',
    date: 'Jan 1, 2024',
  },
  {
    id: 4,
    title: 'Behind the Decks at Tomorrowland',
    description: 'Exclusive stories from one of the world\'s biggest festivals. The preparation, the energy, and the unforgettable moments.',
    duration: '41:20',
    category: 'clubStories',
    date: 'Dec 25, 2023',
  },
  {
    id: 5,
    title: 'Collaborating with Latin Artists',
    description: 'Conversations with featured Latin House producers and vocalists. The creative process behind collaborative tracks.',
    duration: '48:00',
    category: 'producerChats',
    date: 'Dec 18, 2023',
  },
  {
    id: 6,
    title: 'The Evolution of Latin House',
    description: 'Tracing the roots and future of Latin House music. From classic influences to modern innovations.',
    duration: '55:30',
    category: 'latinHouse',
    date: 'Dec 11, 2023',
  },
];

export default function Podcast() {
  const t = useTranslations('podcast');
  const tEpisodes = useTranslations('podcast.episodes');
  const tFilters = useTranslations('podcast.filters');
  const tBook = useTranslations('podcast.bookPromo');
  const tPlatforms = useTranslations('music.platforms');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEpisodes = activeFilter === 'all' 
    ? episodes 
    : episodes.filter(ep => ep.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background with abstract portrait */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: 'url(/images/GXOMainHeadshotWebsite.JPG)',
              filter: 'contrast(1.3) brightness(0.6)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-magenta-500/20 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>

        <div className="container relative z-10 text-center">
          <GoldHeart className="mx-auto mb-6" size={60} />
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-gradient">
            {t('title')}
          </h1>
          <p className="text-xl text-amber-300 font-semibold mb-4">{t('subtitle')}</p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">{t('description')}</p>

          {/* Platform Links */}
          <div>
            <p className="text-sm text-gray-400 mb-3">{t('listenOn')}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-900 border border-amber-500/30 rounded-lg text-amber-400 hover:bg-amber-500/10 hover:border-amber-500 transition-all text-sm font-semibold flex items-center gap-2"
                >
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-black flex items-center justify-center text-xs font-bold">
                    {platform.icon}
                  </span>
                  {tPlatforms(platform.name)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container">
          {/* Filters */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <GoldHeart size={30} />
            <h2 className="text-3xl font-bold text-amber-400">{tEpisodes('title')}</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              onClick={() => setActiveFilter('all')}
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              className={activeFilter === 'all' 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold' 
                : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'}
            >
              {tFilters('all')}
            </Button>
            <Button
              onClick={() => setActiveFilter('clubStories')}
              variant={activeFilter === 'clubStories' ? 'default' : 'outline'}
              className={activeFilter === 'clubStories' 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold' 
                : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'}
            >
              {tFilters('clubStories')}
            </Button>
            <Button
              onClick={() => setActiveFilter('producerChats')}
              variant={activeFilter === 'producerChats' ? 'default' : 'outline'}
              className={activeFilter === 'producerChats' 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold' 
                : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'}
            >
              {tFilters('producerChats')}
            </Button>
            <Button
              onClick={() => setActiveFilter('latinHouse')}
              variant={activeFilter === 'latinHouse' ? 'default' : 'outline'}
              className={activeFilter === 'latinHouse' 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold' 
                : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'}
            >
              {tFilters('latinHouse')}
            </Button>
          </div>

          {/* Episode Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {filteredEpisodes.map((episode) => (
              <div
                key={episode.id}
                className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-lg p-6 hover:border-amber-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.2)] transition-all"
              >
                <div className="flex items-start gap-4">
                  {/* Episode Number */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
                    <span className="text-2xl font-black text-black">#{episode.id}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <span>{episode.date}</span>
                      <span>•</span>
                      <Clock size={12} />
                      <span>{episode.duration}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 hover:text-amber-400 transition-colors">
                      {episode.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {episode.description}
                    </p>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold"
                      >
                        <Play size={14} className="mr-1" />
                        {tEpisodes('play')}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
                      >
                        {tEpisodes('readMore')}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Promo Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-y border-amber-500/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GoldHeart size={40} />
              <h3 className="text-3xl font-bold text-amber-400">{tBook('title')}</h3>
            </div>
            <p className="text-gray-300 mb-6">{tBook('description')}</p>
            <Link href="/book">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold text-lg px-8 py-6 shadow-[0_0_30px_rgba(251,191,36,0.4)]"
              >
                {tBook('cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
