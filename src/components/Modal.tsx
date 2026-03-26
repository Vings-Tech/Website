import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { cn } from '../utils/cn';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center pt-4 px-0 md:p-6 pb-0 md:pb-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: "100%" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: "100%" }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={cn(
              "relative w-full max-w-3xl max-h-[90vh] md:max-h-[80vh] bg-brand-card border border-brand-border rounded-t-3xl md:rounded-2xl shadow-2xl flex flex-col overflow-hidden",
              className
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-border bg-brand-bg/50">
              <h3 className="text-xl md:text-2xl font-bold text-brand-text">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-brand-text/10 transition-colors text-brand-text/60 hover:text-brand-text"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
              <div className="prose prose-invert max-w-none text-brand-text/70 leading-relaxed">
                {children}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-brand-border bg-brand-bg/50 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-brand-text/10 hover:bg-brand-text/20 text-brand-text font-bold transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
