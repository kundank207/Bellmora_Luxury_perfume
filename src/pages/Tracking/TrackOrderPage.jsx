import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { trackingService } from '../../services/trackingService';
import { orderService } from '../../services/orderService';
import { useDemo } from '../../context/DemoContext';
import {
  Package,
  Search,
  Truck,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  Info,
  Calendar,
  MapPin,
  Check,
} from 'lucide-react';

export const TrackOrderPage = () => {
  const [searchParams] = useSearchParams();
  const { setIsDemoBarOpen } = useDemo();

  const [query, setQuery] = useState(searchParams.get('orderId') || '');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Initial lookup if orderId is in query param
  useEffect(() => {
    const paramId = searchParams.get('orderId');
    if (paramId) {
      setQuery(paramId);
      handleTrack(paramId);
    } else {
      // Default load first seeded demo order for instant client preview
      handleTrack('AUR-89241');
    }
  }, [searchParams]);

  const handleTrack = async (searchQuery) => {
    const q = searchQuery || query;
    if (!q.trim()) return;

    setLoading(true);
    setError('');
    try {
      const res = await trackingService.trackOrder(q);
      setOrder(res);
    } catch (err) {
      setError(err.message || 'No demonstration order matched.');
      setOrder(null);
    } finally {
      setLoading(false);
    }
  };

  const stages = [
    { name: 'Order Confirmed', label: 'Confirmed' },
    { name: 'Processing', label: 'Processing' },
    { name: 'Packed', label: 'Packed' },
    { name: 'Shipped', label: 'Shipped' },
    { name: 'Out for Delivery', label: 'Out for Delivery' },
    { name: 'Delivered', label: 'Delivered' }
  ];

  const getCurrentStageIndex = () => {
    if (!order) return 0;
    const idx = stages.findIndex((s) => s.name === order.status);
    return idx === -1 ? 0 : idx;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <Breadcrumbs items={[{ label: 'Track Order' }]} />

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-aura-gold/20 text-aura-gold-dark text-xs uppercase tracking-widest font-semibold mb-3">
          <Truck className="w-3.5 h-3.5" />
          <span>Real-Time Logistics Simulation</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-aura-espresso font-medium">
          Track Your Demo Fragrance Order
        </h1>
        <p className="text-xs text-aura-grey mt-2">
          Enter your order reference ID, email address, or try one of our seeded test cases below.
        </p>
      </div>

      {/* Lookup Bar */}
      <div className="bg-white p-6 rounded-3xl border border-aura-beige shadow-xs mb-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleTrack();
          }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-aura-grey absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. AUR-89241, AUR-92318, or elena.vance@aurafragrance.demo"
              className="w-full pl-10 pr-4 py-3 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso font-mono"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-aura-espresso text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-aura-espresso-light transition-colors shadow-sm"
          >
            {loading ? 'Consulting Dispatch...' : 'Track Dispatch'}
          </button>
        </form>

        {/* Seeded Quick Test Buttons for Evaluators */}
        <div className="mt-4 pt-3 border-t border-aura-beige/60 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[11px] text-aura-grey font-medium">Seed Test Cases:</span>
          {[
            { id: 'AUR-89241', label: 'AUR-89241 (Delivered)' },
            { id: 'AUR-92318', label: 'AUR-92318 (Shipped)' },
            { id: 'AUR-95104', label: 'AUR-95104 (Confirmed)' }
          ].map((sample) => (
            <button
              key={sample.id}
              onClick={() => {
                setQuery(sample.id);
                handleTrack(sample.id);
              }}
              className="px-2.5 py-1 bg-aura-cream hover:bg-aura-gold/20 text-aura-espresso text-[11px] font-mono rounded-lg border border-aura-beige transition-colors"
            >
              {sample.label}
            </button>
          ))}
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs">
            {error}
          </div>
        )}
      </div>

      {/* Active Order Details & Progress Timeline */}
      {order && (
        <div className="space-y-6">
          {/* Status Overview Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-aura-beige shadow-luxury space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-aura-beige pb-6">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-aura-gold font-bold block mb-1">
                  Waybill #{order.trackingNumber}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-aura-espresso">
                  Order {order.id}
                </h2>
                <p className="text-xs text-aura-grey mt-0.5">
                  Courier: <strong className="text-aura-espresso">{order.courier}</strong> • Method: {order.deliveryMethod}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-aura-cream text-aura-espresso border border-aura-gold/40">
                  {order.status}
                </span>
                <span className="block text-xs text-aura-grey mt-1">{order.estimatedDelivery}</span>
              </div>
            </div>

            {/* Interactive Timeline Stepper */}
            <div className="py-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-8 text-center sm:text-left">
                Fulfillment Milestones
              </h3>

              {/* Step indicator bar */}
              <div className="relative">
                {/* Horizontal line */}
                <div className="hidden sm:block absolute top-4 left-6 right-6 h-1 bg-aura-beige z-0" />
                <div
                  className="hidden sm:block absolute top-4 left-6 h-1 bg-aura-gold z-0 transition-all duration-500"
                  style={{ width: `${(getCurrentStageIndex() / (stages.length - 1)) * 90}%` }}
                />

                <div className="grid grid-cols-2 sm:grid-cols-6 gap-6 relative z-10">
                  {stages.map((stg, idx) => {
                    const isDone = idx <= getCurrentStageIndex();
                    const isCurrent = idx === getCurrentStageIndex();
                    return (
                      <div key={stg.name} className="flex flex-col items-center text-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-sm mb-2 ${
                            isCurrent
                              ? 'bg-aura-gold text-white ring-4 ring-aura-gold/30 scale-110'
                              : isDone
                              ? 'bg-aura-espresso text-white'
                              : 'bg-white border-2 border-aura-beige text-aura-grey'
                          }`}
                        >
                          {isDone ? <Check className="w-4 h-4" /> : idx + 1}
                        </div>
                        <span className={`text-[11px] font-semibold ${isCurrent ? 'text-aura-gold' : isDone ? 'text-aura-espresso' : 'text-aura-grey'}`}>
                          {stg.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Detailed Timeline Events */}
            <div className="pt-6 border-t border-aura-beige">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-aura-espresso mb-4">
                Milestone Activity Log
              </h4>
              <div className="space-y-4">
                {order.timeline.map((event, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs">
                    <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${event.completed ? 'bg-aura-gold' : 'bg-aura-beige'}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <strong className="text-aura-espresso font-semibold">{event.stage}</strong>
                        <span className="text-[11px] text-aura-grey font-mono">{event.time}</span>
                      </div>
                      <p className="text-aura-grey text-[11px] mt-0.5">{event.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage simulation switcher button */}
            <div className="pt-4 border-t border-aura-beige flex flex-col sm:flex-row items-center justify-between gap-3 bg-aura-ivory p-4 rounded-2xl">
              <div className="flex items-center space-x-2 text-xs text-aura-grey">
                <Sparkles className="w-4 h-4 text-aura-gold flex-shrink-0" />
                <span>Client evaluation: change this order's stage from presentation controls.</span>
              </div>
              <button
                onClick={() => setIsDemoBarOpen(true)}
                className="px-4 py-2 bg-aura-gold text-aura-espresso text-xs font-semibold rounded-lg hover:bg-aura-gold-light transition-colors shadow-xs whitespace-nowrap"
              >
                Open Demo Stage Controller
              </button>
            </div>
          </div>

          {/* Delivery & Items Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-aura-beige shadow-xs text-xs space-y-2">
              <h4 className="font-serif text-base font-semibold text-aura-espresso mb-2 flex items-center">
                <MapPin className="w-4 h-4 text-aura-gold mr-1.5" />
                <span>Recipient Destination</span>
              </h4>
              <p className="font-semibold text-aura-espresso">{order.shippingAddress.name}</p>
              <p className="text-aura-grey">{order.shippingAddress.flat}, {order.shippingAddress.street}</p>
              <p className="text-aura-grey">{order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}</p>
              <p className="text-aura-grey">Contact: {order.shippingAddress.phone}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-aura-beige shadow-xs text-xs space-y-3">
              <h4 className="font-serif text-base font-semibold text-aura-espresso mb-2 flex items-center">
                <Package className="w-4 h-4 text-aura-gold mr-1.5" />
                <span>Package Contents ({order.items.length})</span>
              </h4>
              <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="font-medium text-aura-espresso truncate mr-2">
                      {item.name} ({item.size}) × {item.quantity}
                    </span>
                    <span className="font-semibold text-aura-espresso flex-shrink-0">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-aura-beige flex justify-between font-bold text-aura-espresso">
                <span>Total Paid (Simulated)</span>
                <span className="text-aura-gold text-sm">₹{order.pricing.total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
