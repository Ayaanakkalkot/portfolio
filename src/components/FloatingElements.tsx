import React from 'react';
import { motion } from 'framer-motion';

const FloatingElement = ({ 
  size, 
  color, 
  initialX, 
  initialY,
  delay 
}: { 
  size: number;
  color: string;
  initialX: number;
  initialY: number;
  delay: number;
}) => {
  return (
    <motion.div
      className={`absolute rounded-lg bg-opacity-80 backdrop-blur-sm`}
      style={{
        width: size,
        height: size,
        background: color,
        boxShadow: `0 0 ${size}px ${color}`,
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
    />
  );
};

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Purple elements */}
      <FloatingElement size={40} color="#8B5CF6" initialX={20} initialY={30} delay={0} />
      <FloatingElement size={60} color="#A855F7" initialX={70} initialY={60} delay={2} />
      <FloatingElement size={30} color="#7C3AED" initialX={40} initialY={80} delay={4} />
      
      {/* Blue elements */}
      <FloatingElement size={50} color="#3B82F6" initialX={80} initialY={20} delay={1} />
      <FloatingElement size={35} color="#60A5FA" initialX={30} initialY={50} delay={3} />
      
      {/* Main light source */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(59,130,246,0.1) 50%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default FloatingElements; 