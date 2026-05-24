import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2200); // Animation duration
    return () => clearTimeout(timer);
  }, [onComplete]);

  const letterContainerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95] as const,
      },
    },
  };

  const taglineVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 0.6,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  const barVariants = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: 1,
      transition: {
        delay: 0.4,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 text-white"
    >
      <div className="flex flex-col items-center max-w-xs w-full px-4">
        {/* Animated Name */}
        <motion.div
          variants={letterContainerVariants}
          initial="initial"
          animate="animate"
          className="flex space-x-1 font-heading text-xl md:text-2xl font-semibold tracking-widest text-white/90 uppercase"
        >
          {Array.from("JAYFEL PAREJA").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={char === " " ? "w-2" : ""}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Minimalist Progress Line */}
        <div className="w-24 h-[1px] bg-neutral-800 mt-4 overflow-hidden relative">
          <motion.div
            variants={barVariants}
            initial="initial"
            animate="animate"
            className="absolute top-0 left-0 right-0 bottom-0 bg-white origin-left"
          />
        </div>

        {/* Creative tagline */}
        <motion.p
          variants={taglineVariants}
          initial="initial"
          animate="animate"
          className="text-xs font-sans mt-3 text-neutral-400 font-light tracking-wider"
        >
          Creative Web Designer & Developer &bull; 2026
        </motion.p>
      </div>
    </motion.div>
  );
};
