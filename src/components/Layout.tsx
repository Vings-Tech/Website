import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AmbientBackground } from './AmbientBackground';
import { ScrollProgressBar } from './ScrollProgressBar';
import { ScrollToTop } from './ScrollToTop';

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-transparent text-brand-text selection:bg-cyan-500/30 selection:text-cyan-400 relative">
      <ScrollProgressBar />
      <AmbientBackground />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

