'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import MobileMenu from './mobile-menu';
import Navbar from './navbar';

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Sticky Navbar */}
      <Navbar onMobileMenuOpen={() => setIsMobileMenuOpen(true)} />

      {/* Mobile & Tablet */}
      <motion.div
        id='hero'
        className='lg:hidden main-container flex w-full max-w-[393px] gap-[8px] items-center flex-nowrap bg-[#000] relative overflow-hidden mx-auto my-0 font-["Raleway"] transition-all duration-500 ease-in-out pt-[80px]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className='flex w-full max-w-[393px] flex-col items-start shrink-0 flex-nowrap relative overflow-hidden transition-all duration-500 ease-in-out'>
          <motion.div
            className='w-[1009.451px] h-[626px] shrink-0 bg-[url(/images/gradient.svg)] bg-cover bg-no-repeat absolute top-[200px] left-[-200px] z-[1] transition-all duration-500 ease-in-out'
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <div className='w-full max-w-[393px] h-[852px] shrink-0 relative overflow-hidden z-[2] transition-all duration-500 ease-in-out'>
            <motion.div
              className='w-[560px] h-full bg-[url(/images/background-mobile.png)] bg-cover bg-no-repeat absolute top-0 left-1/2 translate-x-[-49.91%] translate-y-0 z-[3] transition-all duration-500 ease-in-out'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
            {/* Light beam effect */}
            <motion.div
              className='absolute inset-0 z-[4] bg-gradient-to-br from-transparent via-yellow-400/20 to-transparent transition-all duration-500 ease-in-out'
              animate={{
                x: [-200, 200],
                y: [-200, 200],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
              }}
            />

            <div className='w-[411.878px] h-[953.823px] bg-[url(/images/overlay-mobile.svg)] bg-cover bg-no-repeat absolute top-1/2 left-1/2 translate-x-[-51.84%] translate-y-[-44.66%] z-[4] mix-blend-overlay transition-all duration-500 ease-in-out' />
            <motion.span
              className="flex h-[8.33%] justify-start items-start font-['Raleway'] text-[55.47336959838867px] font-bold leading-[70.219px] text-[rgba(217,217,217,0.1)] tracking-[-2.77px] absolute top-[8.22%] left-[calc(50%-163.5px)] text-left whitespace-nowrap z-[5] transition-all duration-500 ease-in-out"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              PORTOFOLIO
            </motion.span>
            <motion.div
              className='w-[319.184px] h-[414px] bg-[#fff] rounded-tl-[938775.5px] rounded-tr-[938775.5px] rounded-br-none rounded-bl-none absolute top-[107px] left-1/2 translate-x-[-49.97%] translate-y-0 overflow-hidden z-[11] transition-all duration-500 ease-in-out'
              initial={{ y: 100, opacity: 0, rotateY: 90 }}
              animate={{ y: 0, opacity: 1, rotateY: 0 }}
              transition={{
                duration: 1.2,
                delay: 1.0,
                type: 'spring',
                stiffness: 100,
              }}
            >
              <motion.div
                className='w-[414px] h-[414px] bg-[url(/images/profile-photo.png)] bg-cover bg-no-repeat absolute top-0 left-[-47.875px] z-[12] cursor-pointer'
                whileHover={{ rotate: [0, -2, 2, -2, 0], y: [0, -2, 2, -2, 0] }}
                transition={{
                  duration: 0.6,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
            <motion.div
              className='w-[100px] h-[100px] bg-[url(/images/big-star.png)] bg-cover bg-no-repeat absolute top-[122px] left-[270px] overflow-hidden z-[13]'
              initial={{ y: 100, opacity: 0, scale: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className='flex w-[361px] h-[108px] justify-between items-start flex-nowrap absolute top-[467px] left-1/2 translate-x-[-50%] translate-y-0 z-[23]'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <motion.div
                className='flex w-[217px] flex-col gap-[-4px] items-start shrink-0 flex-nowrap relative z-[24]'
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <motion.span
                  className="h-[56px] self-stretch shrink-0 basis-auto font-['Raleway'] text-[40px] font-bold leading-[56px] text-[#fff] tracking-[-2px] relative text-left whitespace-nowrap z-[25]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  ILMAN
                </motion.span>
                <motion.span
                  className="h-[56px] self-stretch shrink-0 basis-auto font-['Raleway'] text-[40px] font-bold leading-[56px] text-[#fff] tracking-[-2px] relative text-left whitespace-nowrap z-[26]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                >
                  BAIHAQI
                </motion.span>
              </motion.div>
              <motion.div
                className='w-[97px] h-[97px] shrink-0 bg-[#fff] rounded-[121.25px] relative overflow-hidden z-[27] flex items-center justify-center'
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.8,
                  type: 'spring',
                  bounce: 0.8,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className='w-[97px] h-[97px] bg-[url(/images/frontend-icon.png)] bg-contain bg-no-repeat bg-center'
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </motion.div>
            <motion.div
              className='flex w-[313px] h-[156px] flex-col gap-[24px] items-start flex-nowrap absolute top-[587px] left-[16px] z-[14]'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
            >
              <motion.div
                className='flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[15]'
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.4 }}
              >
                <motion.span
                  className="h-[32px] self-stretch shrink-0 basis-auto font-['Raleway'] text-[18px] font-bold leading-[32px] text-[#fff] relative text-left whitespace-nowrap z-[16]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.6 }}
                >
                  About me
                </motion.span>
                <motion.span
                  className="flex w-[313px] h-[56px] justify-start items-start self-stretch shrink-0 font-['Raleway'] text-[14px] font-semibold leading-[28px] text-[#fdfdfd] relative text-left z-[17]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.8 }}
                >
                  Passionate about frontend development, I focus on crafting
                  digital products.
                </motion.span>
              </motion.div>
              <motion.div
                className='flex w-[208px] h-[40px]  pr-0  pl-0 gap-[12px] items-center shrink-0 flex-nowrap relative z-[18]'
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 3.0,
                  type: 'spring',
                  bounce: 0.6,
                }}
              >
                {[
                  { src: '/images/white-fb.png', z: 19 },
                  { src: '/images/white-ig.png', z: 20 },
                  { src: '/images/white-in.png', z: 21 },
                  { src: '/images/white-tiktok.png', z: 22 },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    className={`w-[40px] h-[40px] shrink-0 bg-cover bg-no-repeat rounded-full relative z-[${social.z}]`}
                    style={{ backgroundImage: `url(${social.src})` }}
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 3.2 + index * 0.1,
                      type: 'spring',
                      bounce: 0.8,
                    }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className='w-[73.365px] h-[12.79%] rounded-[69.872px] border-solid border-[0.7px] border-[rgba(255,255,255,0.2)] absolute top-[94.13%] left-1/2 translate-x-[-49.75%] translate-y-0 overflow-hidden z-[60]'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.6 }}
            >
              <motion.div
                className='w-[24.455px] h-[24.455px] bg-[url(/images/scroll-icon.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[61] mt-[17.045px] mr-0 mb-0 ml-[24.455px]'
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Desktop 1024px+ */}
      <motion.div
        id='hero-desktop'
        className='hidden lg:block w-full bg-[#000] transition-all duration-500 ease-in-out'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className='mx-auto w-[1440px] h-[945px] relative overflow-hidden font-["Raleway"]'>
          {/* Background */}
          <div className="absolute inset-0 bg-[url('/images/background-pattern.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[url('/images/overlay-image.svg')] bg-cover bg-center mix-blend-overlay opacity-60" />
          {/* Light beam effect */}
          <motion.div
            className='absolute inset-0 z-[5] bg-gradient-to-br from-transparent via-yellow-400/30 to-transparent'
            animate={{
              x: [-400, 400],
              y: [-400, 400],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'easeInOut',
            }}
          />

          {/* Content */}
          <motion.div
            className='relative z-[11] mt-[140px] px-[120px] flex gap-[80px] items-start'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            {/* Left name */}
            <motion.div
              className='relative flex flex-col mt-[220px]'
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.0 }}
            >
              <motion.span
                className='block text-[80px] font-bold leading-[91px] text-white tracking-[-1.6px]'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                ILMAN
              </motion.span>
              <motion.span
                className='block text-[80px] font-bold leading-[91px] text-white tracking-[-1.6px]'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4 }}
              >
                BAIHAQI
              </motion.span>

              {/* Frontend icon (desktop) - posisi mirip mobile, di kanan nama */}
              <motion.div
                className='absolute top-[250px] -right-[520px] w-[120px] h-[120px] bg-[#fff] rounded-full overflow-hidden z-[12] flex items-center justify-center'
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 2.6,
                  type: 'spring',
                  bounce: 0.8,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className='w-[120px] h-[120px] bg-[url(/images/frontend-icon.png)] bg-contain bg-no-repeat bg-center'
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </motion.div>

            {/* Center profile image with big star */}
            <motion.div
              className='relative w-[383px] h-[496px] shrink-0 mt-[80px]'
              initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{
                duration: 1.2,
                delay: 2.2,
                type: 'spring',
                stiffness: 100,
              }}
            >
              <motion.div
                className='absolute -right-[30px] w-[126px] h-[126px] bg-[url(/images/big-star.png)] bg-cover bg-no-repeat z-[12]'
                initial={{ y: 100, opacity: 0, scale: 0 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className='w-full h-full bg-[url(/images/foto-profile-desktop.png)] bg-contain bg-no-repeat bg-center relative z-[11] cursor-pointer'
                whileHover={{ rotate: [0, -2, 2, -2, 0], y: [0, -2, 2, -2, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Right about + socials */}
            <motion.div
              className='flex flex-col mt-[220px]'
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.4 }}
            >
              <motion.div
                className='text-[32px] font-bold leading-[42px] text-white mb-2'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.6 }}
              >
                About me
              </motion.div>
              <motion.div
                className='text-[16px] font-semibold leading-[30px] text-[#fdfdfd] max-w-[420px]'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
              >
                Passionate about frontend development, I focus on crafting
                digital products.
              </motion.div>
              <motion.div
                className='mt-6 flex w-[228px] gap-[12px] items-center'
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 3.0,
                  type: 'spring',
                  bounce: 0.6,
                }}
              >
                {[
                  { src: '/images/fb.png' },
                  { src: '/images/IG.png' },
                  { src: '/images/linkedin.png' },
                  { src: '/images/tiktok.png' },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    className={`w-[40px] h-[40px] bg-contain bg-center bg-no-repeat rounded-full`}
                    style={{ backgroundImage: `url(${social.src})` }}
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 3.2 + index * 0.1,
                      type: 'spring',
                      bounce: 0.8,
                    }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Background text */}
          <motion.span
            className="block font-['Raleway'] text-[142px] font-bold leading-[179px] text-[rgba(217,217,217,0.1)] tracking-[-7px] absolute top-[130px] left-1/2 -translate-x-1/2 z-[5]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.0 }}
          >
            PORTOFOLIO
          </motion.span>

          {/* Scroll Icon (desktop) */}
          <motion.div
            className='absolute bottom-[-55px] left-1/2 -translate-x-1/2 z-[15] flex justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.6 }}
          >
            <motion.div
              className='w-[105px] h-[156px] rounded-[100px] border border-[rgba(255,255,255,0.2)] flex justify-center items-start'
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className='w-[35px] h-[35px] bg-[url(/images/scroll-icon.svg)] bg-cover bg-no-repeat mt-[43px]'
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onOpenChange={setIsMobileMenuOpen}
      />
    </>
  );
}
