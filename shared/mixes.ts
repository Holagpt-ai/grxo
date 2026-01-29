export interface Mix {
  id: number;
  slug: string;
  title: string;
  type: string;
  duration: string;
  plays: string;
  description?: string;
  soundcloudUrl?: string;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

const rawMixes: Omit<Mix, 'slug'>[] = [
  { id: 1, title: 'Latin House Fusion Mix 2024', type: 'Mix', duration: '62:45', plays: '125K', description: 'Latin House fusion set from 2024.' },
  { id: 2, title: 'NYC Underground Sessions', type: 'Mix', duration: '58:30', plays: '98K', description: 'Recorded live in NYC.' },
  { id: 3, title: 'Neon Nights EP', type: 'EP', duration: '24:15', plays: '156K', description: 'Neon Nights EP release.' },
  { id: 4, title: 'Summer Vibes Latin Mix', type: 'Mix', duration: '55:20', plays: '87K', description: 'Summer Latin vibes.' },
  { id: 5, title: 'Brooklyn Warehouse Set', type: 'Live Set', duration: '72:00', plays: '142K', description: 'Brooklyn warehouse live set.' },
  { id: 6, title: 'EDM Meets Reggaeton', type: 'Mix', duration: '48:35', plays: '76K', description: 'EDM meets Reggaeton.' },
  { id: 7, title: 'Ritmo y Pasión', type: 'Single', duration: '5:45', plays: '234K', description: 'Ritmo y Pasión single.' },
  { id: 8, title: 'Baila Conmigo', type: 'Single', duration: '6:12', plays: '198K', description: 'Baila Conmigo single.' },
  { id: 9, title: 'Latin House Essentials', type: 'Mix', duration: '64:30', plays: '112K', description: 'Latin House essentials.' },
  { id: 10, title: 'Electric Dreams', type: 'Single', duration: '4:58', plays: '267K', description: 'Electric Dreams single.' },
  { id: 11, title: 'Festival Anthems 2024', type: 'Mix', duration: '68:15', plays: '189K', description: 'Festival anthems 2024.' },
  { id: 12, title: 'Bass & Beats', type: 'EP', duration: '18:45', plays: '145K', description: 'Bass & Beats EP.' },
];

export const allMixes: Mix[] = rawMixes.map((m) => ({
  ...m,
  slug: slugify(m.title),
}));

export const releases = {
  featured: allMixes.filter((m) => [1, 2, 3].includes(m.id)),
  latestMixes: allMixes.filter((m) => [4, 5, 6].includes(m.id)),
  latinHouse: allMixes.filter((m) => [7, 8, 9].includes(m.id)),
  edm: allMixes.filter((m) => [10, 11, 12].includes(m.id)),
};

export function getMixBySlug(slug: string): Mix | undefined {
  return allMixes.find((m) => m.slug === slug);
}
