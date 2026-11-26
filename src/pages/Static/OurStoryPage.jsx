import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Sparkles, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export const OurStoryPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fadeIn space-y-16">
      <Breadcrumbs items={[{ label: 'Our Story' }]} />

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-aura-gold font-bold block">
          The Olfactory Atelier
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-aura-espresso font-medium leading-tight">
          The Art of Fragrance Born in Devotion
        </h1>
        <p className="font-serif italic text-lg sm:text-xl text-aura-gold-dark font-light">
          "A Fragrance That Defines You."
        </p>
        <p className="text-sm text-aura-grey leading-relaxed font-light">
          AURA was founded on a singular conviction: that true luxury in perfumery is not measured by celebrity endorsements or flamboyant bottles, but by the intimacy, concentration, and emotional truth of the fragrance itself.
        </p>
      </div>

      {/* Large Atelier Image */}
      <div className="rounded-3xl overflow-hidden shadow-luxury border border-aura-beige">
        <img
          src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1400&q=80"
          alt="AURA Fragrance Laboratory"
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Story Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-aura-espresso/80 leading-relaxed font-light">
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-medium text-aura-espresso">
            Artisanal Concentration (30% Extrait)
          </h2>
          <p>
            While mainstream designer fragrances are frequently diluted to Eau de Toilette (8-12%) or modest Eau de Parfum (15%), every AURA creation is formulated at a generous 30% pure perfume oil concentration.
          </p>
          <p>
            This high oil density ensures that our scents do not vanish within two hours. Instead, they gently marry with your skin’s natural heat, unveiling a complex, multi-layered trail that lasts 10 to 14 hours.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-medium text-aura-espresso">
            Two Complementary Olfactory Paths
          </h2>
          <p>
            Our catalogue celebrates two expressions of haute parfumerie:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-aura-grey">
            <li>
              <strong className="text-aura-espresso">AURA Original Parfumerie:</strong> Rare, bespoke creations crafted entirely from our in-house olfactory visions, such as <em>Santal Ethereal</em> and <em>Velvet Oud Noir</em>.
            </li>
            <li>
              <strong className="text-aura-espresso">Inspired Fragrance Interpretations:</strong> Independent, respectful artistic tributes celebrating the spirit of timeless world classics, crafted with equivalent oil concentration at accessible values.
            </li>
          </ul>
        </div>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
        <div className="p-6 bg-white rounded-2xl border border-aura-beige text-center space-y-2 shadow-xs">
          <Sparkles className="w-6 h-6 text-aura-gold mx-auto" />
          <h3 className="font-serif text-lg font-semibold text-aura-espresso">Sustainable Botanicals</h3>
          <p className="text-xs text-aura-grey leading-relaxed">
            Ethically harvested May rose from Grasse, sustainably farmed sandalwood from Mysore, and bourbon vanilla from Madagascar.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-aura-beige text-center space-y-2 shadow-xs">
          <Award className="w-6 h-6 text-aura-gold mx-auto" />
          <h3 className="font-serif text-lg font-semibold text-aura-espresso">60-Day Carboy Maceration</h3>
          <p className="text-xs text-aura-grey leading-relaxed">
            Every batch rests in darkened glass vessels for two months, allowing volatile floral resins to fuse and mature naturally.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-aura-beige text-center space-y-2 shadow-xs">
          <ShieldCheck className="w-6 h-6 text-aura-gold mx-auto" />
          <h3 className="font-serif text-lg font-semibold text-aura-espresso">IFRA Certified & Cruelty-Free</h3>
          <p className="text-xs text-aura-grey leading-relaxed">
            100% cruelty-free, vegan formulation compliant with International Fragrance Association dermatological safety standards.
          </p>
        </div>
      </div>
    </div>
  );
};
