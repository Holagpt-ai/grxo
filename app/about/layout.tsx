import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Goldie XO',
  description: 'About Goldie XO — NYC EDM & Latin House. From premature birth and a life-changing accident to the decks and the stage.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
