import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const FAQPage = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What distinguishes BELLMORA LUXURY fragrances from regular designer perfumes?',
      a: 'All BELLMORA LUXURY creations are formulated at a rich 30% Extrait de Parfum concentration, compared to mainstream 10-15% Eau de Toilettes. This provides profound depth, exceptional longevity (10 to 14+ hours), and intimate skin intimacy without synthetic harshness.'
    },
    {
      q: 'What is the difference between BELLMORA Original Parfumerie and Inspired Fragrances?',
      a: 'BELLMORA Original formulations are our proprietary haute parfumerie recipes developed in-house from rare botanicals and resins. Our Inspired Fragrances are independent, respectful artistic interpretations paying tribute to legendary global scent profiles, crafted with equivalent oil concentration at accessible value.'
    },
    {
      q: 'How does your "Scent Guarantee" sampling work?',
      a: 'Every 50ml or 100ml full flacon order includes complimentary 2ml discovery vials of your chosen scent. We encourage you to test the vial on your skin first before opening the cellophane on the master presentation casket. If you decide the fragrance does not suit your personal taste, return the unopened full flacon for an exchange.'
    },
    {
      q: 'Are BELLMORA LUXURY fragrances certified and skin safe?',
      a: 'Yes. All formulations adhere strictly to the International Fragrance Association (IFRA) safety guidelines. Our products are 100% cruelty-free, vegan, phthalate-free, and formulated without parabens.'
    },
    {
      q: 'What are the delivery timelines and charges across India?',
      a: 'Orders above ₹2,500 qualify for complimentary white-glove shipping. Standard deliveries typically arrive in 3 to 5 business days, while Express Atelier transit delivers in 1 to 2 business days in major metros.'
    },
    {
      q: 'Is this website a live commercial store?',
      a: 'This website is a complete frontend demonstration built for client presentation and evaluation. No actual financial transactions take place, and orders are handled via simulated local storage states.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fadeIn space-y-10">
      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-aura-gold font-bold block">
          Client Knowledge Base
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-aura-espresso font-medium">
          Frequently Asked Questions
        </h1>
        <p className="text-xs text-aura-grey">
          Answers regarding our formulations, delivery processes, and olfactory standards.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-aura-beige shadow-xs divide-y divide-aura-beige/70 overflow-hidden">
        {faqs.map((faq, idx) => (
          <div key={idx} className="transition-colors">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full p-6 text-left flex items-center justify-between text-sm sm:text-base font-serif font-medium text-aura-espresso hover:text-aura-gold transition-colors"
            >
              <span>{faq.q}</span>
              <ChevronDown
                className={`w-4 h-4 text-aura-gold transition-transform duration-300 flex-shrink-0 ml-4 ${
                  openIdx === idx ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIdx === idx && (
              <div className="px-6 pb-6 text-xs text-aura-espresso/80 leading-relaxed font-light animate-fadeIn">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
