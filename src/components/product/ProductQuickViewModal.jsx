import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { X, Heart, ShoppingBag, Check, ArrowRight, Sparkles } from 'lucide-react';

export const ProductQuickViewModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState(product ? product.sizes[0] : null);
  const [addedNotice, setAddedNotice] = useState(false);

  if (!isOpen || !product) return null;

  const currentSize = selectedSize || product.sizes[0];
  const inWish = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, currentSize, 1, false);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-aura-espresso/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-aura-beige relative flex flex-col md:flex-row max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-aura-espresso shadow-sm transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="md:w-1/2 relative bg-aura-cream/50 p-6 flex items-center justify-center">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-72 md:h-96 object-cover rounded-xl shadow-md"
          />
          <div className="absolute top-8 left-8">
            <span className="px-3 py-1 bg-aura-ivory/90 backdrop-blur-xs text-[10px] uppercase tracking-wider font-semibold text-aura-gold rounded-full border border-aura-gold/30">
              {product.collectionType === 'original' ? 'BELLMORA Original' : 'Inspired Interpretation'}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between text-xs text-aura-grey mb-1">
              <span className="uppercase tracking-wider">{product.fragranceFamily} Fragrance</span>
              <span className="capitalize">{product.category}</span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-aura-espresso font-medium mb-1">
              {product.name}
            </h3>
            <p className="text-xs text-aura-grey italic mb-3">{product.subtitle}</p>

            <div className="flex items-baseline space-x-3 mb-4">
              <span className="text-2xl font-bold text-aura-espresso">
                ₹{currentSize.price.toLocaleString('en-IN')}
              </span>
              {currentSize.comparePrice && (
                <span className="text-sm text-aura-grey line-through">
                  ₹{currentSize.comparePrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <p className="text-xs text-aura-espresso/80 leading-relaxed mb-5">
              {product.shortDescription}
            </p>

            {/* Notes preview */}
            <div className="p-3 bg-aura-ivory rounded-xl border border-aura-beige/80 mb-5 text-xs space-y-1">
              <p><strong className="text-aura-espresso">Top:</strong> <span className="text-aura-grey">{product.notes.top.join(', ')}</span></p>
              <p><strong className="text-aura-espresso">Heart:</strong> <span className="text-aura-grey">{product.notes.heart.join(', ')}</span></p>
              <p><strong className="text-aura-espresso">Base:</strong> <span className="text-aura-grey">{product.notes.base.join(', ')}</span></p>
            </div>

            {/* Size selector */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-2">
                Select Flacon Size
              </label>
              <div className="flex gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s.size}
                    onClick={() => setSelectedSize(s)}
                    className={`flex-1 py-2 px-3 text-xs rounded-lg border text-center transition-all ${
                      currentSize.size === s.size
                        ? 'border-aura-gold bg-aura-cream font-bold text-aura-espresso shadow-xs'
                        : 'border-aura-beige text-aura-grey hover:border-aura-gold'
                    }`}
                  >
                    <div>{s.size}</div>
                    <div className="text-[11px] font-medium text-aura-gold-dark">₹{s.price.toLocaleString('en-IN')}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex gap-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3 bg-aura-espresso hover:bg-aura-espresso-light text-white text-xs font-medium uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
              >
                {addedNotice ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-aura-gold" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3 rounded-xl border transition-colors ${
                  inWish
                    ? 'border-red-300 bg-red-50 text-red-500'
                    : 'border-aura-beige hover:border-aura-gold text-aura-espresso'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${inWish ? 'fill-current' : ''}`} />
              </button>
            </div>

            <button
              onClick={() => {
                onClose();
                navigate(`/product/${product.slug}`);
              }}
              className="w-full text-center text-xs font-semibold text-aura-espresso hover:text-aura-gold underline pt-1 flex items-center justify-center space-x-1"
            >
              <span>View Full Olfactory Profile & Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
