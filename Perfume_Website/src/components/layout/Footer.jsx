import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ShieldCheck, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-aura-cream/80 border-t border-aura-beige text-aura-espresso pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Atelier Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-aura-beige">
          <div className="lg:col-span-6 space-y-3">
            <span className="font-cinzel text-2xl sm:text-3xl font-medium tracking-[0.25em] block text-aura-espresso">
              AURA
            </span>
            <p className="font-serif italic text-lg text-aura-gold-dark font-medium">
              "A Fragrance That Defines You."
            </p>
            <p className="text-xs text-aura-grey max-w-md leading-relaxed">
              Crafted with exquisite rare absolutes, pure oils, and artisanal devotion.
              Every bottle is a timeless signature of individuality, presence, and sensory poetry.
            </p>

            <div className="pt-2 flex items-center space-x-4 text-xs text-aura-grey">
              <span className="flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-aura-gold" />
                <span>30% Extrait Concentration</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-aura-gold" />
                <span>Cruelty-Free IFRA Standard</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <div className="bg-white/80 p-6 rounded-2xl border border-aura-beige shadow-xs">
              <h4 className="font-serif text-lg text-aura-espresso font-medium mb-1">
                The AURA Private Gazette
              </h4>
              <p className="text-xs text-aura-grey mb-4">
                Receive private invitations to seasonal private reserves, master perfumer notes, and complimentary sample coffrets.
              </p>

              {subscribed ? (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Welcome to the circle. A demo welcoming confirmation has been recorded.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-aura-grey absolute left-3 top-3" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      required
                      className="w-full pl-9 pr-3 py-2 text-xs bg-aura-ivory border border-aura-beige rounded-lg focus:outline-none focus:border-aura-gold text-aura-espresso"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-aura-espresso text-white text-xs font-semibold rounded-lg hover:bg-aura-espresso-light transition-colors flex items-center space-x-1"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs">
          {/* Column 1: Parfumerie */}
          <div>
            <h5 className="font-cinzel text-xs tracking-widest uppercase font-semibold text-aura-espresso mb-4">
              Collections
            </h5>
            <ul className="space-y-2 text-aura-grey">
              <li><Link to="/shop" className="hover:text-aura-gold transition-colors">Shop All Fragrances</Link></li>
              <li><Link to="/category/men" className="hover:text-aura-gold transition-colors">Men's Haute Parfumerie</Link></li>
              <li><Link to="/category/women" className="hover:text-aura-gold transition-colors">Women's Collection</Link></li>
              <li><Link to="/category/unisex" className="hover:text-aura-gold transition-colors">Unisex Signatures</Link></li>
              <li><Link to="/collection/original-collection" className="hover:text-aura-gold transition-colors">AURA Original Formulations</Link></li>
              <li><Link to="/collection/inspired-collection" className="hover:text-aura-gold transition-colors">Inspired Fragrance Interpretations</Link></li>
              <li><Link to="/category/gift-sets" className="hover:text-aura-gold transition-colors">Prestige Gift Coffrets</Link></li>
            </ul>
          </div>

          {/* Column 2: Fragrance Discovery */}
          <div>
            <h5 className="font-cinzel text-xs tracking-widest uppercase font-semibold text-aura-espresso mb-4">
              Discovery
            </h5>
            <ul className="space-y-2 text-aura-grey">
              <li><Link to="/fragrance-finder" className="hover:text-aura-gold transition-colors font-medium text-aura-gold-dark">Fragrance Finder Quiz</Link></li>
              <li><Link to="/collection/new-arrivals" className="hover:text-aura-gold transition-colors">New Season Arrivals</Link></li>
              <li><Link to="/collection/bestsellers" className="hover:text-aura-gold transition-colors">Bestselling Scents</Link></li>
              <li><Link to="/our-story" className="hover:text-aura-gold transition-colors">Our Olfactory Atelier</Link></li>
              <li><Link to="/track-order" className="hover:text-aura-gold transition-colors">Track Demo Order</Link></li>
            </ul>
          </div>

          {/* Column 3: Client Care */}
          <div>
            <h5 className="font-cinzel text-xs tracking-widest uppercase font-semibold text-aura-espresso mb-4">
              Client Care
            </h5>
            <ul className="space-y-2 text-aura-grey">
              <li><Link to="/contact" className="hover:text-aura-gold transition-colors">Contact Atelier Concierge</Link></li>
              <li><Link to="/faq" className="hover:text-aura-gold transition-colors">Frequently Asked Questions</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-aura-gold transition-colors">Shipping & Delivery Policy</Link></li>
              <li><Link to="/returns-policy" className="hover:text-aura-gold transition-colors">Returns & Exchange Terms</Link></li>
              <li><Link to="/account" className="hover:text-aura-gold transition-colors">Customer Portal</Link></li>
            </ul>
          </div>

          {/* Column 4: Concierge & Policies */}
          <div>
            <h5 className="font-cinzel text-xs tracking-widest uppercase font-semibold text-aura-espresso mb-4">
              Direct Concierge
            </h5>
            <div className="space-y-3 text-aura-grey">
              <p className="text-[11px] leading-relaxed">
                Need guidance selecting your bespoke scent? Our fragrance sommeliers are available Mon–Sat.
              </p>

              <a
                href="#concierge-whatsapp"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Demo WhatsApp Concierge Placeholder: In production, this opens direct WhatsApp chat with AURA Fragrance Sommeliers (+91 98765 AURA1).');
                }}
                className="inline-flex items-center space-x-2 px-3 py-2 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-[11px]">Chat on WhatsApp (Demo)</span>
              </a>

              <div className="pt-2 text-[11px] space-y-1">
                <p>Email: <span className="font-mono text-aura-espresso">concierge@aurafragrance.demo</span></p>
                <p>Hours: 10:00 AM – 7:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-aura-beige/80 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-aura-grey gap-4">
          <p>
            © {new Date().getFullYear()} AURA Fragrances Atelier. All rights reserved. Built for Client Presentation & Evaluation.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/privacy-policy" className="hover:text-aura-espresso transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-aura-espresso transition-colors">Terms of Service</Link>
            <Link to="/shipping-policy" className="hover:text-aura-espresso transition-colors">Shipping</Link>
            <Link to="/returns-policy" className="hover:text-aura-espresso transition-colors">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
