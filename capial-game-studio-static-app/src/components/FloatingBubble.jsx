'use client'
import { motion } from "framer-motion"

export default function FloatingBubble({ logo, color = "#60a5fa", size = 120, top, left }) {
  const duration = 18 + Math.random() * 6 // tempos diferentes pra suavizar

  return (
    <motion.img
      src={logo}
      alt="bubble"
      className="absolute rounded-full object-cover select-none pointer-events-auto cursor-pointer"
      style={{
        width: size,
        height: size,
        top: top ?? `${Math.random() * 80 + 10}%`,
        left: left ?? `${Math.random() * 80 + 10}%`,
        filter: `drop-shadow(0 0 25px ${color})`,
      }}
      animate={{
        y: [0, -10, 0, 8, 0],
        x: [0, 5, -5, 0],
      }}
      whileHover={{
        scale: 1.15,
        filter: `drop-shadow(0 0 80px ${color})`,
      }}
      transition={{
        duration, // controla o loop
        repeat: Infinity,
        ease: "easeInOut",
        // tempo específico para hover:
        scale: { duration: 0.4, ease: "easeOut" },
        filter: { duration: 0.2, ease: "easeOut" },
      }}
    />
  )
}
