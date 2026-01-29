export interface Tour {
  id: number;
  slug: string;
  date: string;
  city: string;
  venue: string;
  country: string;
  featured: boolean;
  soldOut: boolean;
  ticketUrl: string;
  description?: string;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

const rawTours: Omit<Tour, 'slug'>[] = [
  { id: 1, date: 'Mar 15, 2024', city: 'Miami', venue: 'E11EVEN Miami', country: 'USA', featured: true, soldOut: false, ticketUrl: '#', description: 'Latin House night at E11EVEN.' },
  { id: 2, date: 'Mar 22, 2024', city: 'New York', venue: 'Brooklyn Mirage', country: 'USA', featured: true, soldOut: false, ticketUrl: '#', description: 'Open-air Brooklyn Mirage takeover.' },
  { id: 3, date: 'Apr 5, 2024', city: 'Los Angeles', venue: 'Exchange LA', country: 'USA', featured: false, soldOut: false, ticketUrl: '#', description: 'Exchange LA residency night.' },
  { id: 4, date: 'Apr 12, 2024', city: 'Chicago', venue: 'PRYSM Nightclub', country: 'USA', featured: false, soldOut: true, ticketUrl: '#', description: 'PRYSM Chicago – sold out.' },
  { id: 5, date: 'Apr 20, 2024', city: 'Las Vegas', venue: 'Hakkasan', country: 'USA', featured: false, soldOut: false, ticketUrl: '#', description: 'Hakkasan Las Vegas.' },
  { id: 6, date: 'May 3, 2024', city: 'San Francisco', venue: 'The Midway', country: 'USA', featured: false, soldOut: false, ticketUrl: '#', description: 'The Midway SF.' },
  { id: 7, date: 'May 18, 2024', city: 'Toronto', venue: 'Rebel Nightclub', country: 'Canada', featured: false, soldOut: false, ticketUrl: '#', description: 'Rebel Toronto.' },
  { id: 8, date: 'Jun 1, 2024', city: 'London', venue: 'Fabric', country: 'UK', featured: false, soldOut: false, ticketUrl: '#', description: 'Fabric London.' },
  { id: 9, date: 'Jun 15, 2024', city: 'Ibiza', venue: 'Amnesia', country: 'Spain', featured: true, soldOut: false, ticketUrl: '#', description: 'Amnesia Ibiza.' },
  { id: 10, date: 'Jul 4, 2024', city: 'Miami', venue: 'Ultra Music Festival', country: 'USA', featured: true, soldOut: false, ticketUrl: '#', description: 'Ultra Music Festival Miami.' },
  { id: 11, date: 'Feb 14, 2024', city: 'New York', venue: 'Output Brooklyn', country: 'USA', featured: false, soldOut: true, ticketUrl: '#', description: 'Output Brooklyn – past event.' },
  { id: 12, date: 'Jan 20, 2024', city: 'Miami', venue: 'Space Miami', country: 'USA', featured: false, soldOut: true, ticketUrl: '#', description: 'Space Miami – past event.' },
  { id: 13, date: 'Dec 31, 2023', city: 'Las Vegas', venue: 'Omnia', country: 'USA', featured: true, soldOut: true, ticketUrl: '#', description: 'NYE at Omnia Las Vegas.' },
];

export const upcomingTours: Tour[] = rawTours.slice(0, 10).map((t) => ({
  ...t,
  slug: slugify(`${t.city}-${t.venue}-${t.date.replace(/,?\s/g, '-')}`),
}));

export const pastTours: Tour[] = rawTours.slice(10).map((t) => ({
  ...t,
  slug: slugify(`${t.city}-${t.venue}-${t.date.replace(/,?\s/g, '-')}`),
}));

export const allTours: Tour[] = [...upcomingTours, ...pastTours];

export function getTourBySlug(slug: string): Tour | undefined {
  return allTours.find((t) => t.slug === slug);
}
