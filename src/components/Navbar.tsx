import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Home, User, Briefcase, MessageCircle, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { cn } from '../utils/cn';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: User },
  { name: 'Services', path: '/services', icon: Briefcase },
  { name: 'Contact', path: '/contact', icon: MessageCircle },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none">
        <nav
          className={cn(
            'pointer-events-auto transition-all duration-500',
            'backdrop-blur-xl border',
            'rounded-full flex items-center justify-between',
            'px-4 py-2 w-full max-w-5xl',
            scrolled
              ? 'bg-brand-bg/85 border-brand-border/40 shadow-[0_8px_32px_rgba(59,130,246,0.12),0_2px_8px_rgba(0,0,0,0.08)]'
              : 'bg-brand-bg/60 border-brand-border/30 shadow-lg shadow-brand-text/5'
          )}
        >
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <Logo className="md:h-[32px] h-[28px]" />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'px-6 py-2 rounded-full text-sm font-bold transition-all duration-300',
                    isActive
                      ? 'bg-[#6366F1] text-white shadow-md'
                      : 'text-brand-text/60 hover:text-brand-text hover:bg-brand-text/5'
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 bg-brand-text/5 p-1 rounded-full border border-brand-border/50">
              <button
                onClick={() => theme === 'dark' ? toggleTheme() : null}
                className={cn(
                  "p-1.5 rounded-full transition-all duration-300",
                  theme === 'light' ? "bg-brand-bg shadow-sm text-[#6366F1]" : "text-brand-text/40 hover:text-brand-text"
                )}
                aria-label="Light theme"
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => theme === 'light' ? toggleTheme() : null}
                className={cn(
                  "p-1.5 rounded-full transition-all duration-300",
                  theme === 'dark' ? "bg-brand-bg shadow-sm text-[#6366F1]" : "text-brand-text/40 hover:text-brand-text"
                )}
                aria-label="Dark theme"
              >
                <Moon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="flex items-center gap-1 bg-brand-text/5 p-1 rounded-full border border-brand-border/50">
              <button
                onClick={() => theme === 'dark' ? toggleTheme() : null}
                className={cn(
                  "p-1.5 rounded-full transition-all duration-300",
                  theme === 'light' ? "bg-brand-bg shadow-sm text-[#6366F1]" : "text-brand-text/40"
                )}
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => theme === 'light' ? toggleTheme() : null}
                className={cn(
                  "p-1.5 rounded-full transition-all duration-300",
                  theme === 'dark' ? "bg-brand-bg shadow-sm text-[#6366F1]" : "text-brand-text/40"
                )}
              >
                <Moon className="w-4 h-4" />
              </button>
            </div>
            <button
              className="text-brand-text/70 hover:text-brand-text p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Popup */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-20 right-4 w-[280px] bg-white dark:bg-brand-card z-50 md:hidden p-4 rounded-[2rem] shadow-2xl border border-brand-border/50"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  const isContact = link.name === 'Contact';
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={cn(
                        'flex items-center gap-4 px-5 py-4 rounded-full transition-all duration-200',
                        isActive
                          ? 'bg-[#0F172A] text-white shadow-lg'
                          : isContact
                            ? 'bg-brand-text/5 text-brand-text/80'
                            : 'text-brand-text/70 hover:bg-brand-text/5'
                      )}
                    >
                      <link.icon className={cn('w-5 h-5', isActive ? 'text-white' : 'text-brand-text/60')} />
                      <span className="font-semibold text-base">{link.name}</span>
                    </Link>
                  );
                })}

                <div className="mt-4 pt-4 border-t border-brand-border/30">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all active:scale-95"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Consultation</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
