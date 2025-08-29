'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface StatusModalProps {
  isOpen: boolean;
  type: 'success' | 'error';
  onClose: () => void;
}

export const StatusModal = ({ isOpen, type, onClose }: StatusModalProps) => {
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
            <div className='text-center relative'>
              {/* Status Image - Clickable to close */}
              <div
                className='relative cursor-pointer hover:scale-105 transition-transform duration-200'
                onClick={onClose}
              >
                <Image
                  src={
                    type === 'success'
                      ? '/images/success.png'
                      : '/images/failed.png'
                  }
                  alt={type === 'success' ? 'Success' : 'Failed'}
                  width={400}
                  height={400}
                  className='mx-auto'
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
