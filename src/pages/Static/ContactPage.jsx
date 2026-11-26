import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Mail, Phone, MapPin, MessageCircle, CheckCircle2, Sparkles, Send } from 'lucide-react';

export const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Fragrance Recommendation', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fadeIn space-y-12">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-aura-gold font-bold block">
          Client Concierge
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-aura-espresso font-medium">
          Contact the BELLMORA LUXURY Atelier
        </h1>
        <p className="text-xs text-aura-grey leading-relaxed">
          Whether you seek private consultation regarding a bespoke fragrance profile, order guidance, or gifting advice, our sommeliers are at your disposal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Contact Info */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-aura-beige shadow-xs space-y-6 text-xs">
            <h3 className="font-serif text-xl font-medium text-aura-espresso">
              Atelier Information (Sample)
            </h3>

            <div className="space-y-4 text-aura-grey">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-aura-gold mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-aura-espresso block font-medium">BELLMORA LUXURY Fragrance Atelier (Sample)</strong>
                  <span>Altamount Road, Cumballa Hill</span>
                  <span className="block">Mumbai, Maharashtra 400026, India</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-aura-gold mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-aura-espresso block font-medium">Concierge Email</strong>
                  <span className="font-mono text-aura-espresso">concierge@bellmoraluxury.demo</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-aura-gold mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-aura-espresso block font-medium">Atelier Hotline</strong>
                  <span>+91 98765 43210 (Mon - Sat, 10 AM - 7 PM IST)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-aura-beige">
              <button
                type="button"
                onClick={() => alert('Demo WhatsApp Concierge: In production, this launches direct WhatsApp chat with a BELLMORA LUXURY scent sommelier.')}
                className="w-full py-2.5 px-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat via WhatsApp (Demo)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-aura-beige shadow-xs">
          {sent ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-aura-espresso">Message Logged</h3>
              <p className="text-xs text-aura-grey max-w-sm mx-auto">
                Thank you, {form.name}. Your inquiry has been registered in the demonstration log.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 px-6 py-2 border border-aura-espresso text-xs font-semibold rounded-xl"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <h3 className="font-serif text-xl font-medium text-aura-espresso mb-2">
                Send an Atelier Inquiry
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold uppercase tracking-wider mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Elena Vance"
                    className="w-full p-2.5 bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="elena@example.com"
                    className="w-full p-2.5 bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider mb-1">Subject</label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full p-2.5 bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold"
                >
                  <option value="Fragrance Recommendation">Fragrance Recommendation</option>
                  <option value="Order Tracking Inquiry">Order Tracking Inquiry</option>
                  <option value="Bespoke Bundle Consultation">Bespoke Bundle Consultation</option>
                  <option value="Gift Concierge">Gift Concierge</option>
                  <option value="Other">Other Atelier Question</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider mb-1">Your Message *</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How may our fragrance sommeliers assist your olfactory journey?"
                  className="w-full p-2.5 bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-aura-espresso text-white font-semibold uppercase tracking-wider rounded-xl hover:bg-aura-espresso-light transition-colors flex items-center justify-center space-x-1"
              >
                <Send className="w-3.5 h-3.5 text-aura-gold mr-1" />
                <span>Submit Inquiry (Demo)</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
