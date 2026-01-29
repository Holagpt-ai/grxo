import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { GoldHeart } from '@/components/GoldHeart';
import { Button } from '@/components/ui/button';

const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

export const metadata: Metadata = {
  title: 'Terms of Service - Goldie XO',
  description: 'Terms of Service for Goldie XO. Use of site, content ownership, and liability.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <GoldHeart size={40} />
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400">
              Terms of Service
            </h1>
          </div>
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
            <p className="text-sm text-gray-500">Last updated: January 2026. By using this website you agree to these terms.</p>

            <h2 className="text-xl font-semibold text-amber-400/90 mt-8">1. Use of Site</h2>
            <p>
              This site is offered by Goldie XO for informational, promotional, and entertainment purposes. 
              You agree to use it only for lawful purposes and not to interfere with the site, its users, or any related systems.
            </p>

            <h2 className="text-xl font-semibold text-amber-400/90 mt-8">2. Content Ownership</h2>
            <p>
              All content on this site (text, images, logos, music, and other materials) is owned by Goldie XO or used with permission. 
              You may not copy, modify, distribute, or use our content for commercial purposes without prior written consent.
            </p>

            <h2 className="text-xl font-semibold text-amber-400/90 mt-8">3. User Conduct</h2>
            <p>
              You may not use this site to transmit harmful, offensive, or illegal material, or to impersonate others. 
              We reserve the right to block access or remove content that violates these terms.
            </p>

            <h2 className="text-xl font-semibold text-amber-400/90 mt-8">4. Disclaimer of Warranties</h2>
            <p>
              This site is provided &quot;as is.&quot; We do not warrant that it will be uninterrupted or error-free. 
              Use of the site and any linked services is at your own risk.
            </p>

            <h2 className="text-xl font-semibold text-amber-400/90 mt-8">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Goldie XO and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this site or any content thereon.
            </p>

            <h2 className="text-xl font-semibold text-amber-400/90 mt-8">6. Links to Third-Party Sites</h2>
            <p>
              Our site may link to third-party websites (e.g., streaming, social media). We are not responsible for their content or practices. 
              Your use of those sites is subject to their own terms and policies.
            </p>

            <h2 className="text-xl font-semibold text-amber-400/90 mt-8">7. Changes &amp; Contact</h2>
            <p>
              We may update these terms from time to time; continued use of the site after changes constitutes acceptance. 
              For questions, visit our <Link href="/contact" className="text-amber-400 hover:underline">Contact</Link> page.
            </p>
          </div>
          <div className="mt-10">
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
