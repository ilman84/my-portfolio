'use client';

import { motion } from 'framer-motion';

export default function Trusted() {
  return (
    <div className='flex w-full md:w-[1440px] px-4 md:px-[120px] py-5 flex-col gap-16 items-center relative z-[297]'>
      {/* Header */}
      <motion.div
        className='flex flex-col gap-4 items-center w-full md:w-[1440px]'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <motion.span
          className='text-[28px] md:text-5xl font-bold leading-snug md:leading-[60px] text-white text-center font-[raleway]'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: 'easeOut',
          }}
        >
          Trusted by Teams, Valued by Clients
        </motion.span>
        <motion.span
          className='text-sm md:text-lg text-[#a4a7ae] text-center leading-snug md:leading-8'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: 'easeOut',
          }}
        >
          A few kind words from the people behind the projects Ilman helped
          bring to life.
        </motion.span>
      </motion.div>

      {/* Cards Container */}
      <motion.div
        className='flex flex-col md:flex-row gap-4 md:gap-5 w-full items-center'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          delay: 0.3,
        }}
      >
        {/* Card 1 */}
        <motion.div
          className='flex flex-col gap-6 md:gap-16 p-5 md:p-5 rounded-lg border border-white bg-gradient-to-br from-[#34144C] via-[#34144C]/10 to-black w-full md:w-[30%]'
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: 'easeOut',
          }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="w-32 h-12 md:w-32 md:h-12 bg-[url('/images/airbnb2.svg')] bg-cover bg-no-repeat" />
          <div className='flex gap-1'>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 bg-[url('/images/star-trusted.svg')] bg-cover bg-no-repeat"
              />
            ))}
          </div>
          <span className='text-sm md:text-base text-[#fdfdfd] leading-8'>
            &ldquo;Ilman delivered clean and efficient code that made our app
            load faster and feel smoother. He&apos;s a pleasure to work
            with.&rdquo;
          </span>
          <div className='flex flex-col gap-1'>
            <span className='text-base md:text-lg font-bold text-[#fdfdfd]'>
              Sarah Liem
            </span>
            <span className='text-sm md:text-base text-[#717680]'>
              Product Manager at Techlynk
            </span>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className='flex flex-col gap-6 md:gap-16 p-5 md:p-5 rounded-lg border border-white bg-gradient-to-br from-[#34144C] via-[#34144C]/10 to-black w-full md:w-[30%]'
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: 'easeOut',
          }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="w-32 h-12 md:w-32 md:h-12 bg-[url('/images/coinbase2.svg')] bg-cover bg-no-repeat" />
          <div className='flex gap-1'>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 bg-[url('/images/star-trusted.svg')] bg-cover bg-no-repeat"
              />
            ))}
          </div>
          <span className='text-sm md:text-base text-[#fdfdfd] leading-8'>
            &ldquo;Ilman delivered clean and efficient code that made our app
            load faster and feel smoother. He&apos;s a pleasure to work
            with.&rdquo;
          </span>
          <div className='flex flex-col gap-1'>
            <span className='text-base md:text-lg font-bold text-[#fdfdfd]'>
              Sarah Liem
            </span>
            <span className='text-sm md:text-base text-[#717680]'>
              Product Manager at Techlynk
            </span>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className='flex flex-col gap-6 md:gap-16 p-5 md:p-5 rounded-lg border border-white bg-gradient-to-br from-[#34144C] via-[#34144C]/10 to-black w-full md:w-[30%]'
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: 'easeOut',
          }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="w-32 h-12 md:w-32 md:h-12 bg-[url('/images/webflow2.svg')] bg-cover bg-no-repeat" />
          <div className='flex gap-1'>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 bg-[url('/images/star-trusted.svg')] bg-cover bg-no-repeat"
              />
            ))}
          </div>
          <span className='text-sm md:text-base text-[#fdfdfd] leading-8'>
            &ldquo;Ilman delivered clean and efficient code that made our app
            load faster and feel smoother. He&apos;s a pleasure to work
            with.&rdquo;
          </span>
          <div className='flex flex-col gap-1'>
            <span className='text-base md:text-lg font-bold text-[#fdfdfd]'>
              Sarah Liem
            </span>
            <span className='text-sm md:text-base text-[#717680]'>
              Product Manager at Techlynk
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
