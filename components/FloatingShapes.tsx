'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  delay: number;
  duration: number;
  type: 'circle' | 'square' | 'triangle';
  opacity: number;
  moveDistance: number;
}

// Simple pseudo-random number generator with seed for consistency
const seededRandom = (seed: number) => {
  const a = 1664525;
  const c = 1013904223;
  const m = Math.pow(2, 32);
  let z = seed;
  
  return () => {
    z = (a * z + c) % m;
    return z / m;
  };
};

export default function FloatingShapes({ 
  count = 8, 
  colors = ['queonext', 'moveelevator', 'primary'],
  seed = 12345 // Fixed seed for consistent behavior
}) {
  // Use useMemo to generate shapes only once with consistent positioning
  const shapes = useMemo(() => {
    const random = seededRandom(seed);
    const generatedShapes: Shape[] = [];
    
    // Define safe zones (percentage of viewport) - only place shapes in these areas
    const safeZones = [
      { x: [30, 95], y: [30, 70] },  // Center area
      { x: [70, 95], y: [5, 30] },   // Top right
      { x: [70, 95], y: [70, 95] }   // Bottom right
    ];
    
    // Place shapes only in safe zones
    for (let i = 0; i < count; i++) {
      // Select a random safe zone
      const zoneIndex = Math.floor(random() * safeZones.length);
      const zone = safeZones[zoneIndex];
      
      // Generate position within the selected safe zone
      const x = zone.x[0] + random() * (zone.x[1] - zone.x[0]);
      const y = zone.y[0] + random() * (zone.y[1] - zone.y[0]);
      
      const colorIndex = Math.floor(random() * colors.length);
      const typeIndex = Math.floor(random() * 3);
      
      generatedShapes.push({
        id: i,
        x,
        y,
        size: random() * 30 + 15, // 15-45px (smaller size)
        rotation: random() * 360,
        color: colors[colorIndex],
        delay: random() * 5, // More varied delays
        duration: random() * 10 + 15, // 15-25s (medium speed)
        type: ['circle', 'square', 'triangle'][typeIndex] as 'circle' | 'square' | 'triangle',
        opacity: 0.05 + random() * 0.05, // 0.05-0.1 opacity (subtle but visible)
        moveDistance: 5 + random() * 10 // 5-15% movement (more noticeable)
      });
    }
    
    return generatedShapes;
  }, [count, colors, seed]);

  const renderShape = (shape: Shape) => {
    const shapeStyles = {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      opacity: shape.opacity,
      filter: 'blur(1px)', // Less blur for more visibility
      position: 'absolute' as const
    };
    
    // More noticeable animation values
    const moveX = shape.moveDistance * (shape.id % 2 === 0 ? 1 : -1);
    const moveY = shape.moveDistance * (shape.id % 3 === 0 ? 1 : -1);
    
    // Use percentage-based movement for more natural floating
    const animationProps = {
      x: [`0%`, `${moveX}%`],
      y: [`0%`, `${moveY}%`],
      rotate: [0, shape.id % 2 === 0 ? 15 : -15], // More rotation
      scale: [1, shape.id % 4 === 0 ? 1.05 : 0.95], // Add subtle scaling
      transition: {
        duration: shape.duration,
        delay: shape.delay,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'easeInOut'
      }
    };
    
    // Use inline styles for colors to avoid Tailwind class issues
    const getColorStyle = () => {
      switch(shape.color) {
        case 'queonext': return { backgroundColor: '#fa186b' };
        case 'moveelevator': return { backgroundColor: '#F97901' };
        case 'primary': return { backgroundColor: '#fa4a37' };
        default: return { backgroundColor: '#fa4a37' };
      }
    };
    
    const combinedStyles = {
      ...shapeStyles,
      ...getColorStyle()
    };
    
    switch (shape.type) {
      case 'circle':
        return (
          <motion.div
            key={shape.id}
            className="rounded-full"
            style={combinedStyles}
            animate={animationProps}
            initial={{ x: 0, y: 0, rotate: 0, scale: 1 }}
          />
        );
      case 'square':
        return (
          <motion.div
            key={shape.id}
            className="rounded-md"
            style={combinedStyles}
            animate={animationProps}
            initial={{ x: 0, y: 0, rotate: 0, scale: 1 }}
          />
        );
      case 'triangle':
        return (
          <motion.div
            key={shape.id}
            style={{
              ...combinedStyles,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
            animate={animationProps}
            initial={{ x: 0, y: 0, rotate: 0, scale: 1 }}
          />
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map(renderShape)}
    </div>
  );
}
