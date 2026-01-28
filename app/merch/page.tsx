'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GoldHeart } from '@/components/GoldHeart';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

// Lazy load Footer component
const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

const products = [
  {
    id: 1,
    name: 'Gold Heart Logo Tee',
    category: 'apparel',
    price: 35,
    image: '/images/picgold.png',
    badge: 'newArrival',
    inStock: true,
    shopifyUrl: 'https://shop.djgoldiexo.com/products/gold-heart-logo-tee', // Placeholder Shopify URL
  },
  {
    id: 2,
    name: 'Neon Nights Hoodie',
    category: 'apparel',
    price: 65,
    image: '/images/picgold.png',
    badge: 'limitedEdition',
    inStock: true,
    shopifyUrl: 'https://shop.djgoldiexo.com/products/neon-nights-hoodie', // Placeholder Shopify URL
  },
  {
    id: 3,
    name: 'Latin House Fusion Tee',
    category: 'apparel',
    price: 35,
    image: '/images/picgold.png',
    badge: null,
    inStock: true,
    shopifyUrl: 'https://shop.djgoldiexo.com/products/latin-house-fusion-tee', // Placeholder Shopify URL
  },
  {
    id: 4,
    name: 'GXO Snapback Cap',
    category: 'accessories',
    price: 30,
    image: '/images/picgold.png',
    badge: 'newArrival',
    inStock: true,
    shopifyUrl: 'https://shop.djgoldiexo.com/products/gxo-snapback-cap', // Placeholder Shopify URL
  },
  {
    id: 5,
    name: 'Abstract Vibes Hoodie',
    category: 'apparel',
    price: 70,
    image: '/images/picgold.png',
    badge: 'limitedEdition',
    inStock: false,
    shopifyUrl: 'https://shop.djgoldiexo.com/products/abstract-vibes-hoodie', // Placeholder Shopify URL
  },
  {
    id: 6,
    name: 'Gold Heart Enamel Pin',
    category: 'accessories',
    price: 15,
    image: '/images/picgold.png',
    badge: null,
    inStock: true,
    shopifyUrl: 'https://shop.djgoldiexo.com/products/gold-heart-enamel-pin', // Placeholder Shopify URL
  },
  {
    id: 7,
    name: 'NYC Vibes Long Sleeve',
    category: 'apparel',
    price: 45,
    image: '/images/picgold.png',
    badge: null,
    inStock: true,
    shopifyUrl: 'https://shop.djgoldiexo.com/products/nyc-vibes-long-sleeve', // Placeholder Shopify URL
  },
  {
    id: 8,
    name: 'Neon Logo Tote Bag',
    category: 'accessories',
    price: 25,
    image: '/images/picgold.png',
    badge: 'newArrival',
    inStock: true,
    shopifyUrl: 'https://shop.djgoldiexo.com/products/neon-logo-tote-bag', // Placeholder Shopify URL
  },
];

export default function Merch() {
  const t = useTranslations('merch');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : activeFilter === 'limited'
    ? products.filter(p => p.badge === 'limitedEdition')
    : products.filter(p => p.category === activeFilter);

  const handleAddToCart = (product: typeof products[0]) => {
    if (!product.inStock) {
      toast.error('This item is currently sold out');
      return;
    }
    
    // Open Shopify product page in new tab
    if (product.shopifyUrl) {
      window.open(product.shopifyUrl, '_blank', 'noopener,noreferrer');
      toast.success(`Opening ${product.name} in shop...`, {
        description: 'Redirecting to Shopify store',
      });
    } else {
      toast.info('Shopify link coming soon!', {
        description: 'Product will be available in the shop soon',
      });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-900/10 to-black" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 text-center">
          <GoldHeart className="mx-auto mb-6" size={60} />
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-gradient">
            {t('title')}
          </h1>
          <p className="text-xl text-amber-300 font-semibold mb-4">{t('subtitle')}</p>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('description')}</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              onClick={() => setActiveFilter('all')}
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              className={activeFilter === 'all' 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold' 
                : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'}
            >
              {t('filters.all')}
            </Button>
            <Button
              onClick={() => setActiveFilter('apparel')}
              variant={activeFilter === 'apparel' ? 'default' : 'outline'}
              className={activeFilter === 'apparel' 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold' 
                : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'}
            >
              {t('filters.apparel')}
            </Button>
            <Button
              onClick={() => setActiveFilter('accessories')}
              variant={activeFilter === 'accessories' ? 'default' : 'outline'}
              className={activeFilter === 'accessories' 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold' 
                : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'}
            >
              {t('filters.accessories')}
            </Button>
            <Button
              onClick={() => setActiveFilter('limited')}
              variant={activeFilter === 'limited' ? 'default' : 'outline'}
              className={activeFilter === 'limited' 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold' 
                : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'}
            >
              {t('filters.limited')}
            </Button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-lg overflow-hidden hover:border-amber-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.2)] transition-all group"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-amber-500/20 to-yellow-600/20">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity mix-blend-overlay"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GoldHeart size={80} className="opacity-80" />
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-600 text-black text-xs font-bold rounded-full shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                      {t(product.badge)}
                    </div>
                  )}

                  {/* Sold Out Overlay */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                      <span className="text-2xl font-black text-amber-400">{t('soldOut')}</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-amber-400">${product.price}</span>
                    <GoldHeart size={20} />
                  </div>

                  {/* Add to Cart / Buy Now Button */}
                  <Button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    {product.inStock ? t('addToCart') : t('soldOut')}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900 to-black border border-amber-500/30 rounded-lg">
              <GoldHeart size={25} />
              <p className="text-amber-400 font-semibold">
                {t('comingSoon')}: More exclusive designs dropping soon!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
