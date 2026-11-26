import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';

export const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fadeIn space-y-10">
      <Breadcrumbs items={[{ label: 'Terms and Conditions' }]} />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl text-aura-espresso font-medium">
          Terms & Conditions
        </h1>
        <p className="text-xs text-aura-grey">
          Rules and stipulations governing our demonstration storefront.
        </p>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-aura-beige shadow-xs space-y-6 text-xs text-aura-espresso/80 leading-relaxed font-light">
        <h2 className="font-serif text-lg font-medium text-aura-espresso">1. Demonstration Disclaimer</h2>
        <p>
          AURA is presented as a high-fidelity e-commerce frontend prototype. All product names (e.g. Santal Ethereal, Velvet Oud Noir), prices, customer profiles, orders, and delivery simulations are fictional and intended for evaluation of design, user experience, and architecture.
        </p>

        <h2 className="font-serif text-lg font-medium text-aura-espresso">2. Independent Interpretations</h2>
        <p>
          Fragrances designated under the "Inspired Collection" are independent olfactory interpretations honoring legendary perfume genres. They carry no affiliation with, sponsorship from, or endorsement by any third-party fashion houses or trademark holders.
        </p>

        <h2 className="font-serif text-lg font-medium text-aura-espresso">3. Architecture and Backend Readiness</h2>
        <p>
          All mock services (authService, productService, cartService, orderService, trackingService) are engineered as independent modular abstractions, fully prepared for future integration with a Java Spring Boot and MySQL enterprise backend.
        </p>
      </div>
    </div>
  );
};
