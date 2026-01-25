import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";

export default function Home() {
  const t = useTranslations('hero');
  const tSite = useTranslations('site');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Abstract background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-gradient">
            {t('headline')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
            {t('subheadline')}
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            {t('description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all"
            >
              {t('listenNow')}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-400 hover:bg-amber-500/10"
            >
              {t('preorderBook')}
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Placeholder sections */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-amber-400">
            {tSite('tagline')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            More content coming soon. Sprint 0 focuses on internationalization infrastructure.
          </p>
        </div>
      </section>
    </div>
  );
}
