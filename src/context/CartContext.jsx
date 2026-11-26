import React, { createContext, useContext, useState, useEffect } from 'react';
import { cartService } from '../services/cartService';
import { couponService } from '../services/couponService';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartService.getCart());
  const [totals, setTotals] = useState(cartService.getTotals());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponError, setCouponError] = useState(null);
  const [couponLoading, setCouponLoading] = useState(false);

  useEffect(() => {
    const handleCartUpdate = (e) => {
      setCart(e.detail.cart);
      setTotals(e.detail.totals);
    };
    window.addEventListener('aura-cart-updated', handleCartUpdate);
    return () => window.removeEventListener('aura-cart-updated', handleCartUpdate);
  }, []);

  const addToCart = (product, selectedSize = null, quantity = 1, openDrawer = true) => {
    cartService.addToCart(product, selectedSize, quantity);
    if (openDrawer) {
      setIsCartOpen(true);
    }
  };

  const updateQuantity = (key, quantity) => {
    cartService.updateQuantity(key, quantity);
  };

  const updateItemSize = (key, product, newSizeObj) => {
    cartService.updateItemSize(key, product, newSizeObj);
  };

  const removeItem = (key) => {
    cartService.removeItem(key);
  };

  const clearCart = () => {
    cartService.clearCart();
  };

  const applyCoupon = async (code) => {
    setCouponLoading(true);
    setCouponError(null);
    try {
      const res = await couponService.applyCoupon(code, totals.subtotal);
      cartService.setActiveCoupon(res.coupon);
      return res;
    } catch (err) {
      setCouponError(err.message);
      throw err;
    } finally {
      setCouponLoading(false);
    }
  };

  const removeCoupon = () => {
    cartService.setActiveCoupon(null);
    setCouponError(null);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totals,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        updateItemSize,
        removeItem,
        clearCart,
        applyCoupon,
        removeCoupon,
        couponError,
        couponLoading,
        totalItemsCount: totals.totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
