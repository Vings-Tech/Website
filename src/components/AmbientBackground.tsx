import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Blocks, Code2, Cpu, Globe, Layers, Terminal, Zap } from 'lucide-react';

const icons = [Blocks, Code2, Cpu, Globe, Layers, Terminal, Zap];

export const AmbientBackground: React.FC = () => {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 7 }).map((_, i) => ({
      id: i,
      Icon: icons[i % icons.length],
      size: Math.random() * 50 + 35,
      initialX: Math.random() * 90 + 5,
      initialY: Math.random() * 90 + 5,
      duration: Math.random() * 15 + 25,
      delay: -(i * 6),
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none bg-brand-bg transition-colors duration-300">
      {/* Soft Glow Orbs — GPU-composited, no expensive mix-blend */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform, opacity' }}
        className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/15 blur-[100px] rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{ willChange: 'transform, opacity' }}
        className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-purple-500/15 blur-[100px] rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        style={{ willChange: 'transform, opacity' }}
        className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] bg-cyan-500/15 blur-[100px] rounded-full"
      />

      {/* Floating Icons — simple y translation only, compositor-thread friendly */}
      {elements.map((el) => {
        const Icon = el.Icon;
        return (
          <motion.div
            key={el.id}
            className="absolute text-brand-text/[0.04]"
            style={{
              left: `${el.initialX}%`,
              top: `${el.initialY}%`,
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
            animate={{ y: [0, -28, 0] }}
            transition={{
              duration: el.duration,
              delay: el.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon style={{ width: el.size, height: el.size }} />
          </motion.div>
        );
      })}
    </div>
  );
};
