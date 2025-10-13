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
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isSticky ? 'top-0 bg-black/70 backdrop-blur-md shadow-lg' : 'bottom-0 bg-black'
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
    >
      {/* Logo */}
      <div className="flex justify-center items-center py-2">
        <motion.div
          className={`h-auto transition-all duration-300 ${
            isSticky ? 'w-16 translate-y-0' : 'w-24 -translate-y-7'
          }`}
        >
          <Image src={Icon} alt="Capial logo" priority />
        </motion.div>
      </div>

      {/* Navbar */}
      <div className="bg-white dark:bg-gray-900 border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
          {/* Logo + Nome */}
          <a href="#" className="flex items-center space-x-3">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">Flowbite</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500">About</a>
            <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500">Services</a>
            <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500">Pricing</a>
            <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500">Contact</a>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                English (US)
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <ul className={`absolute right-0  mt-2 w-40 bg-white dark:bg-gray-700 rounded shadow-lg py-1 ${isSticky ? "top-full" : "bottom-full"}`}>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">English (US)</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Deutsch</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Italiano</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">中文</a>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <a href="#" className="block text-gray-900 dark:text-white">Home</a>
            <a href="#" className="block text-gray-900 dark:text-white">About</a>
            <a href="#" className="block text-gray-900 dark:text-white">Services</a>
            <a href="#" className="block text-gray-900 dark:text-white">Pricing</a>
            <a href="#" className="block text-gray-900 dark:text-white">Contact</a>
          </div>
        )}
      </div>
    </motion.nav>
  )
}
