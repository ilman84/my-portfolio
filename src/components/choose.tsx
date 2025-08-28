'use client';

import { motion } from 'framer-motion';

export default function Choose() {
  return (
    <motion.div
      className='flex w-full md:w-[1440px] mx-auto flex-col items-center px-4 md:px-[120px] py-[40px] md:py-[80px] gap-[24px] md:gap-[64px]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <motion.div
        className='flex flex-col items-center gap-2 md:gap-4 text-center max-w-[1200px]'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <motion.span
          className="font-['Raleway'] text-[28px] md:text-[48px] font-bold leading-[38px] md:leading-[60px] text-[#fff] tracking-[-0.56px] md:tracking-[-1.44px]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: 'easeOut',
          }}
        >
          Choose Wisely, Get Quality Results
        </motion.span>
        <motion.span
          className="font-['Raleway'] text-[16px] md:text-[18px] font-normal leading-[30px] md:leading-[32px] text-[#a4a7ae] tracking-[-0.48px] md:tracking-[-0.36px]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: 'easeOut',
          }}
        >
          Make the right choice for interfaces that are fast, reliable, and
          visually sharp.
        </motion.span>
      </motion.div>

      {/* Wrapper */}
      <motion.div
        className='flex flex-col md:flex-row gap-5 w-full max-w-[1200px]'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          delay: 0.3,
        }}
      >
        {/* With Me */}
        <motion.div
          className='relative flex flex-col gap-4 p-4 md:p-6 bg-[#000] rounded-[16px] overflow-hidden flex-1'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: 'easeOut',
          }}
          whileHover={{
            y: -5,
            scale: 1.02,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
        >
          <div className='absolute inset-0 bg-[url(/images/background-pattern.png)] bg-[length:100%_100%] bg-no-repeat' />
          <span className="font-['Raleway'] text-[18px] md:text-[24px] font-semibold leading-[32px] md:leading-[36px] text-white relative z-10">
            With Me
          </span>
          <div className='flex flex-col gap-2 relative z-10'>
            {[
              'React Expert',
              'Pixel Perfect',
              'TypeScript Proficiency',
              'Clean, Maintainable Code',
              'Performance Optimization',
              'Responsive Website',
              'UI Design Proficiency (Figma)',
            ].map((item, i) => (
              <motion.div
                key={i}
                className='flex items-center gap-2 md:gap-3 h-[48px] md:h-[56px] px-3 md:px-4 py-2 bg-[rgba(0,0,0,0.2)] rounded-[8px]'
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + i * 0.1,
                  ease: 'easeOut',
                }}
                whileHover={{
                  x: 5,
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  transition: { duration: 0.2 },
                }}
              >
                <div className='w-[24px] h-[24px] md:w-[30px] md:h-[30px] bg-[url(/images/star.svg)] bg-cover' />
                <span className="font-['Raleway'] text-[14px] md:text-[16px] text-white leading-[28px] md:leading-[30px]">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other */}
        <motion.div
          className='flex flex-col gap-4 p-4 md:p-6 bg-[#000] rounded-[16px] border border-[#22252b] flex-1'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.7,
            ease: 'easeOut',
          }}
          whileHover={{
            y: -5,
            scale: 1.02,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
        >
          <span className="font-['Raleway'] text-[18px] md:text-[24px] font-semibold leading-[32px] md:leading-[36px] text-white">
            Other
          </span>
          <div className='flex flex-col gap-2'>
            {[
              'React Expert',
              'Pixel Perfect',
              'TypeScript Proficiency',
              'Clean, Maintainable Code',
              'Performance Optimization',
              'Responsive Website',
              'UI Design Proficiency (Figma)',
            ].map((item, i) => (
              <motion.div
                key={i}
                className='flex items-center gap-2 md:gap-3 h-[48px] md:h-[56px] px-3 md:px-4 py-2 bg-[#22252b] rounded-[8px]'
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + i * 0.1,
                  ease: 'easeOut',
                }}
                whileHover={{
                  x: -5,
                  backgroundColor: '#2a2d35',
                  transition: { duration: 0.2 },
                }}
              >
                <div className='w-[20px] h-[20px] md:w-[24px] md:h-[24px] bg-[url(/images/silang.svg)] bg-cover' />
                <span className="font-['Raleway'] text-[14px] md:text-[16px] text-[#717680] leading-[28px] md:leading-[30px]">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
