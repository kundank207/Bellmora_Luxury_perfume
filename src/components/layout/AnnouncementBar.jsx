import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Gift, Sparkles, Truck } from 'lucide-react';

const announcements = [
  {
    icon: Truck,
    text: 'Complimentary White-Glove Shipping Across India on Orders Above ₹2,500',
  },
  {
    icon: Sparkles,
    text: 'Complimentary 2x Luxury Fragrance Discovery Vials with Every 100ml Flacon',
  },
  {
    icon: Gift,
    text: 'Exclusive Client Privilege: Use Code BELLMORA10 for 10% Off on First Purchase',
  },
];

export const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? announcements.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  const CurrentIcon = announcements[currentIndex].icon;

  return (
    <div className="bg-aura-cream/90 text-aura-espresso border-b border-aura-beige/80 py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs tracking-wider font-light">
        <button
          onClick={handlePrev}
          aria-label="Previous announcement"
          className="text-aura-grey hover:text-aura-gold transition-colors p-0.5"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center space-x-2 text-center transition-opacity duration-300">
          <CurrentIcon className="w-3.5 h-3.5 text-aura-gold flex-shrink-0" />
          <span className="font-sans font-medium text-[11px] sm:text-xs">
            {announcements[currentIndex].text}
          </span>
        </div>

        <button
          onClick={handleNext}
          aria-label="Next announcement"
          className="text-aura-grey hover:text-aura-gold transition-colors p-0.5"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
