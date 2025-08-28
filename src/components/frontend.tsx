'use client';

import { motion } from 'framer-motion';
import { PortfolioViewer } from './portfolio-viewer';

export default function Frontend() {
  return (
    <div
      id='frontend'
      className='flex w-full md:w-[1440px] pt-[10px] pb-[80px] px-[24px] md:px-[120px] flex-col gap-[64px] items-center relative z-[268]'
    >
      {/* Header */}
      <motion.div
        className='flex flex-col gap-[2px] md:gap-[6px] items-center self-stretch relative z-[269]'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <motion.span
          className="font-['Raleway'] text-[28px] md:text-[48px] font-bold leading-[40px] md:leading-[60px] text-[#fff] tracking-[-1.44px] text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: 'easeOut',
          }}
        >
          Frontend in Action
        </motion.span>
        <motion.span
          className="font-['Raleway'] text-[14px] md:text-[16px] font-normal leading-[25px] text-[#a4a7ae] tracking-[-0.48px] text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: 'easeOut',
          }}
        >
          These are hands-on projects where I delivered clean, responsive user
          interfaces.
        </motion.span>
      </motion.div>

      {/* Portfolio Viewer with Thumbnail Navigator */}
      <motion.div
        className='w-full relative z-[272]'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          delay: 0.3,
        }}
      >
        <PortfolioViewer />
      </motion.div>
    </div>
  );
}
