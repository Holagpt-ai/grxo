'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GoldHeart } from '@/components/GoldHeart';
import { Footer } from '@/components/Footer';
import { Play, Pause } from 'lucide-react';

const platforms = [
  { name: 'spotify', icon: 'S', url: 'https://spotify.com' },
  { name: 'soundcloud', icon: 'SC', url: 'https://soundcloud.com' },
  { name: 'appleMusic', icon: 'A', url: 'https://music.apple.com' },
  { name: 'youtube', icon: 'Y', url: 'https://youtube.com' },
  { name: 'beatport', icon: 'B', url: 'https://beatport.com' },
  { name: 'tidal', icon: 'T', url: 'https://tidal.com' },
];

const releases = {
  featured: [
    { id: 1, title: 'Latin House Fusion Mix 2024', type: 'Mix', duration: '62:45', plays: '125K' },
    { id: 2, title: 'NYC Underground Sessions', type: 'Mix', duration: '58:30', plays: '98K' },
    { id: 3, title: 'Neon Nights EP', type: 'EP', duration: '24:15', plays: '156K' },
  ],
  latestMixes: [
    { id: 4, title: 'Summer Vibes Latin Mix', type: 'Mix', duration: '55:20', plays: '87K' },
    { id: 5, title: 'Brooklyn Warehouse Set', type: 'Live Set', duration: '72:00', plays: '142K' },
    { id: 6, title: 'EDM Meets Reggaeton', type: 'Mix', duration: '48:35', plays: '76K' },
  ],
  latinHouse: [
    { id: 7, title: 'Ritmo y Pasión', type: 'Single', duration: '5:45', plays: '234K' },
    { id: 8, title: 'Baila Conmigo', type: 'Single', duration: '6:12', plays: '198K' },
    { id: 9, title: 'Latin House Essentials', type: 'Mix', duration: '64:30', plays: '112K' },
  ],
  edm: [
    { id: 10, title: 'Electric Dreams', type: 'Single', duration: '4:58', plays: '267K' },
    { id: 11, title: 'Festival Anthems 2024', type: 'Mix', duration: '68:15', plays: '189K' },
    { id: 12, title: 'Bass & Beats', type: 'EP', duration: '18:45', plays: '145K' },
  ],
};

export default function Music() {
  const t = useTranslations('music');
  const tPlatforms = useTranslations('music.platforms');
  const tReleases = useTranslations('music.releases');
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('featured');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-magenta-500/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 text-center">
          <GoldHeart className="mx-auto mb-6" size={60} />
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-gradient">
            {t('title')}
          </h1>
          <p className="text-xl text-amber-300 font-semibold mb-4">{t('subtitle')}</p>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('description')}</p>
        </div>
      </section>

      {/* Featured Player Section */}
      <section className="py-12 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-lg p-8 shadow-[0_0_40px_rgba(251,191,36,0.15)]">
              <div className="flex items-center gap-3 mb-6">
                <GoldHeart size={30} />
                <h2 className="text-2xl font-bold text-amber-400">{t('featured.title')}</h2>
              </div>

              {/* Player */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{t('featured.track')}</h3>
                <p className="text-gray-400 text-sm mb-4">DJ Goldie XO • 2024</p>

                {/* Waveform Visualizer */}
                <div className="bg-black rounded-lg p-6 mb-4">
                  <div className="flex items-center gap-2 h-24 mb-4">
                    {Array.from({ length: 80 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-amber-500 to-yellow-400 rounded-full transition-all duration-150"
                        style={{ 
                          height: `${Math.sin(i * 0.2) * 40 + 50}%`,
                          opacity: isPlaying ? 0.8 : 0.3
                        }}
                      />
                    ))}
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-4">
                    <Button
                      size="lg"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black rounded-full w-14 h-14 p-0 shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </Button>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-gradient-to-r from-amber-500 to-yellow-500" />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>21:30</span>
                        <span>62:45</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform Links */}
                <div>
                  <p className="text-sm text-gray-400 mb-3">{t('listenOn')}</p>
                  <div className="flex flex-wrap gap-3">
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
            </div>
          </div>
        </div>
      </section>

      {/* Releases Grid */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container">
          <div className="flex items-center justify-center gap-3 mb-8">
            <GoldHeart size={35} />
            <h2 className="text-3xl font-bold text-amber-400">{tReleases('title')}</h2>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 bg-gray-900 border border-amber-500/30">
              <TabsTrigger value="featured" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                {t('tabs.featured')}
              </TabsTrigger>
              <TabsTrigger value="latestMixes" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                {t('tabs.latestMixes')}
              </TabsTrigger>
              <TabsTrigger value="latinHouse" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                {t('tabs.latinHouse')}
              </TabsTrigger>
              <TabsTrigger value="edm" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                {t('tabs.edm')}
              </TabsTrigger>
            </TabsList>

            {Object.entries(releases).map(([key, items]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((release) => (
                    <div
                      key={release.id}
                      className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-lg p-6 hover:border-amber-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.2)] transition-all group"
                    >
                      {/* Abstract Cover Art */}
                      <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-yellow-600 to-amber-700" />
                        <div 
                          className="absolute inset-0 opacity-30 mix-blend-multiply"
                          style={{
                            backgroundImage: 'url(/images/picgold.png)',
                            backgroundSize: 'cover',
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <GoldHeart size={60} />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                          {release.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <span>{release.type}</span>
                          <span>•</span>
                          <span>{release.duration}</span>
                          <span>•</span>
                          <span>{release.plays} plays</span>
                        </div>
                      </div>

                      {/* Play Button */}
                      <Button
                        className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold"
                      >
                        {tReleases('playNow')}
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
