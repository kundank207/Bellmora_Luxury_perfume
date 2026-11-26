import React, { createContext, useContext, useState } from 'react';
import { orderService } from '../services/orderService';
import { cartService } from '../services/cartService';
import { wishlistService } from '../services/wishlistService';

const DemoContext = createContext();

export const DemoProvider = ({ children }) => {
  const [isDemoBarOpen, setIsDemoBarOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const showDemoNotice = (msg) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const resetAllDemoData = () => {
    orderService.resetDemoOrders();
    cartService.clearCart();
    wishlistService.clearWishlist();
    localStorage.removeItem('aura_demo_saved_addresses');
    localStorage.removeItem('aura_demo_current_user');
    window.location.reload();
  };

  return (
    <DemoContext.Provider
      value={{
        isDemoBarOpen,
        setIsDemoBarOpen,
        notification,
        showDemoNotice,
        resetAllDemoData,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = () => useContext(DemoContext);
