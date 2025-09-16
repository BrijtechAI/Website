import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Mail } from 'lucide-react';

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyBookingProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl?: string;
}

const CalendlyBooking: React.FC<CalendlyBookingProps> = ({ 
  isOpen, 
  onClose, 
  calendlyUrl = 'https://calendly.com/brijtech2025/30min' // Your actual Calendly URL
}) => {
  useEffect(() => {
    if (isOpen && window.Calendly) {
      // Initialize Calendly popup widget
      window.Calendly.initPopupWidget({
        url: calendlyUrl
      });
    }
  }, [isOpen, calendlyUrl]);

  const handleBookingClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: calendlyUrl
      });
    } else {
      // Fallback: open in new tab
      window.open(calendlyUrl, '_blank');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-card rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 brand-gradient-primary rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Schedule Consultation
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Book a free 30-minute consultation
                  </p>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-gray-500" />
              </motion.button>
            </div>

            {/* Benefits */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  30-minute free consultation
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-secondary" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Expert technical advice
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Follow-up resources provided
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={handleBookingClick}
              className="w-full brand-gradient-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5" />
              <span>Open Booking Calendar</span>
            </motion.button>

            {/* Alternative Link */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Having trouble with the calendar?
              </p>
              <button
                onClick={() => window.open(calendlyUrl, '_blank')}
                className="text-sm text-primary hover:text-primary/80 underline"
              >
                Open in new tab
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CalendlyBooking;
