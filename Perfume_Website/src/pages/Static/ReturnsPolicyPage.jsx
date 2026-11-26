import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { RotateCcw, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ReturnsPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fadeIn space-y-10">
      <Breadcrumbs items={[{ label: 'Returns & Refund Policy' }]} />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-aura-gold font-bold block">
          Client Guarantee
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-aura-espresso font-medium">
          Returns & Refund Policy
        </h1>
        <p className="text-xs text-aura-grey">
          Our commitment to your complete olfactory satisfaction.
        </p>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-aura-beige shadow-xs space-y-8 text-xs text-aura-espresso/80 leading-relaxed font-light">
        <div className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-aura-espresso">
            1. The "Try Before You Break the Seal" Guarantee
          </h2>
          <p>
            Fragrance is an intensely personal sensory encounter. To ensure you love your selection without risk, every 50ml and 100ml flacon arrives with a complimentary 2ml sample vial of the identical scent.
          </p>
          <p>
            We invite you to test the vial on your pulse points. If the scent does not harmonize with your chemistry, you may return the unopened, sealed master box within 7 calendar days for an exchange or full refund.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-aura-espresso">
            2. Conditions for Return Eligibility
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-aura-grey">
            <li>The master outer presentation box must have its cellophane and tamper seal unbroken.</li>
            <li>Return requests must be initiated within 7 days of verified parcel delivery.</li>
            <li>Custom Discovery Sets and engraved bespoke flacons are non-returnable unless defective.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-aura-espresso">
            3. Reverse Pickup & Refund Processing
          </h2>
          <p>
            Our concierge will arrange a complimentary reverse courier pickup from your address. Once the flacon arrives back at our laboratory and passes inspection, the refund is credited back to your original source within 3-5 business days.
          </p>
        </div>

        <div className="p-4 bg-aura-ivory rounded-2xl border border-aura-beige text-xs text-aura-grey">
          <strong>Demonstration Note:</strong> This policy outlines the realistic customer policy for this simulated luxury store.
        </div>
      </div>
    </div>
  );
};
