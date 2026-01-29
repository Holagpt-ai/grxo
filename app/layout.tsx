import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://djgoldiexo.com';
const siteName = 'Goldie XO';
const siteDescription = 'Official website of Goldie XO - NYC EDM & Latin House DJ. Listen to latest mixes, book shows, shop merch, and discover the electrifying fusion of EDM and Latin House music.';
const siteImage = `${siteUrl}/images/GXOMainHeadshotWebsite.JPG`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - NYC EDM & Latin House`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'Goldie XO',
    'EDM',
    'Latin House',
    'NYC DJ',
    'Electronic Dance Music',
    'Latin Music',
    'DJ Booking',
    'Music Producer',
    'Club DJ',
    'Festival DJ',
    'House Music',
    'Reggaeton',
    'Dance Music',
  ],
  authors: [{ name: 'Goldie XO' }],
  creator: 'Goldie XO',
  publisher: 'Goldie XO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} - NYC EDM & Latin House`,
    description: siteDescription,
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: 'Goldie XO - NYC EDM & Latin House DJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - NYC EDM & Latin House`,
    description: siteDescription,
    images: [siteImage],
    creator: '@djgoldiexo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': `${siteUrl}/en`,
      'es-ES': `${siteUrl}/es`,
    },
  },
  category: 'Music',
  other: {
    'theme-color': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': siteName,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
