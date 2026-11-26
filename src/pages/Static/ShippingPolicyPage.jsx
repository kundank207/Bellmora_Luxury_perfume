import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Truck, ShieldCheck, Clock, Package } from 'lucide-react';

export const ShippingPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fadeIn space-y-10">
      <Breadcrumbs items={[{ label: 'Shipping & Delivery Policy' }]} />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-aura-gold font-bold block">
          Client Logistics
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-aura-espresso font-medium">
          Shipping & Delivery Policy
        </h1>
        <p className="text-xs text-aura-grey">
          Temperature-controlled, white-glove courier dispatch across all territories.
        </p>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-aura-beige shadow-xs space-y-8 text-xs text-aura-espresso/80 leading-relaxed font-light">
        <div className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-aura-espresso">
            1. Complimentary White-Glove Shipping Threshold
          </h2>
          <p>
            BELLMORA LUXURY provides complimentary insured standard delivery across all pin-codes in India for orders valued at ₹2,500 or higher. For orders below this threshold, a standard courier convenience fee of ₹199 applies.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-aura-espresso">
            2. Transit Timelines & Metro Delivery
          </h2>
          <p>
            Standard deliveries typically arrive within 3 to 5 business days. For urgent gifting, Express Atelier Delivery delivers within 24 to 48 hours in tier-1 metropolitan cities (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, and Kolkata).
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-aura-espresso">
            3. Temperature-Controlled Flacon Packaging
          </h2>
          <p>
            Because high-concentration extrait de parfum contains delicate natural floral absolutes and essential oils sensitive to extreme heat, every parcel is dispatched in insulated velvet-lined packaging to protect the olfactory notes during air and road transit.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-aura-espresso">
            4. Real-Time Tracking Dispatches
          </h2>
          <p>
            Upon dispatch from our atelier, an automated tracking reference (Waybill) is assigned. Customers may monitor fulfillment milestones directly through our dedicated Order Tracking portal.
          </p>
        </div>

        <div className="p-4 bg-aura-ivory rounded-2xl border border-aura-beige text-xs text-aura-grey">
          <strong>Demonstration Note:</strong> All shipment references and delivery times shown on this evaluation site are simulated for frontend demonstration.
        </div>
      </div>
    </div>
  );
};
