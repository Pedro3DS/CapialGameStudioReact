// app/components/StickyNavbar.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function StickyNavbar() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isSticky
          ? 'top-0 bg-black/70 backdrop-blur-md shadow-lg'
          : 'bottom-0 bg-transparent'
      }`}
      initial={{ y: 0 }}
      animate={{ y: isSticky ? 0 : 0 }}
    >
      <div className="flex justify-center items-center py-3">
        <motion.div
          className={`w-12 h-12 bg-white rounded-full transition-all duration-300 ${
            isSticky ? 'translate-y-0' : '-translate-y-3'
          }`}
        >
          {/* Ícone central */}
        </motion.div>
      </div>
    </motion.nav>
  )
}
