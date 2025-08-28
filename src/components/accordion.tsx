'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const Accordion = ({
  title,
  content,
  isOpen,
  onToggle,
}: AccordionProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle();
  };

  return (
    <div className='border-b border-[#22252b] last:border-b-0'>
      <div className='flex items-start py-4'>
        {/* Icon container - completely fixed */}
        <div className='flex-shrink-0 w-10 h-10 mr-4 flex items-center justify-center'>
          <button
            onClick={handleClick}
            className='w-8 h-8 flex items-center justify-center hover:bg-[#111] rounded transition-colors duration-200'
            type='button'
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='w-5 h-5'
            >
              <svg
                className='w-full h-full text-[#a4a7ae]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </motion.div>
          </button>
        </div>

        {/* Title and content - completely stable */}
        <div className='flex-1'>
          <button
            onClick={handleClick}
            className='w-full text-left hover:bg-[#111] px-2 py-1 rounded transition-colors duration-200'
            type='button'
          >
            <span className='text-lg md:text-xl font-semibold text-white block'>
              {title}
            </span>
          </button>

          {/* Content with stable positioning */}
          <div className='relative'>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className='pt-3 pb-2 px-2'
                >
                  <p className='text-[#a4a7ae] leading-relaxed text-sm md:text-base'>
                    {content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
