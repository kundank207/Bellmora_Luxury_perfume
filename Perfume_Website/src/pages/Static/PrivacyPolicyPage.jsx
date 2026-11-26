import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';

export const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fadeIn space-y-10">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl text-aura-espresso font-medium">
          Privacy Policy
        </h1>
        <p className="text-xs text-aura-grey">
          Data transparency and privacy handling standards.
        </p>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-aura-beige shadow-xs space-y-6 text-xs text-aura-espresso/80 leading-relaxed font-light">
        <h2 className="font-serif text-lg font-medium text-aura-espresso">1. Overview and Demonstration Status</h2>
        <p>
          This website is a frontend simulation created for evaluation and client demonstration. It operates with client-side state and browser localStorage. No real banking details, passwords, or payment cards are stored or transmitted to external servers.
        </p>

        <h2 className="font-serif text-lg font-medium text-aura-espresso">2. Information Handled</h2>
        <p>
          Demo contact names, emails, and dummy delivery addresses entered during checkout are saved strictly in your current browser's local storage to enable the demonstration of order histories and address management.
        </p>

        <h2 className="font-serif text-lg font-medium text-aura-espresso">3. Clearing Stored Demonstration Data</h2>
        <p>
          You may reset or clear all demonstration data at any time via the "Reset Demo Data" option in the presentation controls or by clearing your browser storage.
        </p>
      </div>
    </div>
  );
};
