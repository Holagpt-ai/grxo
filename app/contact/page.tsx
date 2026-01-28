'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GoldHeart } from '@/components/GoldHeart';
import { Footer } from '@/components/Footer';
import { toast } from 'sonner';
import { Mail, User, Building2 } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('contact');
  const tForm = useTranslations('contact.form');
  const tInfo = useTranslations('contact.info');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call (placeholder for now)
    setTimeout(() => {
      toast.success(tForm('success'));
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 text-center">
          <GoldHeart className="mx-auto mb-6" size={60} />
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-gradient">
            {t('title')}
          </h1>
          <p className="text-xl text-amber-300 font-semibold mb-4">{t('subtitle')}</p>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('description')}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-lg p-8 shadow-[0_0_40px_rgba(251,191,36,0.15)]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-amber-400 font-semibold mb-2">
                      {tForm('name')}
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="bg-black border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500"
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-amber-400 font-semibold mb-2">
                      {tForm('email')}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="bg-black border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500"
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-amber-400 font-semibold mb-2">
                      {tForm('subject')}
                    </label>
                    <Select 
                      value={formData.subject} 
                      onValueChange={(value) => handleChange('subject', value)}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="bg-black border-amber-500/30 text-white focus:border-amber-500">
                        <SelectValue placeholder={tForm('subject')} />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-amber-500/30">
                        <SelectItem value="bookings" className="text-white hover:bg-amber-500/10">
                          {tForm('subjectBookings')}
                        </SelectItem>
                        <SelectItem value="press" className="text-white hover:bg-amber-500/10">
                          {tForm('subjectPress')}
                        </SelectItem>
                        <SelectItem value="general" className="text-white hover:bg-amber-500/10">
                          {tForm('subjectGeneral')}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-amber-400 font-semibold mb-2">
                      {tForm('message')}
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={6}
                      className="bg-black border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 resize-none"
                      disabled={isSubmitting}
                      required
                    />
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
    </div>
  );
}
