import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Heart, ShoppingBag, Trash2, ArrowRight, User } from 'lucide-react';

export const WishlistPage = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleMoveToCart = (item) => {
    // Add item to cart and remove from wishlist
    addToCart(item, { size: '50ml', price: item.price }, 1, true);
    removeFromWishlist(item.id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <Breadcrumbs items={[{ label: 'Saved Wishlist' }]} />

      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-aura-beige pb-6 mb-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-aura-gold font-bold block mb-1">
            Personal Curator
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-aura-espresso font-medium">
            Saved Fragrance Wishlist ({wishlist.length})
          </h1>
        </div>

        {wishlist.length > 0 && (
          <button
            onClick={clearWishlist}
            className="mt-4 sm:mt-0 text-xs text-aura-grey hover:text-red-500 underline"
          >
            Clear Wishlist
          </button>
        )}
      </div>

      {/* Guest notice if not logged in */}
      {!isAuthenticated && (
        <div className="mb-8 p-4 bg-aura-cream/60 rounded-xl border border-aura-beige text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-aura-espresso">
            <User className="w-4 h-4 text-aura-gold flex-shrink-0" />
            <span>
              <strong>Browsing as Guest:</strong> Your wishlist is saved in local browser storage. Log in or create a demo account to synchronize across devices.
            </span>
          </div>
          <Link
            to="/login"
            className="px-4 py-1.5 bg-aura-espresso text-white rounded-lg text-center font-medium hover:bg-aura-espresso-light transition-colors whitespace-nowrap"
          >
            Demo Sign In
          </Link>
        </div>
      )}

      {wishlist.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-2xl border border-aura-beige p-8 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-aura-cream flex items-center justify-center mx-auto text-aura-gold mb-4">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-2xl font-medium text-aura-espresso mb-2">
            Your Wishlist is Empty
          </h2>
          <p className="text-xs text-aura-grey mb-6">
            Explore our curated perfumes and save your favorite flacons to review later.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-aura-beige p-4 flex flex-col justify-between shadow-xs hover:shadow-luxury transition-all"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-aura-cream/40 mb-3">
                <Link to={`/product/${item.slug}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2.5 right-2.5 p-2 rounded-full bg-white/90 text-aura-grey hover:text-red-500 shadow-sm transition-colors"
                  aria-label="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-aura-gold font-medium block">
                  {item.fragranceFamily}
                </span>
                <Link to={`/product/${item.slug}`}>
                  <h3 className="font-serif text-lg font-medium text-aura-espresso hover:text-aura-gold transition-colors truncate">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-xs text-aura-grey italic truncate mb-2">{item.subtitle}</p>

                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-base font-bold text-aura-espresso">
                    ₹{item.price.toLocaleString('en-IN')}
                  </span>
                  {item.comparePrice && (
                    <span className="text-xs text-aura-grey line-through">
                      ₹{item.comparePrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => handleMoveToCart(item)}
                className="w-full py-2.5 bg-aura-espresso hover:bg-aura-espresso-light text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-1.5 shadow-xs"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-aura-gold" />
                <span>Move to Bag</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
