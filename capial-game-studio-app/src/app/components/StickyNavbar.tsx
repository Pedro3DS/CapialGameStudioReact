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
    const handleScroll = () => setIsSticky(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`w-full z-50 transition-all duration-500 ${
        isSticky
          ? 'fixed top-0 bg-black/70 backdrop-blur-md shadow-lg'
          : 'reçative bg-black'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LEFT SIDE — About Us / Projects */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
          <a href="#aboutUs" className="hover:text-amber-400 transition-colors">About Us</a>
          <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
        </div>

        {/* CENTER — Logo */}
        <motion.div
          className="flex justify-center items-center"
          animate={{ scale: isSticky ? 0.8 : 1, y: isSticky ? 0 : -8 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={Icon}
            alt="Capial Logo"
            priority
            className="w-20 h-auto cursor-pointer"
          />
        </motion.div>

        {/* RIGHT SIDE — Team / Contact + Dropdown */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
          <a href="#team" className="hover:text-amber-400 transition-colors">Team</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>

          {/* Dropdown */}
          <div className="relative ml-6">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center px-3 py-2 rounded hover:bg-white/10 transition"
            >
              English (US)
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg py-2 text-sm">
                {['English (US)', 'Deutsch', 'Italiano', '中文'].map((lang) => (
                  <li key={lang}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-white/10 transition"
                    >
                      {lang}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded hover:bg-white/10 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
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
