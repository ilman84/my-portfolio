'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DesignMotion() {
  const designSkills = [
    { name: 'Photoshop', percentage: 90, icon: '/images/photoshop-icon.png' },
    {
      name: 'Illustrator',
      percentage: 80,
      icon: '/images/illustrator-icon.png',
    },
    { name: 'CorelDraw', percentage: 80, icon: '/images/coreldraw-icon.png' },
    { name: 'Canva', percentage: 90, icon: '/images/canva-icon.png' },
    { name: 'Capcut', percentage: 80, icon: '/images/capcut-icon.png' },
    { name: 'Animotica', percentage: 90, icon: '/images/animotica-icon.png' },
  ];

  return (
    <motion.div
      id='design-motion'
      className='flex flex-col items-start w-full md:w-[1440px] px-4 md:px-[120px] pt-[40px] md:pt-[80px] pb-[40px] md:pb-[80px] gap-6 md:gap-[64px]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Title & Subtitle */}
      <motion.div
        className='flex flex-col items-start gap-2 md:gap-4 w-full'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <motion.h2
          className="font-['Raleway'] text-[28px] md:text-[48px] font-bold leading-[38px] md:leading-[60px] text-white text-center w-full tracking-[-0.56px] md:tracking-[-1.44px]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: 'easeOut',
          }}
        >
          Design & Motion That Convert
        </motion.h2>
        <motion.p
          className="font-['Raleway'] text-[16px] md:text-[18px] font-normal leading-[30px] md:leading-[32px] text-[#a4a7ae] text-center w-full tracking-[-0.48px] md:tracking-[-0.36px]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: 'easeOut',
          }}
        >
          Visual assets crafted for impact—across graphics, videos, and
          everything in between.
        </motion.p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          delay: 0.3,
        }}
      >
        {designSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className='flex flex-col items-center p-6 rounded-[16px] border border-[#22252b] bg-[#0f0f0f] hover:bg-[#1a1a1a] transition-colors duration-300'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1 * (index + 1),
              ease: 'easeOut',
            }}
            whileHover={{
              y: -5,
              scale: 1.02,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
          >
            {/* Icon */}
            <motion.div
              className='w-20 h-20 md:w-24 md:h-24 mb-4 flex items-center justify-center'
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 },
              }}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={80}
                height={80}
                className='w-full h-full object-contain'
              />
            </motion.div>

            {/* Skill Name */}
            <h3 className='font-["Raleway"] text-[16px] md:text-[18px] font-semibold text-white mb-3 text-center'>
              {skill.name}
            </h3>

            {/* Progress Bar */}
            <div className='w-full bg-[#22252b] rounded-full h-2 mb-2'>
              <motion.div
                className='h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full'
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2 * (index + 1),
                  ease: 'easeOut',
                }}
              />
            </div>

            {/* Percentage */}
            <span className='font-["Raleway"] text-[14px] md:text-[16px] font-medium text-[#a4a7ae]'>
              {skill.percentage}%
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
