import { useTranslations } from 'next-intl';
import { GoldHeart } from '@/components/GoldHeart';
import { Footer } from '@/components/Footer';

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
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header with Abstract Portrait */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background with abstract portrait */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ 
              backgroundImage: 'url(/images/GXOMainHeadshotWebsite.JPG)',
              filter: 'contrast(1.3) brightness(0.7)',
            }}
          />
          
          {/* Neon overlay layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/25 via-transparent to-cyan-500/25 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400/20 via-transparent to-lime-400/20 mix-blend-screen" />
          
          {/* Paint splatter effect */}
          <div 
            className="absolute inset-0 opacity-20 mix-blend-color-dodge"
            style={{
              backgroundImage: 'url(/images/picgold.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        </div>

        {/* Title */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]">
            {t('title')}
          </h1>
          <p className="text-2xl text-amber-300 font-bold tracking-wide drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]">
            {t('headline')}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Bio */}
            <div className="lg:col-span-2 space-y-8">
              {/* Paragraph 1 */}
              <div className="relative">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {t('bio.paragraph1')}
                </p>
              </div>

              {/* Gold Heart Divider */}
              <div className="flex items-center gap-4 py-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                <GoldHeart size={30} />
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
              </div>

              {/* Paragraph 2 */}
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('bio.paragraph2')}
              </p>

              {/* Pull Quote */}
              <blockquote className="relative my-12 pl-8 border-l-4 border-amber-500">
                <div className="absolute -left-4 top-0">
                  <GoldHeart size={25} />
                </div>
                <p className="text-amber-300 text-xl font-semibold italic leading-relaxed">
                  "{t('bio.quote')}"
                </p>
              </blockquote>

              {/* Paragraph 3 */}
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('bio.paragraph3')}
              </p>
            </div>

            {/* Right Column - Stats */}
            <div className="space-y-6">
              {/* Stats Card */}
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
                    <div className="text-gray-400 text-sm">Electronic Dance Music</div>
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

              {/* Venues Card */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
