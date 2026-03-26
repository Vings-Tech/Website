import React, { useEffect, useState } from 'react';
import { motion, useSpring, useScroll } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(to right, #3b82f6, #6366f1, #06b6d4)',
        boxShadow: '0 0 10px rgba(99,102,241,0.6), 0 0 20px rgba(59,130,246,0.4)',
      }}
    />
  );
};
