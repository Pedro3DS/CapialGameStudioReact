'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Icon from '../../../public/CapialLogoSquare-removebg-preview.png'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from "../i18n/LanguageContext"
import Link from 'next/link'


export default function StickyNavbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { idioma, setIdioma, textos } = useLanguage()
  const t = textos.nav

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
        <Link href="#aboutUs" rel="noopener noreferrer" className={`selection:bg-amber-600 relative hidden md:inline-block text-lg font-bold transition-all
    before:content-[''] before:absolute before:left-0 before:bottom-0
    before:h-[2px] before:w-full before:bg-gradient-to-r before:from-red-500 before:to-white hover:before:via-amber-400 hover:before:to-red-200
    before:scale-x-50 before:origin-left before:transition-transform before:duration-300
    hover:before:scale-x-100 ${isSticky ? 'translate-y-0 text-gray-300' : '-translate-y-3 text-white'} `}>
          {t.text1}
        </Link>
        <Link href="#projects" rel="noopener noreferrer" className={`relative hidden md:inline-block text-lg font-bold transition-all
    before:content-[''] before:absolute before:left-0 before:bottom-0
    before:h-[2px] before:w-full before:bg-gradient-to-r before:from-red-500 before:to-white hover:before:via-amber-400 hover:before:to-red-200
    before:scale-x-50 before:origin-left before:transition-transform before:duration-300
    hover:before:scale-x-100 ${isSticky ? 'translate-y-0 text-gray-300' : '-translate-y-3 text-white'}`}>
          {t.text2}
        </Link>


        {/* Logo central */}
        <motion.div
          className="flex justify-center items-center absolute md:relative left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0"
          animate={{ scale: isSticky ? 0.6 : 1, y: isSticky ? 0 : -8 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="#Home" rel="noopener noreferrer">

            <Image
              src={Icon}
              alt="Capial Logo"
              priority
              className={`relative w-25 h-auto cursor-pointer transition filter duration-500 ease-in hover:invert ${isSticky ? 'translate-y-0' : '-translate-y-3'}`}
            />
          </Link>
        </motion.div>

        {/* Links da direita */}
        <Link href="#team" rel="noopener noreferrer" className={`relative hidden md:inline-block text-lg font-bold transition-all
    before:content-[''] before:absolute before:left-0 before:bottom-0
    before:h-[2px] before:w-full before:bg-gradient-to-r before:from-red-500 before:to-white hover:before:via-amber-400 hover:before:to-red-200
    before:scale-x-50 before:origin-left before:transition-transform before:duration-300
    hover:before:scale-x-100 ${isSticky ? 'translate-y-0 text-gray-300' : '-translate-y-3 text-white'}`}>
          {t.text3}
        </Link>

        <Link href="#contact" rel="noopener noreferrer" className={`relative hidden md:inline-block  text-lg font-bold  transition-all
    before:content-[''] before:absolute before:left-0 before:bottom-0
    before:h-[2px] before:w-full before:bg-gradient-to-r before:from-red-500 before:to-white hover:before:via-amber-400 hover:before:to-red-200
    before:scale-x-50 before:origin-left before:transition-transform before:duration-300
    hover:before:scale-x-100 ${isSticky ? 'translate-y-0 text-gray-300' : '-translate-y-3 text-white'} `}>
          {t.text4}
        </Link>
        {/* MENU MOBILE */}

        <div>
          <LanguageSelector isUp={isSticky} />

        </div>


      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full flex flex-col items-start bg-[#000]/80 backdrop-blur-sm py-6 space-y-3 text-lg font-medium z-20"
        >
          <a href="#aboutUs" onClick={() => setMobileMenuOpen(false)} className={`ms-[5vh] relative inline-block text-lg font-bold transition-all
    before:content-[''] before:absolute before:left-0 before:bottom-0
    before:h-[2px] before:w-full before:bg-gradient-to-r before:from-red-500 before:to-white hover:before:via-amber-400 hover:before:to-red-200
    before:scale-x-50 before:origin-left before:transition-transform before:duration-300
    hover:before:scale-x-100`}>{t.text1}</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}
            className={`ms-[5vh] relative inline-block text-lg font-bold transition-all
    before:content-[''] before:absolute before:left-0 before:bottom-0
    before:h-[2px] before:w-full before:bg-gradient-to-r before:from-red-500 before:to-white hover:before:via-amber-400 hover:before:to-red-200
    before:scale-x-50 before:origin-left before:transition-transform before:duration-300
    hover:before:scale-x-100`}>{t.text2}</a>
          <a href="#team" onClick={() => setMobileMenuOpen(false)}
            className={`ms-[5vh] relative inline-block text-lg font-bold transition-all
    before:content-[''] before:absolute before:left-0 before:bottom-0
    before:h-[2px] before:w-full before:bg-gradient-to-r before:from-red-500 before:to-white hover:before:via-amber-400 hover:before:to-red-200
    before:scale-x-50 before:origin-left before:transition-transform before:duration-300
    hover:before:scale-x-100`}>{t.text3}</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}
            className={`ms-[5vh] relative inline-block text-lg font-bold transition-all
    before:content-[''] before:absolute before:left-0 before:bottom-0
    before:h-[2px] before:w-full before:bg-gradient-to-r before:from-red-500 before:to-white hover:before:via-amber-400 hover:before:to-red-200
    before:scale-x-50 before:origin-left before:transition-transform before:duration-300
    hover:before:scale-x-100`}>{t.text4}</a>
        </motion.div>
      )}
    </motion.nav>
  )
}
