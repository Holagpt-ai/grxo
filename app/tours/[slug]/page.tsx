import { notFound } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { allTours, getTourBySlug } from '@/shared/tours';
import { GoldHeart } from '@/components/GoldHeart';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Ticket, ArrowLeft } from 'lucide-react';

const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

export function generateStaticParams() {
  return allTours.map((tour) => ({ slug: tour.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const tour = getTourBySlug(slug);
    if (!tour) return { title: 'Tour Not Found' };
    return {
      title: `${tour.venue} | ${tour.city} | Goldie XO`,
      description: tour.description ?? `${tour.venue}, ${tour.city}, ${tour.country} – ${tour.date}`,
    };
  });
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) notFound();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-900/10 to-black" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="container relative z-10 max-w-3xl mx-auto px-4">
          <Link
            href="/tour-dates"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-semibold mb-8"
          >
            <ArrowLeft size={18} />
            Back to Tour Dates
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <GoldHeart size={48} />
            <div>
              <p className="text-amber-400 font-semibold">{tour.date}</p>
              <p className="text-gray-400 text-sm">{tour.city}, {tour.country}</p>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{tour.venue}</h1>
          {tour.featured && (
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-bold rounded-full border border-amber-500/30">
              Featured
            </span>
          )}
          {tour.soldOut && (
            <span className="ml-2 inline-flex px-3 py-1 bg-gray-800 text-gray-400 text-sm font-semibold rounded-full">
              Sold Out
            </span>
          )}
          {tour.description && (
            <p className="text-gray-300 mt-6 leading-relaxed">{tour.description}</p>
          )}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar size={20} />
              <span>{tour.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={20} />
              <span>{tour.city}, {tour.country}</span>
            </div>
          </div>
          {!tour.soldOut && (
            <Button asChild size="lg" className="mt-8 bg-amber-500 hover:bg-amber-600 text-black font-bold">
              <a href={tour.ticketUrl}>
                <Ticket size={20} className="mr-2" />
                Get Tickets
              </a>
            </Button>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
