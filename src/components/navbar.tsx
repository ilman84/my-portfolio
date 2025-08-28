'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  navigationItems,
  handleNavigation,
  handleLogoClick,
  handleGetInTouch,
} from '../types/navigation';

interface NavbarProps {
  onMobileMenuOpen: () => void;
}

export default function Navbar({ onMobileMenuOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Untuk mobile, background hitam hanya muncul saat scroll jauh dari hero section
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        // Mobile: background hitam muncul setelah scroll 200px (setelah hero section)
        setIsScrolled(scrollTop > 200);
      } else {
        // Desktop: background hitam muncul setelah scroll 50px
        setIsScrolled(scrollTop > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 z-[1000]'
          : 'bg-transparent z-[50]'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='mx-auto w-full max-w-[1440px] px-4 md:px-[120px]'>
        <div className='flex w-full h-[80px] justify-between items-center'>
          <motion.button
            onClick={handleLogoClick}
            className='flex w-[110px] gap-[8px] items-center hover:opacity-80 transition-opacity cursor-pointer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className='w-[43px] h-[43px] bg-[url(/images/star.svg)] bg-cover bg-no-repeat'
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <span className="font-['Raleway'] text-[20px] font-bold text-white">
              Ilman
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <motion.div
            className='hidden md:flex w-[431px] gap-[80px] items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item.href)}
                className="font-['Raleway'] text-[16px] font-medium text-white tracking-[-0.48px] hover:text-gray-300 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Right side buttons */}
          <div className='flex items-center gap-4'>
            {/* Desktop Get in Touch Button */}
            <motion.button
              onClick={handleGetInTouch}
              className='hidden md:flex w-[167px] h-[44px] bg-white rounded-[8px] justify-center items-center hover:bg-gray-100 transition-colors cursor-pointer'
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.5,
                type: 'spring',
                bounce: 0.6,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-['Raleway'] text-[14px] font-semibold text-black">
                Get in Touch
              </span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={onMobileMenuOpen}
              className='md:hidden w-[18px] h-[18px] bg-[url(/images/hamburger-icon.png)] bg-cover bg-no-repeat hover:opacity-80 transition-all duration-300 ease-in-out'
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
