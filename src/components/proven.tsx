'use client';

import { motion } from 'framer-motion';

export default function Proven() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const numberVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        type: 'spring' as const,
        bounce: 0.6,
        delay: 0.5,
      },
    },
  };

  const starVariants = {
    hidden: {
      scale: 0,
      rotate: 180,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: 'spring' as const,
        bounce: 0.8,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.2,
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 0.6,
        ease: 'easeInOut' as const,
      },
    },
  };

  const photoVariants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
      rotateY: 90,
      borderRadius: '50%',
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      borderRadius: '16px',
      transition: {
        duration: 1,
        type: 'spring' as const,
        stiffness: 100,
        delay: 0.7,
      },
    },
    hover: {
      scale: 1.1,
      rotateY: [0, 5, -5, 0],
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      transition: {
        duration: 0.4,
        ease: 'easeInOut' as const,
      },
    },
  };

  const lineVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut' as const,
        delay: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
        delay: 0.6,
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  const subheadingVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: 'easeOut' as const,
        delay: 0.3,
      },
    },
  };

  const provenData = [
    {
      id: 1,
      number: '2+',
      text: 'Years\nExperience',
      photo: '/images/profile-photo2.png',
      color: 'from-blue-500 to-purple-600',
    },
    {
      id: 2,
      number: '99%',
      text: 'Client\nSatisfaction',
      photo: '/images/profile-photo3.png',
      color: 'from-green-500 to-blue-600',
    },
    {
      id: 3,
      number: '12+',
      text: 'Project\nDelivered',
      photo: '/images/portofolio1.png',
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <motion.div
      id='proven'
      className='flex flex-col w-full md:w-[1440px] mx-auto pt-[40px] md:pt-[80px] px-4 md:px-[120px] pb-[40px] md:pb-[80px] gap-6 md:gap-[64px] relative z-[62]'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Heading */}
      <motion.div
        className='flex flex-col gap-2 md:gap-4 items-start'
        variants={headingVariants}
      >
        <motion.div
          className="font-['Raleway'] text-[28px] md:text-[48px] font-bold leading-[38px] md:leading-[60px] tracking-[-0.56px] md:tracking-[-1.44px] text-[#fdfdfd]"
          whileHover={{
            scale: 1.02,
            textShadow: '0 0 20px rgba(255,255,255,0.3)',
          }}
          transition={{ duration: 0.3 }}
        >
          Proven Numbers. Real Impact.
        </motion.div>
        <motion.span
          className='text-[16px] md:text-[18px] font-normal leading-[30px] md:leading-[32px] text-[#a4a7ae] tracking-[-0.48px] md:tracking-[-0.36px]'
          variants={subheadingVariants}
        >
          From shipped products to years of experience
        </motion.span>
      </motion.div>

      {/* List Items */}
      <motion.div
        className='flex flex-col gap-6 md:gap-8'
        variants={containerVariants}
      >
        {provenData.map((item, index) => (
          <motion.div key={item.id}>
            {/* Item */}
            <motion.div
              className='flex items-center justify-between gap-4 relative'
              variants={itemVariants}
            >
              {/* Left: Icon + Number */}
              <motion.div
                className='flex items-center gap-2 md:gap-4'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className='w-[28px] h-[28px] md:w-[44px] md:h-[44px] bg-[url(/images/star-proven.svg)] bg-cover'
                  variants={starVariants}
                  whileHover='hover'
                />
                <motion.span
                  className="font-['Raleway'] text-[40px] md:text-[80px] font-bold text-white tracking-[-0.8px] md:tracking-[-1.6px] relative"
                  variants={numberVariants}
                  whileHover={{
                    scale: 1.1,
                    textShadow: '0 0 30px rgba(255,255,255,0.5)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.number}
                  {/* Animated underline */}
                  <motion.div
                    className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent'
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.span>
              </motion.div>

              {/* Middle: Text */}
              <motion.div
                className='flex flex-col justify-center items-center text-center flex-none w-[150px] md:w-[250px]'
                variants={textVariants}
                whileHover={{
                  scale: 1.05,
                  color: '#ffffff',
                }}
                transition={{ duration: 0.3 }}
              >
                <span
                  className="font-['Raleway'] text-[16px] md:text-[32px] font-medium leading-[22px] md:leading-[40px] text-white whitespace-pre-line text-left w-full"
                  style={{
                    transform: `translateX(${
                      item.id === 1 ? '40px' : item.id === 2 ? '10px' : '30px'
                    })`,
                  }}
                >
                  {item.text}
                </span>
              </motion.div>

              {/* Right: Photo */}
              <motion.div
                className='w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-[8px] md:rounded-[16px] bg-cover relative overflow-hidden'
                style={{ backgroundImage: `url(${item.photo})` }}
                variants={photoVariants}
                whileHover='hover'
                layout
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className='absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40'
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating particles effect */}
                <motion.div
                  className='absolute inset-0'
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Divider Line */}
            {index < provenData.length - 1 && (
              <motion.div
                className='h-px bg-[url(/images/line-proven.svg)] bg-cover my-6 md:my-8'
                variants={lineVariants}
                whileHover={{
                  scaleX: 1.1,
                  opacity: 0.8,
                }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Floating background elements */}
      <motion.div
        className='absolute inset-0 pointer-events-none overflow-hidden'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        {/* Animated circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-white/10 rounded-full'
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
