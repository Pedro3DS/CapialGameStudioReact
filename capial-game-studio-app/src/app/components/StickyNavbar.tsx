'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Icon from '../../../public/CapialLogoSquare-removebg-preview.png'

export default function StickyNavbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 585)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`w-full z-50 transition-all duration-0 ${isSticky
        ? 'fixed top-0 bg-gradient-to-t to-black/50 from-[#333333]/50 backdrop-blur-md shadow-lg'
        : 'relative bg-gradient-to-t from-black to-[#333333]'
        }`}
    >
      <div className="max-w-2xl mx-auto flex items-center justify-between px-6 py-2 md:py-0 font-sans transition-all ">
        {/* MENU MOBILE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded hover:bg-white/10 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Links da esquerda */}
        <a href="#aboutUs" className={`selection:bg-amber-600 relative hidden md:inline-block text-lg font-bold transition-all
    before:content-[''] before:absolute before:left-0 before:bottom-0
    before:h-[2px] before:w-full before:bg-gradient-to-r before:from-red-500 before:to-white hover:before:via-amber-400 hover:before:to-red-200
    before:scale-x-50 before:origin-left before:transition-transform before:duration-300
    hover:before:scale-x-100 ${isSticky ? 'translate-y-0 text-gray-300' : '-translate-y-3 text-white'} `}>
          Sobre Nós
        </a>
        <a href="#projects" className={`relative hidden md:inline-block text-lg font-bold transition-all
    before:content-[''] before:absolute before:left-0 before:bottom-0
    before:h-[2px] before:w-full before:bg-gradient-to-r before:from-red-500 before:to-white hover:before:via-amber-400 hover:before:to-red-200
    before:scale-x-50 before:origin-left before:transition-transform before:duration-300
    hover:before:scale-x-100 ${isSticky ? 'translate-y-0 text-gray-300' : '-translate-y-3 text-white'}`}>
          Projetos
        </a>


        {/* Logo central */}
        <motion.div
          className="flex justify-center items-center"
          animate={{ scale: isSticky ? 0.8 : 1, y: isSticky ? 0 : -8 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={Icon}
            alt="Capial Logo"
            priority
            className={`w-25 h-auto cursor-pointer transition filter duration-500 ease-in hover:invert ${isSticky ? 'translate-y-0' : '-translate-y-3'} `}
          />
        </motion.div>

        {/* Links da direita */}
        <a href="#team" className={`relative hidden md:inline-block text-lg font-bold transition-all
    before:content-[''] before:absolute before:left-0 before:bottom-0
    before:h-[2px] before:w-full before:bg-gradient-to-r before:from-red-500 before:to-white hover:before:via-amber-400 hover:before:to-red-200
    before:scale-x-50 before:origin-right before:transition-transform before:duration-300
    hover:before:scale-x-100 ${isSticky ? 'translate-y-0 text-gray-300' : '-translate-y-3 text-white'}`}>
          Equipe
        </a>

        <a href="#contact" className={`relative hidden md:inline-block  text-lg font-bold  transition-all
    before:content-[''] before:absolute before:left-0 before:bottom-0
    before:h-[2px] before:w-full before:bg-gradient-to-r before:from-red-500 before:to-white hover:before:via-amber-400 hover:before:to-red-200
    before:scale-x-50 before:origin-right before:transition-transform before:duration-300
    hover:before:scale-x-100 ${isSticky ? 'translate-y-0 text-gray-300' : '-translate-y-3 text-white'} `}>
          Contato
        </a>
        {/* MENU MOBILE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded hover:bg-white/10 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>


      </div>

      {/* MENU MOBILE dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center bg-black/80 backdrop-blur-sm py-4 space-y-3 text-lg font-medium"
        >
          <a href="#aboutUs" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#team" onClick={() => setMobileMenuOpen(false)}>Team</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </motion.div>
      )}
    </motion.nav>
  )
}
