import React, { createContext, useContext, useState, useEffect } from 'react';
import { wishlistService } from '../services/wishlistService';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(wishlistService.getWishlist());

  useEffect(() => {
    const handleWishlistChange = (e) => {
      setWishlist(e.detail);
    };
    window.addEventListener('aura-wishlist-updated', handleWishlistChange);
    return () => window.removeEventListener('aura-wishlist-updated', handleWishlistChange);
  }, []);

  const toggleWishlist = (product) => {
    return wishlistService.toggleWishlist(product);
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const removeFromWishlist = (productId) => {
    return wishlistService.removeFromWishlist(productId);
  };

  const clearWishlist = () => {
    wishlistService.clearWishlist();
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount: wishlist.length,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
