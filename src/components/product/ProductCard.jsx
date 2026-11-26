import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { ProductQuickViewModal } from './ProductQuickViewModal';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return null;

  const inWishlist = isInWishlist(product.id);
  const defaultSize = product.sizes && product.sizes[0];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, defaultSize, 1, false);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickViewClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewOpen(true);
  };

  return (
    <>
      <div className="group relative bg-white rounded-2xl border border-aura-beige/80 hover:border-aura-gold/60 p-3 sm:p-4 transition-all duration-300 hover:shadow-luxury-hover flex flex-col justify-between">
        {/* Top Image Container */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-aura-cream/40 mb-3.5">
          <Link to={`/product/${product.slug}`} className="block w-full h-full">
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
            {product.isBestseller && (
              <span className="px-2 py-0.5 bg-aura-espresso text-white text-[9px] uppercase tracking-wider font-semibold rounded shadow-xs">
                Bestseller
              </span>
            )}
            {product.isNewArrival && (
              <span className="px-2 py-0.5 bg-aura-gold text-white text-[9px] uppercase tracking-wider font-semibold rounded shadow-xs">
                New
              </span>
            )}
            {product.collectionType === 'inspired' && (
              <span className="px-2 py-0.5 bg-white/90 backdrop-blur-xs text-aura-grey text-[9px] uppercase tracking-wider font-medium rounded border border-aura-beige">
                Inspired
              </span>
            )}
          </div>

          {/* Wishlist and Quick View floating buttons */}
          <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={handleWishlistClick}
              className={`p-2 rounded-full shadow-md backdrop-blur-xs transition-colors ${
                inWishlist
                  ? 'bg-red-50 text-red-500'
                  : 'bg-white/90 text-aura-espresso hover:text-red-500 hover:bg-white'
              }`}
              aria-label="Add to Wishlist"
            >
              <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={handleQuickViewClick}
              className="p-2 rounded-full bg-white/90 text-aura-espresso hover:text-aura-gold hover:bg-white shadow-md backdrop-blur-xs transition-colors"
              aria-label="Quick View"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Add overlay button on hover */}
          <div className="absolute inset-x-2.5 bottom-2.5 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={handleQuickAdd}
              className="w-full py-2.5 bg-aura-espresso/95 hover:bg-aura-espresso text-white text-[11px] font-semibold tracking-wider uppercase rounded-lg shadow-lg backdrop-blur-xs transition-all flex items-center justify-center space-x-1.5"
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Added to Bag</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-aura-gold" />
                  <span>Quick Add • {defaultSize?.size}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-aura-grey mb-1">
              <span className="uppercase tracking-wider font-medium text-aura-gold-dark">
                {product.fragranceFamily}
              </span>
              <span className="capitalize">{product.category}</span>
            </div>

            <Link to={`/product/${product.slug}`} className="block group-hover:text-aura-gold transition-colors">
              <h3 className="font-serif text-lg sm:text-xl font-medium text-aura-espresso line-clamp-1">
                {product.name}
              </h3>
            </Link>

            <p className="text-[11px] text-aura-grey line-clamp-1 italic mb-2">
              {product.subtitle}
            </p>
          </div>

          {/* Pricing & Mobile Add */}
          <div className="pt-2 border-t border-aura-beige/50 flex items-center justify-between">
            <div>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-sm sm:text-base font-bold text-aura-espresso">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.comparePrice && (
                  <span className="text-xs text-aura-grey line-through">
                    ₹{product.comparePrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-aura-grey block">
                {defaultSize?.size} flacon
              </span>
            </div>

            {/* Mobile-only Quick Add icon */}
            <button
              onClick={handleQuickAdd}
              className="sm:hidden p-2 rounded-lg bg-aura-cream text-aura-espresso hover:bg-aura-gold hover:text-white transition-colors"
              aria-label="Add to Cart"
            >
              {justAdded ? <Check className="w-4 h-4 text-emerald-600" /> : <ShoppingBag className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={product}
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  );
};
