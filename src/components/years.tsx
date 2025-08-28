'use client';

import { useEffect, useRef } from 'react';

export default function Years() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Line is visible, animate to full height
            if (entry.target === line1Ref.current) {
              line1Ref.current!.style.height = '580px';
              line1Ref.current!.style.filter =
                'brightness(0) saturate(100%) invert(84%) sepia(100%) saturate(1000%) hue-rotate(0deg) brightness(100%) contrast(100%)';
            } else if (entry.target === line2Ref.current) {
              line2Ref.current!.style.height = '580px';
              line2Ref.current!.style.filter =
                'brightness(0) saturate(100%) invert(84%) sepia(100%) saturate(1000%) hue-rotate(0deg) brightness(100%) contrast(100%)';
            }
          } else {
            // Line is not visible, reset to start height
            if (entry.target === line1Ref.current) {
              line1Ref.current!.style.height = '50px';
              line1Ref.current!.style.filter = '';
            } else if (entry.target === line2Ref.current) {
              line2Ref.current!.style.height = '50px';
              line2Ref.current!.style.filter = '';
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    // Observe both lines
    if (line1Ref.current) observer.observe(line1Ref.current);
    if (line2Ref.current) observer.observe(line2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className='flex w-full md:w-[1440px] px-6 md:px-[120px] py-[60px] flex-col gap-[64px] items-center shrink-0 relative z-[190]'>
      {/* Header */}
      <div className='flex flex-col gap-[16px] items-center self-stretch shrink-0 relative z-[191] text-center'>
        <span className="font-['Raleway'] text-[28px] md:text-[48px] font-bold leading-[36px] md:leading-[60px] text-[#fff] tracking-[-0.84px] md:tracking-[-1.44px]">
          Years of Building, Learning, and Shipping
        </span>

        <span className="block md:hidden font-['Raleway'] text-[14px] font-normal leading-[24px] text-[#a4a7ae] tracking-[-0.32px]">
          Each role has sharpened my ability to build better <br /> digital
          experiences, faster.
        </span>

        <span className="hidden md:block font-['Raleway'] text-[18px] font-normal leading-[32px] text-[#a4a7ae] tracking-[-0.36px]">
          Each role has sharpened my ability to build better digital
          experiences, faster.
        </span>
      </div>

      {/* === Timeline Item 1 === */}
      <div className='flex flex-col gap-2 md:gap-[16px] items-start w-full max-w-[393px] md:max-w-full relative z-[194] mb-0'>
        {/* Line Years - This will animate from short to long */}
        <div
          ref={line1Ref}
          className='w-px h-[50px] shrink-0 bg-[url(/images/line-years.svg)] bg-cover bg-no-repeat absolute top-0 left-[16px] z-[195]'
          style={{
            transition: 'height 1.2s ease-out, filter 1.2s ease-out',
            minHeight: '50px',
          }}
        />

        {/* Timeline Card */}
        <div className='flex gap-2 md:gap-[24px] items-start w-full relative z-[196]'>
          {/* Circle - Static, no movement */}
          <div className='flex w-[28px] md:w-[32px] p-[6px] items-center justify-center bg-[#8e36a0] rounded-full relative z-[197]'>
            <div className='w-[18px] h-[18px] md:w-[19.2px] md:h-[19.2px] bg-[url(/images/circle1.svg)] bg-cover bg-no-repeat rounded-full z-[198]' />
          </div>

          {/* Card Content */}
          <div className='flex flex-col md:flex-row w-full gap-2 md:gap-[24px] p-2 md:p-[24px] rounded-[16px] border border-[#252b37] relative z-[199] bg-[linear-gradient(to_bottom_right,#34144C,black,#000)] hover:transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300'>
            {/* Tahun + Logo */}
            <div className='flex w-[100px] md:w-[128px] flex-col gap-1 md:gap-2 items-start shrink-0 relative z-[200]'>
              <span className="font-['Raleway'] text-[16px] md:text-[18px] font-bold leading-[24px] md:leading-[32px] text-[#fdfdfd]">
                2025 - Present
              </span>
              <div className='w-[100px] h-[36px] md:w-[128px] md:h-[48px] bg-[url(/images/airbnb.svg)] bg-cover bg-no-repeat' />
            </div>

            {/* Divider */}
            <div className="w-px self-stretch shrink-0 bg-[url('/images/line-years.svg')] bg-repeat-x bg-center relative z-[227]" />

            {/* Descriptions */}
            <div className='flex flex-col gap-1 md:gap-[16px] w-full'>
              {[
                'Develop responsive and user-friendly web interfaces using modern frontend technologies.',
                'Collaborate with UI/UX designers to turn design mockups into functional components.',
                'Optimize web applications for maximum speed and scalability.',
                'Ensure cross-browser and cross-platform compatibility.',
                'Implement reusable code and component libraries for future use.',
              ].map((text, idx) => (
                <div
                  key={idx}
                  className='flex gap-2 md:gap-[8px] items-center hover:transform hover:translate-x-1 transition-transform duration-200'
                >
                  <div className='w-[24px] h-[24px] md:w-[30px] md:h-[30px] flex-shrink-0 bg-[url(/images/star-years.svg)] bg-cover bg-no-repeat' />
                  <span className="font-['Raleway'] text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[26px] text-[#fdfdfd] tracking-[-0.32px] md:tracking-[-0.48px] text-left">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === Timeline Item 2 === */}
      <div className='flex flex-col gap-2 md:gap-[16px] items-start w-full max-w-[393px] md:max-w-full relative z-[194] mb-0'>
        {/* Line Years - This will animate from short to long */}
        <div
          ref={line2Ref}
          className='w-px h-[50px] shrink-0 bg-[url(/images/line-years.svg)] bg-cover bg-no-repeat absolute top-0 left-[16px] z-[195]'
          style={{
            transition: 'height 1.5s ease-in-out, filter 1.5s ease-in-out',
            minHeight: '50px',
          }}
        />

        {/* Timeline Card */}
        <div className='flex gap-2 md:gap-[24px] items-start w-full relative z-[196]'>
          {/* Circle - Static, no movement */}
          <div className='flex w-[28px] md:w-[32px] p-[6px] items-center justify-center bg-[#8e36a0] rounded-full relative z-[197]'>
            <div className='w-[18px] h-[18px] md:w-[19.2px] md:h-[19.2px] bg-[url(/images/circle1.svg)] bg-cover bg-no-repeat rounded-full z-[198]' />
          </div>

          {/* Card Content */}
          <div className='flex flex-col md:flex-row w-full gap-2 md:gap-[24px] p-2 md:p-[24px] rounded-[16px] border border-[#252b37] relative z-[199] hover:transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300'>
            {/* Tahun + Logo */}
            <div className='flex w-[100px] md:w-[128px] flex-col gap-1 md:gap-2 items-start shrink-0 relative z-[200]'>
              <span className="font-['Raleway'] text-[16px] md:text-[18px] font-bold leading-[24px] md:leading-[32px] text-[#fdfdfd]">
                2025 - Present
              </span>
              <div className='w-[100px] h-[36px] md:w-[128px] md:h-[48px] bg-[url(/images/coinbase.svg)] bg-cover bg-no-repeat' />
            </div>

            {/* Divider */}
            <div className="w-px self-stretch shrink-0 bg-[url('/images/line-years.svg')] bg-repeat-x bg-center relative z-[227]" />

            {/* Descriptions */}
            <div className='flex flex-col gap-1 md:gap-[16px] w-full'>
              {[
                'Develop responsive and user-friendly web interfaces using modern frontend technologies.',
                'Collaborate with UI/UX designers to turn design mockups into functional components.',
                'Optimize web applications for maximum speed and scalability.',
                'Ensure cross-browser and cross-platform compatibility.',
                'Implement reusable code and component libraries for future use.',
              ].map((text, idx) => (
                <div
                  key={idx}
                  className='flex gap-2 md:gap-[8px] items-center hover:transform hover:translate-x-1 transition-transform duration-200'
                >
                  <div className='w-[24px] h-[24px] md:w-[30px] md:h-[30px] flex-shrink-0 bg-[url(/images/star-years.svg)] bg-cover bg-no-repeat' />
                  <span className="font-['Raleway'] text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[26px] text-[#fdfdfd] tracking-[-0.32px] md:tracking-[-0.48px] text-left">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === Timeline Item 3 === */}
      <div className='flex flex-col gap-2 md:gap-[16px] items-start w-full max-w-[393px] md:max-w-full relative z-[194] mb-0'>
        {/* Timeline Card */}
        <div className='flex gap-2 md:gap-[24px] items-start w-full relative z-[196]'>
          {/* Circle - Static, no movement */}
          <div className='flex w-[28px] md:w-[32px] p-[6px] items-center justify-center bg-[#8e36a0] rounded-full relative z-[197]'>
            <div className='w-[18px] h-[18px] md:w-[19.2px] md:h-[19.2px] bg-[url(/images/circle1.svg)] bg-cover bg-no-repeat rounded-full z-[198]' />
          </div>

          {/* Card Content */}
          <div className='flex flex-col md:flex-row w-full gap-2 md:gap-[24px] p-2 md:p-[24px] rounded-[16px] border border-[#252b37] relative z-[199] hover:transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300'>
            {/* Tahun + Logo */}
            <div className='flex w-[100px] md:w-[128px] flex-col gap-1 md:gap-2 items-start shrink-0 relative z-[200]'>
              <span className="font-['Raleway'] text-[16px] md:text-[18px] font-bold leading-[24px] md:leading-[32px] text-[#fdfdfd]">
                2025 - Present
              </span>
              <div className='w-[100px] h-[36px] md:w-[128px] md:h-[48px] bg-[url(/images/webflow.svg)] bg-cover bg-no-repeat' />
            </div>

            {/* Divider */}
            <div className="w-px self-stretch shrink-0 bg-[url('/images/line-years.svg')] bg-repeat-x bg-center relative z-[227]" />

            {/* Descriptions */}
            <div className='flex flex-col gap-1 md:gap-[16px] w-full'>
              {[
                'Develop responsive and user-friendly web interfaces using modern frontend technologies.',
                'Collaborate with UI/UX designers to turn design mockups into functional components.',
                'Optimize web applications for maximum speed and scalability.',
                'Ensure cross-browser and cross-platform compatibility.',
                'Implement reusable code and component libraries for future use.',
              ].map((text, idx) => (
                <div
                  key={idx}
                  className='flex gap-2 md:gap-[8px] items-center hover:transform hover:-translate-y-1 transition-transform duration-200'
                >
                  <div className='w-[24px] h-[24px] md:w-[30px] md:h-[30px] flex-shrink-0 bg-[url(/images/star-years.svg)] bg-cover bg-no-repeat' />
                  <span className="font-['Raleway'] text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[26px] text-[#fdfdfd] tracking-[-0.32px] md:tracking-[-0.48px] text-left">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
