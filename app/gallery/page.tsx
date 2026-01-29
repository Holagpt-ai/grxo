'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { GoldHeart } from '@/components/GoldHeart';
import { Button } from '@/components/ui/button';

const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

// Placeholder blur (tiny gray image) for Next.js Image
const BLUR_DATA_URL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AdkH/2Q==';

// Replace with your gallery images from /public/gallery/ (e.g. 1.jpg, 2.jpg)
const galleryImages = [
  { src: '/images/GXOMainHeadshotWebsite.JPG', alt: 'Goldie XO' },
  { src: '/images/picgold.png', alt: 'Gold heart' },
  { src: '/images/GXOMainHeadshotWebsite.JPG', alt: 'Goldie XO' },
  { src: '/images/picgold.png', alt: 'Gold heart' },
  { src: '/images/GXOMainHeadshotWebsite.JPG', alt: 'Goldie XO' },
  { src: '/images/picgold.png', alt: 'Gold heart' },
  { src: '/images/GXOMainHeadshotWebsite.JPG', alt: 'Goldie XO' },
  { src: '/images/picgold.png', alt: 'Gold heart' },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="container relative z-10 text-center">
          <GoldHeart className="mx-auto mb-6" size={56} />
          <h1 className="text-4xl md:text-6xl font-bold text-amber-400 mb-4">
            Gallery
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Photos and moments from the stage and beyond.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 pb-24">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden border border-amber-500/20 bg-gray-900/50 group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Add your photos to <code className="text-amber-400/80">public/gallery/</code> and update{' '}
            <code className="text-amber-400/80">galleryImages</code> in this page.
          </p>
          <div className="text-center mt-6">
            <Button asChild variant="outline" className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
