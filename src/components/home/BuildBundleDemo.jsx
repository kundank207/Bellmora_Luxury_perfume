import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import { Gift, Check, Plus, ShoppingBag, Sparkles } from 'lucide-react';

export const BuildBundleDemo = () => {
  const { addToCart } = useCart();
  const [selectedBottles, setSelectedBottles] = useState([products[0], products[1], null]);
  const [bundleAdded, setBundleAdded] = useState(false);

  // Available candidate perfumes (50ml size)
  const candidateList = products.slice(0, 8);

  const handleSelectSlot = (bottle, slotIndex) => {
    const updated = [...selectedBottles];
    updated[slotIndex] = bottle;
    setSelectedBottles(updated);
  };

  const filledCount = selectedBottles.filter(Boolean).length;
  const isComplete = filledCount === 3;

  const rawTotal = selectedBottles.reduce((acc, p) => (p ? acc + p.price : acc), 0);
  const bundleDiscount = isComplete ? Math.round(rawTotal * 0.2) : 0;
  const finalBundlePrice = rawTotal - bundleDiscount;

  const handleAddBundleToCart = () => {
    if (!isComplete) return;

    // Create a special bundle item
    const bundleProduct = {
      id: `bundle_custom_${Date.now()}`,
      slug: 'bespoke-trio-coffret',
      name: 'Custom Bespoke Trio Coffret (3 x 50ml)',
      subtitle: `Includes: ${selectedBottles.map((b) => b.name).join(', ')}`,
      price: finalBundlePrice,
      comparePrice: rawTotal,
      fragranceFamily: 'Bespoke Assortment',
      images: [
        '/images/gift-sets/bellmora-prestige-coffret.jpg',
      ],
      collectionTitle: 'BELLMORA Bespoke Bundle Atelier',
      sizes: [{ size: '3 x 50ml Trio', price: finalBundlePrice, comparePrice: rawTotal }]
    };

    addToCart(bundleProduct, { size: '3 x 50ml Trio', price: finalBundlePrice }, 1, true);
    setBundleAdded(true);
    setTimeout(() => setBundleAdded(false), 2500);
  };

  return (
    <section className="py-20 bg-aura-cream/40 border-y border-aura-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-aura-gold/20 text-aura-gold-dark text-xs uppercase tracking-widest font-semibold mb-3">
            <Gift className="w-3.5 h-3.5" />
            <span>Interactive Bespoke Bar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-aura-espresso font-medium">
            Build Your Own Perfume Trio
          </h2>
          <p className="text-sm text-aura-grey mt-2">
            Curate any 3 signature fragrances (50ml flacons) and enjoy an exclusive 20% bundle privilege plus a complimentary velvet-lined presentation coffret.
          </p>
        </div>

        {/* 3 Selected Slots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {[0, 1, 2].map((slotIdx) => {
            const bottle = selectedBottles[slotIdx];
            return (
              <div
                key={slotIdx}
                className={`relative p-5 rounded-2xl border-2 transition-all flex flex-col items-center justify-between text-center min-h-[260px] ${
                  bottle
                    ? 'bg-white border-aura-gold/60 shadow-luxury'
                    : 'bg-aura-ivory/60 border-dashed border-aura-beige-dark/50'
                }`}
              >
                <div className="w-full flex justify-between items-center text-xs text-aura-grey mb-3">
                  <span className="font-semibold uppercase tracking-wider text-aura-gold">Slot {slotIdx + 1}</span>
                  {bottle && (
                    <button
                      onClick={() => handleSelectSlot(null, slotIdx)}
                      className="text-[11px] text-aura-grey hover:text-red-500 underline"
                    >
                      Remove
                    </button>
                  )}
                </div>

                {bottle ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={bottle.images[0]}
                      alt={bottle.name}
                      className="w-24 h-28 object-cover rounded-xl shadow-xs mb-3"
                    />
                    <h4 className="font-serif text-base font-semibold text-aura-espresso">{bottle.name}</h4>
                    <p className="text-xs text-aura-grey">{bottle.fragranceFamily} • 50ml</p>
                    <p className="text-xs font-semibold text-aura-espresso mt-1">₹{bottle.price.toLocaleString('en-IN')}</p>
                  </div>
                ) : (
                  <div className="my-auto flex flex-col items-center text-aura-grey">
                    <div className="w-12 h-12 rounded-full bg-aura-cream flex items-center justify-center mb-2">
                      <Plus className="w-5 h-5 text-aura-gold" />
                    </div>
                    <span className="text-xs font-medium">Select fragrance below</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Candidate picker list */}
        <div className="bg-white p-6 rounded-2xl border border-aura-beige shadow-sm max-w-4xl mx-auto mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-4">
            Click to assign a fragrance to your trio:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {candidateList.map((p) => {
              const isSelected = selectedBottles.some((b) => b?.id === p.id);
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    // Assign to first empty slot or slot 0
                    const firstEmpty = selectedBottles.findIndex((b) => !b);
                    handleSelectSlot(p, firstEmpty !== -1 ? firstEmpty : 2);
                  }}
                  className={`p-2.5 rounded-xl border text-left flex items-center space-x-2.5 transition-all ${
                    isSelected
                      ? 'border-aura-gold bg-aura-cream/60'
                      : 'border-aura-beige hover:border-aura-gold/50 bg-aura-ivory/30'
                  }`}
                >
                  <img src={p.images[0]} alt={p.name} className="w-10 h-10 object-cover rounded-lg flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-xs font-semibold text-aura-espresso truncate">{p.name}</p>
                    <p className="text-[10px] text-aura-grey">₹{p.price.toLocaleString('en-IN')}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bundle Summary & Add to Bag CTA */}
        <div className="max-w-xl mx-auto bg-aura-espresso text-white p-6 rounded-2xl shadow-xl border border-aura-gold/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-serif text-xl font-medium">Custom Trio Coffret</span>
              {isComplete && (
                <span className="px-2 py-0.5 bg-aura-gold text-aura-espresso text-[10px] font-bold uppercase rounded">
                  20% Off Applied
                </span>
              )}
            </div>
            <div className="flex items-baseline space-x-3 mt-1">
              <span className="text-2xl font-bold text-aura-gold">
                ₹{finalBundlePrice.toLocaleString('en-IN')}
              </span>
              {isComplete && (
                <span className="text-sm text-aura-beige/60 line-through">
                  ₹{rawTotal.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <p className="text-[11px] text-aura-beige/80 mt-0.5">
              {isComplete ? 'Complete with complimentary luxury velvet casket' : `Select ${3 - filledCount} more bottle(s) to complete`}
            </p>
          </div>

          <button
            onClick={handleAddBundleToCart}
            disabled={!isComplete}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
              isComplete
                ? 'bg-aura-gold text-aura-espresso hover:bg-aura-gold-light shadow-lg'
                : 'bg-white/10 text-white/40 cursor-not-allowed'
            }`}
          >
            {bundleAdded ? (
              <>
                <Check className="w-4 h-4 text-emerald-900" />
                <span>Bundle Added to Bag!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add Trio to Bag</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
