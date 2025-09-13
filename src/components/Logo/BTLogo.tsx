import React from 'react';
import { motion } from 'framer-motion';

interface BTLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}

const BTLogo: React.FC<BTLogoProps> = ({ 
  size = 'md', 
  animated = true, 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* BT Infinity Logo */}
      <motion.div
        className={`relative ${sizeClasses[size]}`}
        whileHover={animated ? { scale: 1.1, rotate: 5 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          className="relative"
        >
          <defs>
            <linearGradient id="btGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7F3FBF" />
              <stop offset="100%" stopColor="#EE3F8F" />
            </linearGradient>
            <linearGradient id="btGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1F8BCF" />
              <stop offset="100%" stopColor="#4DD0E1" />
            </linearGradient>
            <linearGradient id="btGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4DD0E1" />
              <stop offset="100%" stopColor="#7F3FBF" />
            </linearGradient>
          </defs>

          {/* Infinity Symbol - Top Loop */}
          <motion.path
            d="M 20 50 Q 30 20 50 50 Q 70 20 80 50"
            stroke="url(#btGradient1)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={animated ? { pathLength: 1 } : { pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Infinity Symbol - Bottom Loop */}
          <motion.path
            d="M 20 50 Q 30 80 50 50 Q 70 80 80 50"
            stroke="url(#btGradient2)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={animated ? { pathLength: 1 } : { pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Circuit Pattern - Top */}
          <motion.path
            d="M 25 35 L 30 35 L 30 40 L 35 40"
            stroke="url(#btGradient3)"
            strokeWidth="2"
            fill="none"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={animated ? { pathLength: 1 } : { pathLength: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          />

          {/* Circuit Pattern - Bottom */}
          <motion.path
            d="M 25 65 L 30 65 L 30 60 L 35 60"
            stroke="url(#btGradient3)"
            strokeWidth="2"
            fill="none"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={animated ? { pathLength: 1 } : { pathLength: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
          />

          {/* BT Letters */}
          <motion.text
            x="50"
            y="55"
            textAnchor="middle"
            className={`font-bold fill-white ${textSizes[size]}`}
            initial={animated ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
            animate={animated ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            BT
          </motion.text>

          {/* Floating Data Points */}
          {animated && (
            <>
              <motion.circle
                cx="15"
                cy="30"
                r="2"
                fill="#4DD0E1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
              <motion.circle
                cx="85"
                cy="70"
                r="2"
                fill="#7F3FBF"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  delay: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            </>
          )}
        </svg>
      </motion.div>

      {/* Company Name */}
      <motion.span
        className={`font-orbitron font-bold brand-text-gradient ${textSizes[size]}`}
        whileHover={animated ? { scale: 1.05 } : {}}
        transition={{ duration: 0.2 }}
      >
        BrijTech
      </motion.span>
    </div>
  );
};

export default BTLogo;
