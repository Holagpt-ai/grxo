import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { GoldHeart } from '@/components/GoldHeart';
import { Button } from '@/components/ui/button';

const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

export const metadata: Metadata = {
  title: 'Privacy Policy - Goldie XO',
  description: 'Privacy Policy for Goldie XO. How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <GoldHeart size={40} />
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400">
              Privacy Policy
            </h1>
          </div>
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
            <p className="text-sm text-gray-500">Last updated: January 2026. Goldie XO (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates this website.</p>

            <h2 className="text-xl font-semibold text-amber-400/90 mt-8">1. Information We Collect</h2>
            <p>
              We may collect information you provide directly (e.g., name, email when you subscribe to our newsletter or contact us), 
              and automatically (e.g., IP address, browser type, pages visited) when you use our site.
            </p>

            <h2 className="text-xl font-semibold text-amber-400/90 mt-8">2. How We Use Your Information</h2>
            <p>
              We use your information to send newsletters, respond to inquiries, improve our site, and comply with legal obligations. 
              We do not sell your personal information to third parties.
            </p>

            <h2 className="text-xl font-semibold text-amber-400/90 mt-8">3. Cookies &amp; Similar Technologies</h2>
            <p>
              We may use cookies and similar technologies to remember preferences, analyze traffic, and improve your experience. 
              You can adjust your browser settings to refuse cookies.
            </p>

            <h2 className="text-xl font-semibold text-amber-400/90 mt-8">4. Third-Party Services</h2>
            <p>
              Our site may use third-party services (e.g., analytics, embedded content such as SoundCloud or social links). 
              Those services have their own privacy policies governing how they use data.
            </p>

            <h2 className="text-xl font-semibold text-amber-400/90 mt-8">5. Data Security &amp; Retention</h2>
            <p>
              We take reasonable steps to protect your data. We retain your information only as long as needed for the purposes described in this policy or as required by law.
            </p>

            <h2 className="text-xl font-semibold text-amber-400/90 mt-8">6. Your Rights</h2>
            <p>
              Depending on where you live, you may have rights to access, correct, or delete your personal data, or to opt out of marketing. 
              Contact us to exercise these rights.
            </p>

            <h2 className="text-xl font-semibold text-amber-400/90 mt-8">7. Contact</h2>
            <p>
              For privacy-related questions or requests, visit our <Link href="/contact" className="text-amber-400 hover:underline">Contact</Link> page 
              or email us at the address provided there.
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
