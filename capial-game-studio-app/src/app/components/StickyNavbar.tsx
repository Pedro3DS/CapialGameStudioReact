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
      <div className="max-w-2xl mx-auto flex items-center justify-between px-6 py-2 md:py-0 font-sans transition-all">

        {/* Links da esquerda */}
        <a href="#aboutUs" className={`hover:text-amber-400 transition-all ${isSticky ? 'translate-y-0' : '-translate-y-3'}`}>
          About Us
        </a>

        {/* DROPDOWN manual */}
        <div className="relative">
          <a
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`text-white  text-center inline-flex items-center pointer transition-all ${isSticky ? 'translate-y-0' : '-translate-y-3'}`}
          >
            Projects
            <svg
              className="w-2.5 h-2.5 ml-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </a>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700/50 dark:divide-gray-600 backdrop-blur-md">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Gate Ball</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cerrado Vivo</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pantanal Code</a>
                </li>
              </ul>
              <div className="py-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Projects</a>
              </div>
            </div>
          )}
        </div>

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
            className={`w-25 h-auto cursor-pointer transition-transform ${isSticky ? 'translate-y-0' : '-translate-y-3'} `}
          />
        </motion.div>

        {/* Links da direita */}
        <a href="#team" className={`hover:text-amber-400 transition-all ${isSticky ? 'translate-y-0' : '-translate-y-3'}`}>
          Team
        </a>
        <a href="#contact" className={`hover:text-amber-400 transition-all ${isSticky ? 'translate-y-0' : '-translate-y-3'}`}>
          Contact
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
