import React from 'react';
import { DemoPresentationBanner } from '../common/DemoPresentationBanner';
import { AnnouncementBar } from './AnnouncementBar';
import { Header } from './Header';
import { Footer } from './Footer';
import { DemoPresentationModal } from '../common/DemoPresentationModal';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-aura-ivory text-aura-espresso selection:bg-aura-gold/25 selection:text-aura-espresso">
      {/* Client presentation evaluator bar */}
      <DemoPresentationBanner />

      {/* Rotating Announcement Bar */}
      <AnnouncementBar />

      {/* Main Luxury Navigation */}
      <Header />

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Demo Controls Modal */}
      <DemoPresentationModal />

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
};
