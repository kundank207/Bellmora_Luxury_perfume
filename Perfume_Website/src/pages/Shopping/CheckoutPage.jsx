import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { orderService } from '../../services/orderService';
import { addressService } from '../../services/addressService';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import {
  ShieldAlert,
  ShieldCheck,
  Truck,
  CreditCard,
  QrCode,
  Banknote,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
  Info,
} from 'lucide-react';

export const CheckoutPage = () => {
  const { cart, totals, clearCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
    }
  }, [cart, navigate]);

  // Section A: Contact Info
  const [contact, setContact] = useState({
    fullName: currentUser?.fullName || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || '',
  });

  // Section B: Delivery Address
  const [address, setAddress] = useState({
    flat: '',
    street: '',
    landmark: '',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400026',
    type: 'Home',
    saveAddress: true,
  });

  // Load saved address if logged in
  useEffect(() => {
    if (currentUser) {
      const saved = addressService.getAddresses(currentUser.id);
      if (saved && saved.length > 0) {
        const def = saved.find((a) => a.isDefault) || saved[0];
        setAddress((prev) => ({
          ...prev,
          flat: def.flat || '',
          street: def.street || '',
          landmark: def.landmark || '',
          city: def.city || 'Mumbai',
          state: def.state || 'Maharashtra',
          pincode: def.pincode || '400026',
          type: def.type || 'Home',
        }));
      }
    }
  }, [currentUser]);

  // Section C: Delivery Method
  const [deliveryMethod, setDeliveryMethod] = useState('standard');

  // Section D: Payment Method (Simulated Demo Only)
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState('');

  const deliveryOptions = [
    {
      id: 'standard',
      name: 'Standard White-Glove Courier',
      eta: '3 - 5 Business Days (Sample)',
      cost: 0,
      description: 'Temperature-controlled luxury dispatch with sample fragrance vials.'
    },
    {
      id: 'express',
      name: 'Express Atelier Courier (Demo)',
      eta: '1 - 2 Business Days (Sample)',
      cost: 150,
      description: 'Expedited air freight courier with dedicated delivery confirmation.'
    }
  ];

  const paymentOptions = [
    {
      id: 'cod',
      title: 'Cash on Delivery (Simulated Demo)',
      icon: Banknote,
      badge: 'Pay Upon Arrival',
      note: 'Simulated Cash on Delivery. Pay cash or UPI upon package handover to the courier.'
    },
    {
      id: 'upi',
      title: 'UPI Instant Payment (Demo Flow)',
      icon: QrCode,
      badge: 'Simulated Instant UPI',
      note: 'Demo mode: No real UPI application or PIN will ever be requested. 1-click simulated authorization.'
    },
    {
      id: 'card',
      title: 'Credit / Debit Card (Simulated Demo)',
      icon: CreditCard,
      badge: 'Simulated Card',
      note: 'Demo mode: We NEVER ask for actual card numbers, CVVs, or OTPs. Simulated sandbox authorization only.'
    },
    {
      id: 'netbanking',
      title: 'Prepaid NetBanking (Demo Only)',
      icon: Lock,
      badge: 'Simulated NetBanking',
      note: 'Simulated institutional direct debit demo flow.'
    }
  ];

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setValidationError('');

    // Validations
    if (!contact.fullName.trim()) return setValidationError('Please enter your full name.');
    if (!contact.email.trim() || !contact.email.includes('@')) return setValidationError('Please provide a valid email address for demo tracking dispatches.');
    if (!contact.phone.trim() || contact.phone.length < 8) return setValidationError('Please provide a valid phone number.');
    if (!address.flat.trim() || !address.street.trim()) return setValidationError('Please enter your complete street and residence details.');
    if (!address.pincode.trim() || address.pincode.length < 5) return setValidationError('Please provide a valid postal PIN code.');

    setLoading(true);

    const selectedDelivery = deliveryOptions.find((d) => d.id === deliveryMethod);
    const selectedPay = paymentOptions.find((p) => p.id === paymentMethod);

    const adjustedShipping = totals.shipping + (selectedDelivery?.cost || 0);
    const adjustedTotal = Math.max(0, totals.subtotal - totals.discount + adjustedShipping);

    try {
      // Save address if checked
      if (address.saveAddress && currentUser) {
        await addressService.addAddress(currentUser.id, {
          name: contact.fullName,
          phone: contact.phone,
          flat: address.flat,
          street: address.street,
          landmark: address.landmark,
          city: address.city,
          state: address.state,
          pincode: address.pincode,
          type: address.type,
          isDefault: true,
        });
      }

      // Create simulated demo order
      const newOrder = await orderService.createDemoOrder({
        customer: {
          name: contact.fullName,
          email: contact.email,
          phone: contact.phone,
        },
        items: cart,
        pricing: {
          subtotal: totals.subtotal,
          discount: totals.discount,
          couponApplied: totals.coupon?.code || null,
          shipping: adjustedShipping,
          total: adjustedTotal,
        },
        shippingAddress: {
          name: contact.fullName,
          phone: contact.phone,
          flat: address.flat,
          street: address.street,
          landmark: address.landmark,
          city: address.city,
          state: address.state,
          pincode: address.pincode,
          type: address.type,
        },
        deliveryMethod: selectedDelivery.name,
        paymentMethod: selectedPay.title,
      });

      // Clear shopping cart
      clearCart();

      // Navigate to order confirmation with state
      navigate('/order-confirmation', { state: { order: newOrder } });
    } catch (err) {
      setValidationError(err.message || 'Error recording demo order.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <Breadcrumbs items={[{ label: 'Cart', href: '/cart' }, { label: 'Checkout' }]} />

      {/* Safety Notice & Demo Disclaimer Banner */}
      <div className="mb-8 p-4 bg-amber-50 border border-amber-300 rounded-2xl text-amber-900 text-xs flex items-start space-x-3 shadow-xs">
        <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-sm">Simulated Frontend Evaluation Checkout</p>
          <p className="leading-relaxed">
            This checkout simulates the complete customer purchasing experience for client evaluation.
            <strong>No actual financial transactions will occur.</strong> We will never ask for your real debit/credit card numbers, CVVs, UPI PINs, or banking passwords.
          </p>
        </div>
      </div>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Form Sections */}
        <div className="lg:col-span-8 space-y-6">
          {/* SECTION A: Contact Information */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-aura-beige shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-aura-beige pb-3">
              <h2 className="font-serif text-xl font-medium text-aura-espresso flex items-center">
                <span className="w-6 h-6 rounded-full bg-aura-espresso text-white text-xs flex items-center justify-center mr-2">1</span>
                <span>Contact Details</span>
              </h2>
              {currentUser && (
                <span className="text-[11px] text-aura-gold font-medium">
                  Logged in as {currentUser.fullName}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-aura-espresso uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={contact.fullName}
                  onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
                  placeholder="e.g. Elena Vance"
                  className="w-full px-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-aura-espresso uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  placeholder="elena.vance@example.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-aura-espresso uppercase tracking-wider mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
                />
              </div>
            </div>
          </div>

          {/* SECTION B: Delivery Address */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-aura-beige shadow-xs space-y-4">
            <div className="border-b border-aura-beige pb-3">
              <h2 className="font-serif text-xl font-medium text-aura-espresso flex items-center">
                <span className="w-6 h-6 rounded-full bg-aura-espresso text-white text-xs flex items-center justify-center mr-2">2</span>
                <span>Delivery Address</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-aura-espresso uppercase tracking-wider mb-1">
                  Flat / House / Suite Number & Building *
                </label>
                <input
                  type="text"
                  required
                  value={address.flat}
                  onChange={(e) => setAddress({ ...address, flat: e.target.value })}
                  placeholder="e.g. Penthouse 14B, Royal Palms Residences"
                  className="w-full px-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-aura-espresso uppercase tracking-wider mb-1">
                  Street, Colony & Area *
                </label>
                <input
                  type="text"
                  required
                  value={address.street}
                  onChange={(e) => setAddress({ ...address, street: e.target.value })}
                  placeholder="Altamount Road, Cumballa Hill"
                  className="w-full px-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-aura-espresso uppercase tracking-wider mb-1">
                  Landmark (Optional)
                </label>
                <input
                  type="text"
                  value={address.landmark}
                  onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
                  placeholder="Opposite Heritage Botanical Garden"
                  className="w-full px-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-aura-espresso uppercase tracking-wider mb-1">
                  PIN Code *
                </label>
                <input
                  type="text"
                  required
                  value={address.pincode}
                  onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                  placeholder="400026"
                  className="w-full px-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-aura-espresso uppercase tracking-wider mb-1">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  placeholder="Mumbai"
                  className="w-full px-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-aura-espresso uppercase tracking-wider mb-1">
                  State *
                </label>
                <input
                  type="text"
                  required
                  value={address.state}
                  onChange={(e) => setAddress({ ...address, state: e.target.value })}
                  placeholder="Maharashtra"
                  className="w-full px-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex gap-4 text-xs">
                {['Home', 'Work'].map((type) => (
                  <label key={type} className="flex items-center space-x-1.5 cursor-pointer">
                    <input
                      type="radio"
                      checked={address.type === type}
                      onChange={() => setAddress({ ...address, type })}
                      className="accent-aura-gold"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>

              <label className="flex items-center space-x-2 text-xs text-aura-grey cursor-pointer">
                <input
                  type="checkbox"
                  checked={address.saveAddress}
                  onChange={(e) => setAddress({ ...address, saveAddress: e.target.checked })}
                  className="rounded text-aura-gold focus:ring-aura-gold"
                />
                <span>Save this address in client profile</span>
              </label>
            </div>
          </div>

          {/* SECTION C: Delivery Speed */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-aura-beige shadow-xs space-y-4">
            <div className="border-b border-aura-beige pb-3">
              <h2 className="font-serif text-xl font-medium text-aura-espresso flex items-center">
                <span className="w-6 h-6 rounded-full bg-aura-espresso text-white text-xs flex items-center justify-center mr-2">3</span>
                <span>Delivery Method</span>
              </h2>
            </div>

            <div className="space-y-3">
              {deliveryOptions.map((opt) => (
                <label
                  key={opt.id}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    deliveryMethod === opt.id
                      ? 'border-aura-gold bg-aura-cream/50 ring-1 ring-aura-gold/40'
                      : 'border-aura-beige hover:border-aura-gold/50 bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="delivery_option"
                      checked={deliveryMethod === opt.id}
                      onChange={() => setDeliveryMethod(opt.id)}
                      className="accent-aura-gold"
                    />
                    <div>
                      <h4 className="text-xs font-semibold text-aura-espresso">{opt.name}</h4>
                      <p className="text-[11px] text-aura-grey">{opt.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-aura-espresso">
                      {opt.cost === 0 ? 'Complimentary' : `+₹${opt.cost}`}
                    </span>
                    <span className="block text-[10px] text-aura-gold font-medium">{opt.eta}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* SECTION D: Simulated Payment Method */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-aura-beige shadow-xs space-y-4">
            <div className="border-b border-aura-beige pb-3 flex items-center justify-between">
              <h2 className="font-serif text-xl font-medium text-aura-espresso flex items-center">
                <span className="w-6 h-6 rounded-full bg-aura-espresso text-white text-xs flex items-center justify-center mr-2">4</span>
                <span>Simulated Payment (Demo Only)</span>
              </h2>
              <span className="text-[10px] uppercase tracking-wider font-bold text-aura-gold px-2 py-0.5 rounded bg-aura-cream">
                Sandbox Mode
              </span>
            </div>

            <div className="space-y-3">
              {paymentOptions.map((opt) => {
                const Icon = opt.icon;
                return (
                  <label
                    key={opt.id}
                    className={`p-4 rounded-xl border flex items-start space-x-3 cursor-pointer transition-all ${
                      paymentMethod === opt.id
                        ? 'border-aura-gold bg-aura-cream/50 ring-1 ring-aura-gold/40'
                        : 'border-aura-beige hover:border-aura-gold/50 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment_option"
                      checked={paymentMethod === opt.id}
                      onChange={() => setPaymentMethod(opt.id)}
                      className="accent-aura-gold mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-aura-gold" />
                        <h4 className="text-xs font-semibold text-aura-espresso">{opt.title}</h4>
                      </div>
                      <p className="text-[11px] text-aura-grey mt-1">{opt.note}</p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary & Place Demo Order */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-aura-beige shadow-xs space-y-4 sticky top-28">
            <h3 className="font-serif text-xl font-medium text-aura-espresso border-b border-aura-beige pb-3">
              Order Review ({totals.totalItems} Items)
            </h3>

            {/* Compact items list */}
            <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
              {cart.map((item) => (
                <div key={item.key} className="flex items-center space-x-3 text-xs">
                  <img src={item.image} alt={item.name} className="w-12 h-14 object-cover rounded-lg flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-serif font-semibold text-aura-espresso truncate">{item.name}</p>
                    <p className="text-[11px] text-aura-grey">{item.size} • Qty {item.quantity}</p>
                  </div>
                  <span className="font-semibold text-aura-espresso">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="pt-3 border-t border-aura-beige space-y-2 text-xs">
              <div className="flex justify-between text-aura-grey">
                <span>Subtotal</span>
                <span className="font-semibold text-aura-espresso">₹{totals.subtotal.toLocaleString('en-IN')}</span>
              </div>

              {totals.discount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Privilege Discount ({totals.coupon?.code})</span>
                  <span>-₹{totals.discount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between text-aura-grey">
                <span>Courier Dispatch</span>
                <span className="font-semibold text-aura-espresso">
                  {deliveryMethod === 'express' ? '₹150' : totals.shipping === 0 ? 'Complimentary' : `₹${totals.shipping}`}
                </span>
              </div>

              <div className="flex justify-between text-base font-bold text-aura-espresso pt-3 border-t border-aura-beige">
                <span>Grand Total</span>
                <span className="text-xl text-aura-gold">
                  ₹{(
                    totals.subtotal -
                    totals.discount +
                    (deliveryMethod === 'express' ? 150 : totals.shipping)
                  ).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {validationError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs">
                {validationError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-aura-espresso hover:bg-aura-espresso-light text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-aura-gold" />
              <span>{loading ? 'Fulfilling Demo Order...' : 'Place Demo Order'}</span>
            </button>

            <div className="text-[10px] text-center text-aura-grey space-y-1 pt-1">
              <p className="flex items-center justify-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-aura-gold" />
                <span>Client evaluation prototype • Safe sandbox test</span>
              </p>
              <p>No credit cards charged. Generates live tracking reference.</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
