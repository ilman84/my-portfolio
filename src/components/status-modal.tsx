'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface StatusModalProps {
  isOpen: boolean;
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export const StatusModal = ({
  isOpen,
  type,
  message,
  onClose,
}: StatusModalProps) => {
  const scrollToHero = () => {
    console.log('Scroll to hero function called');

    // Close modal first
    onClose();

    // Simple and direct scroll to hero
    setTimeout(() => {
      console.log('Attempting to scroll to hero...');

      // Try to find hero element
      const heroElement = document.getElementById('hero');
      console.log('Hero element:', heroElement);

      if (heroElement) {
        console.log('Hero found! Scrolling...');
        // Use window.scrollTo for more reliable scrolling
        const heroRect = heroElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset + heroRect.top;

        window.scrollTo({
          top: scrollTop,
          behavior: 'smooth',
        });
      } else {
        console.log('Hero not found, scrolling to top');
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-[999]'
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] w-full max-w-md mx-4'
          >
            <div className='bg-black border border-[#22252b] rounded-2xl p-8 text-center relative'>
              {/* Status Image - Clickable to go to hero */}
              <div
                className='relative mb-6 cursor-pointer hover:scale-105 transition-transform duration-200'
                onClick={scrollToHero}
                title='Click to go to hero section'
              >
                <Image
                  src={
                    type === 'success'
                      ? '/images/success.png'
                      : '/images/failed.png'
                  }
                  alt={type === 'success' ? 'Success' : 'Failed'}
                  width={120}
                  height={120}
                  className='mx-auto'
                />
                {/* Hover effect overlay */}
                <div className='absolute inset-0 bg-white/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200'></div>
              </div>

              {/* Title */}
              <h2
                className={`text-2xl font-bold mb-4 ${
                  type === 'success' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {type === 'success'
                  ? 'Message Sent Successfully!'
                  : 'Message Failed!'}
              </h2>

              {/* Message */}
              <p className='text-white text-lg mb-8 leading-relaxed'>
                {message}
              </p>

              {/* Close Button */}
              <button
                onClick={onClose}
                className='w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200'
              >
                {type === 'success' ? 'Back to Home' : 'Try Again'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
