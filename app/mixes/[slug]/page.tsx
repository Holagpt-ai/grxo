import { notFound } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { allMixes, getMixBySlug } from '@/shared/mixes';
import { GoldHeart } from '@/components/GoldHeart';
import { Button } from '@/components/ui/button';
import { Play, ArrowLeft } from 'lucide-react';

const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

export function generateStaticParams() {
  return allMixes.map((mix) => ({ slug: mix.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const mix = getMixBySlug(slug);
    if (!mix) return { title: 'Mix Not Found' };
    return {
      title: `${mix.title} | Goldie XO`,
      description: mix.description ?? `${mix.type} – ${mix.duration} – ${mix.plays} plays`,
    };
  });
}

export default async function MixDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mix = getMixBySlug(slug);

  if (!mix) notFound();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="container relative z-10 max-w-3xl mx-auto px-4">
          <Link
            href="/music"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-semibold mb-8"
          >
            <ArrowLeft size={18} />
            Back to Music
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-32 h-32 flex-shrink-0 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.3)]">
              <GoldHeart size={56} />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-amber-400 font-semibold text-sm">{mix.type}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-1 mb-2">{mix.title}</h1>
              <p className="text-gray-400 text-sm">
                Goldie XO • {mix.duration} • {mix.plays} plays
              </p>
            </div>
          </div>
          {mix.description && (
            <p className="text-gray-300 mt-6 leading-relaxed">{mix.description}</p>
          )}
          <div className="flex flex-wrap gap-4 mt-8">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold">
              <Link href="/music">
                <Play size={20} className="mr-2" />
                Listen on Music Page
              </Link>
            </Button>
            {mix.soundcloudUrl && (
              <Button asChild variant="outline" className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10">
                <a href={mix.soundcloudUrl} target="_blank" rel="noopener noreferrer">
                  SoundCloud
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
