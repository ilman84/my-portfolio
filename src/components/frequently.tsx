'use client';

import { motion } from 'framer-motion';
import { useAccordion } from '../hooks/useAccordion';
import { Accordion } from './accordion';

export default function Frequently() {
  const accordionItems = [
    {
      id: 'technologies',
      title: 'What technologies do you work with?',
      content:
        'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
    },
    {
      id: 'freelance',
      title: 'Do you work on freelance or remote projects?',
      content:
        'Yes, I am available for freelance and remote projects. I can work on various types of web development projects, from small websites to complex web applications. I am flexible with project timelines and can adapt to different time zones.',
    },
    {
      id: 'figma-conversion',
      title: 'Can you convert Figma or Sketch designs into code?',
      content:
        'Absolutely! I specialize in converting design files from Figma, Sketch, Adobe XD, or any other design tool into pixel-perfect, responsive code. I ensure the final product matches the design exactly while maintaining clean, maintainable code.',
    },
    {
      id: 'collaboration',
      title: 'Do you collaborate with backend developers or teams?',
      content:
        'Yes, I have experience working in teams and collaborating with backend developers, designers, and project managers. I can integrate with REST APIs, GraphQL endpoints, and work with various backend technologies. I am comfortable using Git for version control and following team workflows.',
    },
    {
      id: 'fulltime',
      title: 'Are you available for full-time roles?',
      content:
        'I am currently focused on freelance and project-based work, but I&apos;m open to discussing full-time opportunities for the right company and role. I am particularly interested in remote positions and companies that value innovation and growth.',
    },
  ];

  const { items, toggleItem } = useAccordion(accordionItems);

  const handleToggle = (id: string) => {
    console.log('Frequently: Toggling accordion item:', id);
    toggleItem(id);
  };

  return (
    <motion.div
      id='frequently'
      className='flex flex-col px-4 md:px-[120px] py-8 md:py-16 gap-6 md:gap-16 items-center w-full md:w-[1440px] relative z-[346]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
      }}
    >
      {/* Container */}
      <div className='flex flex-col gap-16 w-full'>
        {/* Header */}
        <motion.div
          className='flex flex-col gap-4 items-center w-full font-[raleway]'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: 'easeOut',
          }}
        >
          <motion.span
            className='text-[24px] md:text-5xl font-bold leading-snug md:leading-[60px] text-white text-center hover:scale-105 transition-all duration-300'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: 'easeOut',
            }}
          >
            Frequently Asked Questions
          </motion.span>
          <motion.span
            className='text-sm md:text-lg text-[#a4a7ae] text-center leading-snug md:leading-8 hover:text-white transition-all duration-300'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: 'easeOut',
            }}
          >
            Got questions? Here are the answers to the ones we get asked the
            most.
          </motion.span>
        </motion.div>

        {/* Accordion Questions */}
        <motion.div
          className='w-full max-w-6xl mx-auto'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: 'easeOut',
          }}
        >
          <div className='bg-black rounded-lg p-4 md:p-8'>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.1,
                  ease: 'easeOut',
                }}
              >
                <Accordion
                  title={item.title}
                  content={item.content}
                  isOpen={item.isOpen}
                  onToggle={() => handleToggle(item.id)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
