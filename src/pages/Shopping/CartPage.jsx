import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Tag,
  Check,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';

export const CartPage = () => {
  const {
    cart,
    totals,
    updateQuantity,
    updateItemSize,
    removeItem,
    clearCart,
    applyCoupon,
    removeCoupon,
    couponError,
    couponLoading,
  } = useCart();

  const navigate = useNavigate();
  const [couponInput, setCouponInput] = useState('');
  const [couponSuccessMsg, setCouponSuccessMsg] = useState(null);

  const handleApplyCoupon = async (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    try {
      const res = await applyCoupon(couponInput.trim());
      setCouponSuccessMsg(`Privilege coupon "${res.coupon.code}" successfully applied!`);
      setCouponInput('');
      setTimeout(() => setCouponSuccessMsg(null), 3000);
    } catch {
      // handled in context
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <Breadcrumbs items={[{ label: 'Shopping Bag' }]} />

      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-aura-beige pb-6 mb-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-aura-gold font-bold block mb-1">
            Order Review
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-aura-espresso font-medium">
            Your Fragrance Bag ({totals.totalItems})
          </h1>
        </div>

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="mt-4 sm:mt-0 text-xs text-aura-grey hover:text-red-500 underline flex items-center space-x-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Empty Shopping Bag</span>
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-2xl border border-aura-beige p-8 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-aura-cream flex items-center justify-center mx-auto text-aura-gold mb-4">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-2xl font-medium text-aura-espresso mb-2">
            Your Bag is Empty
          </h2>
          <p className="text-xs text-aura-grey mb-6">
            You have not selected any flacons yet. Discover our signature extrait de parfums.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-aura-espresso text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-aura-espresso-light transition-colors"
          >
            <span>Explore Fragrance Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {/* Free Shipping Progress Alert */}
            <div className="p-4 bg-white rounded-2xl border border-aura-beige shadow-xs">
              {totals.isFreeShippingQualified ? (
                <p className="text-xs text-emerald-800 font-semibold flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                  Your order qualifies for complimentary white-glove shipping!
                </p>
              ) : (
                <div className="space-y-2">
                  <p className="text-xs text-aura-espresso">
                    Add <strong className="text-aura-gold font-bold">₹{totals.amountNeededForFreeShipping.toLocaleString('en-IN')}</strong> more to qualify for complimentary shipping
                  </p>
                  <div className="w-full bg-aura-cream h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-aura-gold h-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (totals.subtotal / 2500) * 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Items */}
            <div className="bg-white rounded-2xl border border-aura-beige shadow-xs divide-y divide-aura-beige/60 overflow-hidden">
              {cart.map((item) => (
                <div key={item.key} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex items-center space-x-4 min-w-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded-xl shadow-xs flex-shrink-0"
                    />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-aura-gold font-semibold block">
                        {item.fragranceFamily}
                      </span>
                      <Link to={`/product/${item.slug}`}>
                        <h3 className="font-serif text-lg sm:text-xl font-medium text-aura-espresso hover:text-aura-gold transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-aura-grey">{item.size} Flacon</p>
                      <span className="text-xs font-semibold text-aura-espresso block mt-1 sm:hidden">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex items-center justify-between w-full sm:w-auto sm:space-x-8">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-aura-beige rounded-lg bg-aura-ivory">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="px-2.5 py-1 text-aura-grey hover:text-aura-espresso"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-semibold text-aura-espresso">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="px-2.5 py-1 text-aura-grey hover:text-aura-espresso"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="hidden sm:block text-right min-w-[90px]">
                      <span className="text-base font-bold text-aura-espresso block">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                      {item.comparePrice && (
                        <span className="text-xs text-aura-grey line-through block">
                          ₹{(item.comparePrice * item.quantity).toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.key)}
                      className="p-2 text-aura-grey hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/shop"
                className="text-xs font-semibold text-aura-espresso hover:text-aura-gold underline inline-flex items-center space-x-1"
              >
                <span>← Continue Discovering Fragrances</span>
              </Link>
            </div>
          </div>

          {/* Right: Order Summary & Coupon */}
          <div className="lg:col-span-4 space-y-4">
            {/* Coupon Box */}
            <div className="bg-white p-6 rounded-2xl border border-aura-beige shadow-xs space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-aura-espresso flex items-center">
                <Tag className="w-4 h-4 mr-1.5 text-aura-gold" />
                <span>Privilege Code</span>
              </h4>

              {totals.coupon ? (
                <div className="p-3 bg-aura-cream/60 rounded-xl border border-aura-gold/40 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-aura-espresso block">
                      Code {totals.coupon.code}
                    </span>
                    <span className="text-[11px] text-aura-grey block">{totals.coupon.description}</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-xs text-red-500 hover:underline font-medium ml-2"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="e.g. BELLMORA10 or LUXE15"
                      className="flex-1 px-3 py-2 text-xs bg-aura-ivory border border-aura-beige rounded-lg focus:outline-none focus:border-aura-gold uppercase"
                    />
                    <button
                      type="submit"
                      disabled={couponLoading || !couponInput.trim()}
                      className="px-4 py-2 bg-aura-espresso text-white text-xs font-semibold rounded-lg hover:bg-aura-espresso-light transition-colors"
                    >
                      {couponLoading ? 'Checking...' : 'Apply'}
                    </button>
                  </div>

                  {couponError && <p className="text-[11px] text-red-600">{couponError}</p>}
                  {couponSuccessMsg && <p className="text-[11px] text-emerald-600">{couponSuccessMsg}</p>}

                  {/* Suggest available demo coupons */}
                  <div className="pt-2 text-[11px] text-aura-grey">
                    <p className="font-medium text-aura-espresso mb-1">Available Client Codes:</p>
                    <div className="flex gap-2">
                      {['BELLMORA10', 'LUXE15', 'WELCOME20'].map((code) => (
                        <button
                          key={code}
                          type="button"
                          onClick={() => setCouponInput(code)}
                          className="px-2 py-0.5 bg-aura-cream rounded border border-aura-beige text-aura-gold font-mono font-medium hover:border-aura-gold"
                        >
                          {code}
                        </button>
                      ))}
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Totals Box */}
            <div className="bg-white p-6 rounded-2xl border border-aura-beige shadow-xs space-y-4">
              <h3 className="font-serif text-xl font-medium text-aura-espresso border-b border-aura-beige pb-3">
                Order Summary
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-aura-grey">
                  <span>Bag Subtotal</span>
                  <span className="font-semibold text-aura-espresso">
                    ₹{totals.subtotal.toLocaleString('en-IN')}
                  </span>
                </div>

                {totals.discount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Privilege Discount ({totals.coupon?.code})</span>
                    <span>-₹{totals.discount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between text-aura-grey">
                  <span>Standard Luxury Courier</span>
                  <span className="font-semibold text-aura-espresso">
                    {totals.shipping === 0 ? 'Complimentary' : `₹${totals.shipping}`}
                  </span>
                </div>

                <div className="flex justify-between text-base font-bold text-aura-espresso pt-3 border-t border-aura-beige">
                  <span>Grand Total</span>
                  <span className="text-xl text-aura-gold">₹{totals.total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full py-4 bg-aura-espresso hover:bg-aura-espresso-light text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-aura-gold" />
              </button>

              <div className="pt-2 text-[11px] text-center text-aura-grey space-y-1">
                <div className="flex items-center justify-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-aura-gold" />
                  <span>Simulated checkout for client evaluation</span>
                </div>
                <p>No real charges or payment accounts required.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
