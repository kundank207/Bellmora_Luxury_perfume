import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export const MiniCartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cart, totals, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-aura-espresso/50 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-aura-ivory shadow-2xl flex flex-col border-l border-aura-gold/20">
          {/* Header */}
          <div className="p-5 border-b border-aura-beige flex items-center justify-between bg-white">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-aura-gold" />
              <h2 className="font-serif text-xl font-medium text-aura-espresso tracking-wide">
                Your Fragrance Bag
              </h2>
              <span className="text-xs bg-aura-cream px-2 py-0.5 rounded-full text-aura-espresso font-medium">
                {totals.totalItems}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-aura-grey hover:text-aura-espresso rounded-lg hover:bg-aura-cream transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Progress */}
          <div className="px-5 py-3 bg-aura-cream/70 border-b border-aura-beige text-xs">
            {totals.isFreeShippingQualified ? (
              <p className="text-emerald-800 font-medium flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                You have qualified for complimentary white-glove shipping!
              </p>
            ) : (
              <div>
                <p className="text-aura-espresso mb-1">
                  Add <span className="font-semibold text-aura-gold">₹{totals.amountNeededForFreeShipping.toLocaleString('en-IN')}</span> more to enjoy free delivery
                </p>
                <div className="w-full bg-white h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-aura-gold h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (totals.subtotal / 2500) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-aura-cream flex items-center justify-center text-aura-gold mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-medium text-aura-espresso mb-1">
                  Your bag is currently empty
                </h3>
                <p className="text-xs text-aura-grey max-w-xs mb-6">
                  Explore our curated extrait de parfums and find the signature scent that defines your aura.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/shop');
                  }}
                  className="px-6 py-2.5 bg-aura-espresso text-white text-xs uppercase tracking-widest font-medium rounded-lg hover:bg-aura-espresso-light transition-colors"
                >
                  Explore Fragrances
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.key}
                  className="flex space-x-4 p-3 bg-white rounded-xl border border-aura-beige/80 shadow-xs"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-18 h-20 w-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-base text-aura-espresso font-medium truncate pr-2">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-aura-grey hover:text-red-500 transition-colors p-0.5"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-aura-grey">
                        {item.size} • {item.fragranceFamily}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-aura-beige rounded-lg bg-aura-ivory">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="px-2 py-1 text-aura-grey hover:text-aura-espresso"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-aura-espresso">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="px-2 py-1 text-aura-grey hover:text-aura-espresso"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-semibold text-aura-espresso">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                        {item.comparePrice && (
                          <span className="block text-[10px] text-aura-grey line-through">
                            ₹{(item.comparePrice * item.quantity).toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Totals & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-aura-beige shadow-lg space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-aura-grey">
                  <span>Subtotal</span>
                  <span className="font-medium text-aura-espresso">₹{totals.subtotal.toLocaleString('en-IN')}</span>
                </div>
                {totals.discount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Privilege Discount ({totals.coupon?.code})</span>
                    <span>-₹{totals.discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-aura-grey">
                  <span>Shipping</span>
                  <span className="font-medium text-aura-espresso">
                    {totals.shipping === 0 ? 'Complimentary' : `₹${totals.shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-aura-espresso pt-2 border-t border-aura-beige">
                  <span>Estimated Total</span>
                  <span className="text-base text-aura-gold font-bold">₹{totals.total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/cart');
                  }}
                  className="py-2.5 px-3 border border-aura-espresso text-aura-espresso text-xs font-medium uppercase tracking-wider rounded-lg hover:bg-aura-cream transition-colors text-center"
                >
                  View Bag
                </button>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/checkout');
                  }}
                  className="py-2.5 px-3 bg-aura-espresso text-white text-xs font-medium uppercase tracking-wider rounded-lg hover:bg-aura-espresso-light transition-colors text-center flex items-center justify-center space-x-1"
                >
                  <span>Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[10px] text-center text-aura-grey flex items-center justify-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-aura-gold" />
                <span>Simulated secure demo checkout • No payment captured</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
