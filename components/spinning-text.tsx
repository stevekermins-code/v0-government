"use client";

import { motion } from "framer-motion";

interface SpinningTextProps {
  children: string;
  className?: string;
  radius?: number;
  duration?: number;
}

export function SpinningText({
  children,
  className = "",
  radius = 40,
  duration = 10,
}: SpinningTextProps) {
  const characters = children.split("");

  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {characters.map((char, i) => {
        const angle = (i / characters.length) * 360;
        return (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 text-[8px] font-bold text-foreground"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
              transformOrigin: "center center",
            }}
          >
            {char}
          </span>
        );
      })}
    </motion.div>
  );
}
