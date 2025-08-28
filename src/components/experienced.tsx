'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Experienced() {
  const skills = [
    { name: 'HTML', icon: '/images/html.png' },
    { name: 'CSS', icon: '/images/CSS.png' },
    { name: 'Javascript', icon: '/images/javascript.png' },
    { name: 'Typescript', icon: '/images/typescript.png' },
    { name: 'React', icon: '/images/react-logo.png' },
    { name: 'Next.js', icon: '/images/next-logo.png' },
  ];

  return (
    <div
      id='experienced'
      className='flex flex-col items-start w-full md:w-[1440px] px-4 md:px-[120px] pt-[40px] md:pt-[80px] pb-[40px] md:pb-[80px] gap-6 md:gap-[64px] animate-fade-in'
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
        <motion.span
          className="font-['Raleway'] text-[28px] md:text-[48px] font-bold leading-[38px] md:leading-[60px] text-white text-center w-full tracking-[-0.56px] md:tracking-[-1.44px] hover:scale-105 transition-all duration-300 hover:text-shadow-glow"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: 'easeOut',
          }}
        >
          Experienced in Web & App Development
        </motion.span>
        <motion.span
          className="font-['Raleway'] text-[16px] md:text-[18px] font-normal leading-[30px] md:leading-[32px] text-[#a4a7ae] text-center w-full tracking-[-0.48px] md:tracking-[-0.36px] hover:text-white transition-all duration-300"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: 'easeOut',
          }}
        >
          I create user-focused websites that look good, work well, and feel
          right.
        </motion.span>
      </motion.div>

      {/* Content Wrapper */}
      <motion.div
        className='flex flex-col md:flex-row gap-4 md:gap-[17px] w-full'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          delay: 0.3,
        }}
      >
        {/* Skills Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-4 flex-1'>
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className='flex flex-col justify-center items-center rounded-[16px] border border-[#22252b] w-full h-[172px] md:w-[214px] md:h-[214px] p-2 animate-card-enter hover:animate-card-hover transition-all duration-300'
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className='flex justify-center items-center w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full hover:scale-110 transition-transform duration-200'>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className='w-full h-full object-contain'
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              <span className="font-['Raleway'] text-[16px] md:text-[18px] text-white leading-[30px] md:leading-[32px] mb-2 text-center">
                {skill.name}
              </span>
              {/* Progress Bar */}
              <div className='w-full bg-[#22252b] rounded-full h-2 mb-2'>
                <motion.div
                  className='h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full'
                  initial={{ width: 0 }}
                  whileInView={{ width: '80%' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.1 * (index + 1),
                    ease: 'easeOut',
                  }}
                />
              </div>
              <span className='font-["Raleway"] text-[14px] font-medium text-[#a4a7ae] text-center'>
                80%
              </span>
            </div>
          ))}
        </div>

        {/* Quote Card */}
        <motion.div
          className='bg-[#3a0764] rounded-[16px] border border-[#22252b] relative overflow-hidden w-full md:w-[509px] md:h-[445px] h-[303px]'
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.9 }}
          whileHover={{
            y: -5,
            scale: 1.02,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
        >
          <div className='absolute inset-0 bg-[url(/images/background-pattern.png)] bg-no-repeat bg-cover' />
          <div className='relative flex flex-col justify-between w-full h-full p-4 md:p-6'>
            <div className='flex flex-col gap-3 md:gap-4'>
              <span className="font-['Raleway'] text-[20px] md:text-[32px] font-bold leading-[28px] md:leading-[42px] text-white">
                &ldquo;Programming is the art of telling another human what you
                want the computer to do.&rdquo;
              </span>
              <span className="font-['Raleway'] text-[16px] font-normal leading-[30px] text-white">
                — Donald Knuth
              </span>
            </div>
            <div
              className='animate-button-enter hover:animate-button-hover active:animate-button-tap transition-all duration-200'
              style={{ animationDelay: '1.2s' }}
            >
              <Link
                href='#conversation'
                className='flex justify-center items-center bg-white rounded-[8px] h-[48px] px-2 hover:bg-gray-100 transition-colors duration-200 cursor-pointer'
              >
                <span className="font-['Raleway'] text-[14px] md:text-[16px] font-semibold leading-[28px] md:leading-[30px] text-black">
                  Let&apos;s Build Something
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
