'use client';

import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GoldHeart } from '@/components/GoldHeart';
import { toast } from 'sonner';
import { Mail, User, Building2, Calendar } from 'lucide-react';

const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

const CalendlyWidget = dynamic(() => import('@/components/CalendlyWidget'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-900 rounded-lg p-8 border border-amber-500/30 animate-pulse">
      <div className="h-12 bg-gray-800 rounded mb-4" />
      <div className="h-96 bg-gray-800 rounded" />
    </div>
  ),
});

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(200, 'Name is too long'),
  email: z.string().trim().min(1, 'Email is required').email('Please enter a valid email address'),
  message: z.string().trim().min(1, 'Message is required').max(5000, 'Message is too long'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const t = useTranslations('contact');
  const tForm = useTranslations('contact.form');
  const tInfo = useTranslations('contact.info');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? 'Failed to send message.');
      }

      toast.success(tForm('success'));
      reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to send. Please try again.';
      toast.error(message);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10 text-center">
          <GoldHeart className="mx-auto mb-6" size={60} />
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-gradient">
            {t('title')}
          </h1>
          <p className="text-xl text-amber-300 font-semibold mb-4">{t('subtitle')}</p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">{t('description')}</p>
          <a
            href={`mailto:${t('mainEmail')}`}
            className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors underline decoration-amber-500/50 underline-offset-4 hover:decoration-amber-400"
          >
            <Mail size={28} className="flex-shrink-0" />
            {t('mainEmail')}
          </a>
        </div>
      </section>

      {/* Booking Section with Calendly */}
      <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black border-y border-amber-500/20">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="text-amber-400" size={32} />
                <h2 className="text-4xl font-bold text-amber-400">Book a Show</h2>
              </div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Schedule a consultation or book Goldie XO for your next event. Booking inquiry: select a time below.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-lg p-6 shadow-[0_0_40px_rgba(251,191,36,0.15)]">
              <CalendlyWidget url="https://calendly.com/djgoldiexo/booking" height="700px" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-lg p-8 shadow-[0_0_40px_rgba(251,191,36,0.15)]">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-amber-400 font-semibold mb-2">
                      {tForm('name')}
                    </label>
                    <Input
                      id="name"
                      type="text"
                      {...register('name')}
                      className={`bg-black border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 ${
                        errors.name ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      disabled={isSubmitting}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-amber-400 font-semibold mb-2">
                      {tForm('email')}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={`bg-black border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 ${
                        errors.email ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      disabled={isSubmitting}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-amber-400 font-semibold mb-2">
                      {tForm('message')}
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      {...register('message')}
                      className={`bg-black border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      disabled={isSubmitting}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold text-lg shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] transition-all"
                  >
                    {isSubmitting ? tForm('sending') : tForm('send')}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-lg p-6 shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                <div className="flex items-center gap-3 mb-6">
                  <GoldHeart size={30} />
                  <h3 className="text-xl font-bold text-amber-400">{tInfo('title')}</h3>
                </div>
                
                <div className="space-y-6">
                  {/* Main contact email - prominent */}
                  <div className="pb-6 border-b border-amber-500/20">
                    <div className="flex items-center gap-2 text-amber-300 font-semibold mb-2">
                      <Mail size={18} />
                      <span>{t('emailLabel')}</span>
                    </div>
                    <a
                      href={`mailto:${t('mainEmail')}`}
                      className="text-lg font-semibold text-amber-400 hover:text-amber-300 transition-colors break-all"
                    >
                      {t('mainEmail')}
                    </a>
                  </div>

                  {/* Bookings */}
                  <div className="group">
                    <div className="flex items-center gap-2 text-amber-300 font-semibold mb-2">
                      <User size={18} />
                      <span>{tInfo('bookings')}</span>
                    </div>
                    <a 
                      href={`mailto:${tInfo('bookingsEmail')}`}
                      className="text-gray-400 hover:text-amber-400 transition-colors text-sm block"
                    >
                      {tInfo('bookingsEmail')}
                    </a>
                  </div>

                  {/* Management */}
                  <div className="group">
                    <div className="flex items-center gap-2 text-amber-300 font-semibold mb-2">
                      <Building2 size={18} />
                      <span>{tInfo('management')}</span>
                    </div>
                    <a 
                      href={`mailto:${tInfo('managementEmail')}`}
                      className="text-gray-400 hover:text-amber-400 transition-colors text-sm block"
                    >
                      {tInfo('managementEmail')}
                    </a>
                  </div>

                  {/* Press */}
                  <div className="group">
                    <div className="flex items-center gap-2 text-amber-300 font-semibold mb-2">
                      <Mail size={18} />
                      <span>{tInfo('press')}</span>
                    </div>
                    <a 
                      href={`mailto:${tInfo('pressEmail')}`}
                      className="text-gray-400 hover:text-amber-400 transition-colors text-sm block"
                    >
                      {tInfo('pressEmail')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Card */}
              <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/30 rounded-lg p-6">
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "Looking forward to connecting with you. Whether it's about booking a show, collaborating on a project, or just sharing the love for music—let's make it happen!"
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <GoldHeart size={20} />
                  <span className="text-amber-400 font-semibold text-sm">— Goldie XO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
