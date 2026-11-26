import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { useAuth } from '../../context/AuthContext';
import { Sparkles, ShieldCheck, User } from 'lucide-react';

export const DemoPresentationBanner = () => {
  const { setIsDemoBarOpen, notification } = useDemo();
  const { currentUser, quickDemoLogin } = useAuth();

  const getFirstName = () => {
    if (!currentUser || !currentUser.fullName) return 'Connoisseur';
    try {
      return currentUser.fullName.split(' ')[0] || 'Connoisseur';
    } catch {
      return 'Connoisseur';
    }
  };

  return (
    <>
      {notification && (
        <div className="fixed top-16 right-4 z-50 bg-aura-espresso text-aura-ivory px-4 py-2.5 rounded-lg shadow-xl border border-aura-gold/40 text-xs flex items-center space-x-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-aura-gold" />
          <span>{notification}</span>
        </div>
      )}

      <div className="bg-gradient-to-r from-aura-espresso via-aura-espresso-light to-aura-espresso text-aura-ivory py-1.5 px-4 text-[11px] border-b border-aura-gold/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-aura-gold/25 text-aura-gold font-medium tracking-wide">
              CLIENT PRESENTATION DEMO
            </span>
            <span className="hidden sm:inline text-aura-beige/90">
              Frontend evaluation build with simulated auth, cart, order fulfillment & tracking.
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {!currentUser ? (
              <button
                onClick={quickDemoLogin}
                className="hover:text-aura-gold transition-colors flex items-center space-x-1 underline decoration-aura-gold/50"
              >
                <User className="w-3 h-3 text-aura-gold" />
                <span>Demo Login</span>
              </button>
            ) : (
              <span className="text-aura-gold font-medium flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Demo User: {getFirstName()}</span>
              </span>
            )}

            <button
              onClick={() => setIsDemoBarOpen(true)}
              className="bg-aura-gold text-aura-espresso px-2.5 py-0.5 rounded font-semibold hover:bg-aura-gold-light transition-all shadow-sm flex items-center space-x-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>Demo Controls</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
