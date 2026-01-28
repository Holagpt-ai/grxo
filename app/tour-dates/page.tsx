'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { GoldHeart } from '@/components/GoldHeart';
import { Calendar, MapPin, Ticket, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

// Lazy load Footer component
const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

interface TourDate {
  id: number;
  date: string;
  city: string;
  venue: string;
  country: string;
  featured: boolean;
  soldOut: boolean;
  ticketUrl: string;
}

const upcomingShows: TourDate[] = [
  {
    id: 1,
    date: 'Mar 15, 2024',
    city: 'Miami',
    venue: 'E11EVEN Miami',
    country: 'USA',
    featured: true,
    soldOut: false,
    ticketUrl: '#',
  },
  {
    id: 2,
    date: 'Mar 22, 2024',
    city: 'New York',
    venue: 'Brooklyn Mirage',
    country: 'USA',
    featured: true,
    soldOut: false,
    ticketUrl: '#',
  },
  {
    id: 3,
    date: 'Apr 5, 2024',
    city: 'Los Angeles',
    venue: 'Exchange LA',
    country: 'USA',
    featured: false,
    soldOut: false,
    ticketUrl: '#',
  },
  {
    id: 4,
    date: 'Apr 12, 2024',
    city: 'Chicago',
    venue: 'PRYSM Nightclub',
    country: 'USA',
    featured: false,
    soldOut: true,
    ticketUrl: '#',
  },
  {
    id: 5,
    date: 'Apr 20, 2024',
    city: 'Las Vegas',
    venue: 'Hakkasan',
    country: 'USA',
    featured: false,
    soldOut: false,
    ticketUrl: '#',
  },
  {
    id: 6,
    date: 'May 3, 2024',
    city: 'San Francisco',
    venue: 'The Midway',
    country: 'USA',
    featured: false,
    soldOut: false,
    ticketUrl: '#',
  },
  {
    id: 7,
    date: 'May 18, 2024',
    city: 'Toronto',
    venue: 'Rebel Nightclub',
    country: 'Canada',
    featured: false,
    soldOut: false,
    ticketUrl: '#',
  },
  {
    id: 8,
    date: 'Jun 1, 2024',
    city: 'London',
    venue: 'Fabric',
    country: 'UK',
    featured: false,
    soldOut: false,
    ticketUrl: '#',
  },
  {
    id: 9,
    date: 'Jun 15, 2024',
    city: 'Ibiza',
    venue: 'Amnesia',
    country: 'Spain',
    featured: true,
    soldOut: false,
    ticketUrl: '#',
  },
  {
    id: 10,
    date: 'Jul 4, 2024',
    city: 'Miami',
    venue: 'Ultra Music Festival',
    country: 'USA',
    featured: true,
    soldOut: false,
    ticketUrl: '#',
  },
];

const pastShows: TourDate[] = [
  {
    id: 11,
    date: 'Feb 14, 2024',
    city: 'New York',
    venue: 'Output Brooklyn',
    country: 'USA',
    featured: false,
    soldOut: true,
    ticketUrl: '#',
  },
  {
    id: 12,
    date: 'Jan 20, 2024',
    city: 'Miami',
    venue: 'Space Miami',
    country: 'USA',
    featured: false,
    soldOut: true,
    ticketUrl: '#',
  },
  {
    id: 13,
    date: 'Dec 31, 2023',
    city: 'Las Vegas',
    venue: 'Omnia',
    country: 'USA',
    featured: true,
    soldOut: true,
    ticketUrl: '#',
  },
];

export default function TourDates() {
  const t = useTranslations('tourDates');
  const [showPast, setShowPast] = useState(false);

  const handleTicketClick = (venue: string) => {
    toast.info(`Redirecting to tickets for ${venue}`, {
      description: 'Ticket integration coming soon',
    });
  };

  const displayShows = showPast ? pastShows : upcomingShows;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-900/10 to-black" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-magenta-500/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 text-center">
          <GoldHeart className="mx-auto mb-6" size={60} />
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-gradient">
            {t('title')}
          </h1>
          <p className="text-xl text-amber-300 font-semibold mb-4">{t('subtitle')}</p>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('description')}</p>
        </div>
      </section>

      {/* Tour Dates Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container max-w-6xl">
          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              onClick={() => setShowPast(false)}
              variant={!showPast ? 'default' : 'outline'}
              className={!showPast 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold' 
                : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'}
            >
              <Calendar size={18} className="mr-2" />
              {t('upcoming')}
            </Button>
            <Button
              onClick={() => setShowPast(true)}
              variant={showPast ? 'default' : 'outline'}
              className={showPast 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold' 
                : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'}
            >
              <Calendar size={18} className="mr-2" />
              {t('past')}
            </Button>
          </div>

          {/* Timeline View */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-yellow-500 to-amber-500 hidden md:block" />

            {/* Shows */}
            <div className="space-y-6">
              {displayShows.map((show) => (
                <div key={show.id} className="relative">
                  {/* Timeline Pin */}
                  <div className="absolute left-8 top-8 w-4 h-4 -ml-[7px] rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 shadow-[0_0_15px_rgba(251,191,36,0.6)] hidden md:block z-10">
                    {show.featured && (
                      <div className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-75" />
                    )}
                  </div>

                  {/* Show Card */}
                  <div className="md:ml-20">
                    <div className={`bg-gradient-to-br from-gray-900 to-black border rounded-lg p-6 hover:shadow-[0_0_30px_rgba(251,191,36,0.2)] transition-all ${
                      show.featured ? 'border-amber-500' : 'border-amber-500/30 hover:border-amber-500'
                    }`}>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        {/* Left: Date & Location */}
                        <div className="flex-1">
                          <div className="flex items-start gap-4">
                            {/* Date Badge */}
                            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 flex flex-col items-center justify-center">
                              <span className="text-xs font-bold text-black uppercase">
                                {show.date.split(' ')[0]}
                              </span>
                              <span className="text-2xl font-black text-black">
                                {show.date.split(' ')[1].replace(',', '')}
                              </span>
                            </div>

                            {/* Venue Info */}
                            <div className="flex-1">
                              {show.featured && (
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-600 text-black text-xs font-bold rounded-full mb-2">
                                  <GoldHeart size={12} />
                                  {t('featured')}
                                </div>
                              )}
                              <h3 className="text-xl font-bold text-white mb-1">{show.venue}</h3>
                              <div className="flex items-center gap-2 text-amber-400">
                                <MapPin size={16} />
                                <span className="font-semibold">{show.city}, {show.country}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right: Actions */}
                        <div className="flex items-center gap-3">
                          {show.soldOut ? (
                            <div className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 font-bold">
                              {t('soldOut')}
                            </div>
                          ) : !showPast ? (
                            <>
                              <Button
                                onClick={() => handleTicketClick(show.venue)}
                                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold"
                              >
                                <Ticket size={16} className="mr-2" />
                                {t('getTickets')}
                              </Button>
                              <Button
                                variant="outline"
                                className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
                              >
                                <ExternalLink size={16} className="mr-2" />
                                {t('moreInfo')}
                              </Button>
                            </>
                          ) : (
                            <div className="px-6 py-3 bg-gray-900 border border-amber-500/30 rounded-lg text-gray-400 font-semibold">
                              Past Event
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* No Shows Message */}
          {displayShows.length === 0 && (
            <div className="text-center py-12">
              <GoldHeart size={60} className="mx-auto mb-4 opacity-50" />
              <p className="text-gray-400 text-lg">{t('noShows')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
