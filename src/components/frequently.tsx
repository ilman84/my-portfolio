'use client';

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
    <div
      id='frequently'
      className='flex flex-col px-4 md:px-[120px] py-8 md:py-16 gap-6 md:gap-16 items-center w-full md:w-[1440px] relative z-[346]'
    >
      {/* Container */}
      <div className='flex flex-col gap-16 w-full'>
        {/* Header */}
        <div className='flex flex-col gap-4 items-center w-full font-[raleway]'>
          <span className='text-[24px] md:text-5xl font-bold leading-snug md:leading-[60px] text-white text-center '>
            Frequently Asked Questions
          </span>
          <span className='text-sm md:text-lg text-[#a4a7ae] text-center leading-snug md:leading-8'>
            Got questions? Here are the answers to the ones we get asked the
            most.
          </span>
        </div>

        {/* Accordion Questions */}
        <div className='w-full max-w-6xl mx-auto'>
          <div className='bg-black rounded-lg p-4 md:p-8'>
            {items.map((item) => (
              <Accordion
                key={item.id}
                title={item.title}
                content={item.content}
                isOpen={item.isOpen}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
