import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import {
  CheckCircle2,
  Sparkles,
  Truck,
  ShieldAlert,
  ArrowRight,
  Package,
  Calendar,
  CreditCard,
  MapPin,
} from 'lucide-react';

export const OrderConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  useEffect(() => {
    // Fire celebratory confetti in champagne gold and ivory
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C6A46A', '#D9C29A', '#3B2D25', '#F8F5EF']
      });
    } catch {
      // safe fallback
    }
    window.scrollTo(0, 0);
  }, []);

  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="font-serif text-2xl text-aura-espresso mb-2">No active demo order found in session</h2>
        <p className="text-xs text-aura-grey mb-6">You can look up previous test orders via our Order Tracking tool.</p>
        <Link to="/track-order" className="px-6 py-2.5 bg-aura-espresso text-white text-xs font-semibold uppercase tracking-wider rounded-xl">
          Track Demo Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fadeIn">
      <Breadcrumbs items={[{ label: 'Confirmation' }]} />

      {/* Confirmation Header Card */}
      <div className="bg-white rounded-3xl border border-aura-beige shadow-luxury p-8 sm:p-12 text-center relative overflow-hidden mb-8">
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-aura-gold via-aura-cream to-aura-gold" />

        <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald-100">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-aura-gold/20 text-aura-gold-dark text-xs uppercase tracking-widest font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>DEMO ORDER CONFIRMED</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-aura-espresso font-medium mb-2">
          Thank You, {order.customer.name.split(' ')[0]}
        </h1>

        <p className="text-sm text-aura-grey max-w-md mx-auto mb-6">
          Your simulated bespoke fragrance order has been accepted and logged into our presentation atelier system.
        </p>

        {/* Evaluation Disclaimer Banner */}
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 text-xs max-w-xl mx-auto flex items-start space-x-2 text-left">
          <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Client Presentation Notice:</strong> This is a frontend demonstration. No real financial payment was taken and no physical delivery will be made.
          </span>
        </div>

        {/* Order Reference Number */}
        <div className="mt-8 p-4 bg-aura-ivory rounded-2xl border border-aura-beige inline-flex flex-col sm:flex-row items-center gap-4">
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-wider text-aura-grey block">
              Demo Order Reference
            </span>
            <span className="font-mono text-xl font-bold text-aura-espresso tracking-wider">
              {order.id}
            </span>
          </div>

          <div className="h-8 w-px bg-aura-beige hidden sm:block" />

          <div className="text-left">
            <span className="text-[10px] uppercase tracking-wider text-aura-grey block">
              Tracking Waybill
            </span>
            <span className="font-mono text-xs font-semibold text-aura-gold">
              {order.trackingNumber}
            </span>
          </div>
        </div>
      </div>

      {/* Order Details Breakdown */}
      <div className="bg-white rounded-3xl border border-aura-beige shadow-xs p-6 sm:p-10 space-y-8 mb-8">
        {/* Meta Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 border-b border-aura-beige text-xs">
          <div className="flex items-start space-x-3">
            <Calendar className="w-4 h-4 text-aura-gold mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-aura-grey block">Order Date & Time</span>
              <strong className="text-aura-espresso">
                {new Date(order.date).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
              </strong>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CreditCard className="w-4 h-4 text-aura-gold mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-aura-grey block">Payment Simulation</span>
              <strong className="text-aura-espresso">{order.paymentMethod}</strong>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Truck className="w-4 h-4 text-aura-gold mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-aura-grey block">Estimated Dispatch</span>
              <strong className="text-aura-espresso">{order.estimatedDelivery}</strong>
            </div>
          </div>
        </div>

        {/* Products Purchased */}
        <div>
          <h3 className="font-serif text-xl font-medium text-aura-espresso mb-4">
            Curated Flacons ({order.items.length})
          </h3>
          <div className="divide-y divide-aura-beige/60">
            {order.items.map((item, idx) => (
              <div key={idx} className="py-3 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-3">
                  <img src={item.image} alt={item.name} className="w-14 h-16 object-cover rounded-xl shadow-xs" />
                  <div>
                    <h4 className="font-serif text-base font-semibold text-aura-espresso">{item.name}</h4>
                    <p className="text-aura-grey">{item.size} • Qty {item.quantity}</p>
                  </div>
                </div>
                <span className="font-bold text-aura-espresso text-sm">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Address & Summary */}
        <div className="pt-6 border-t border-aura-beige grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
          <div>
            <h4 className="font-serif text-base font-medium text-aura-espresso mb-2 flex items-center">
              <MapPin className="w-4 h-4 text-aura-gold mr-1.5" />
              <span>Delivery Address</span>
            </h4>
            <div className="text-aura-grey space-y-0.5 pl-5">
              <p className="font-semibold text-aura-espresso">{order.shippingAddress.name}</p>
              <p>{order.shippingAddress.flat}</p>
              <p>{order.shippingAddress.street}</p>
              <p>{order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}</p>
              <p>Phone: {order.shippingAddress.phone}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif text-base font-medium text-aura-espresso mb-2">
              Payment Summary
            </h4>
            <div className="flex justify-between text-aura-grey">
              <span>Subtotal</span>
              <span className="text-aura-espresso font-semibold">₹{order.pricing.subtotal.toLocaleString('en-IN')}</span>
            </div>
            {order.pricing.discount > 0 && (
              <div className="flex justify-between text-emerald-700">
                <span>Discount ({order.pricing.couponApplied})</span>
                <span>-₹{order.pricing.discount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between text-aura-grey">
              <span>Delivery Service</span>
              <span className="text-aura-espresso font-semibold">
                {order.pricing.shipping === 0 ? 'Complimentary' : `₹${order.pricing.shipping}`}
              </span>
            </div>
            <div className="flex justify-between text-base font-bold text-aura-espresso pt-2 border-t border-aura-beige">
              <span>Grand Total</span>
              <span className="text-xl text-aura-gold">₹{order.pricing.total.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to={`/track-order?orderId=${order.id}`}
          className="w-full sm:w-auto px-8 py-3.5 bg-aura-espresso hover:bg-aura-espresso-light text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
        >
          <Package className="w-4 h-4 text-aura-gold" />
          <span>Track This Demo Order</span>
        </Link>

        <Link
          to="/shop"
          className="w-full sm:w-auto px-8 py-3.5 border border-aura-espresso text-aura-espresso hover:bg-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center space-x-2"
        >
          <span>Continue Discovering Fragrances</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
