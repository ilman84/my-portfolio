'use client';

import Image from 'next/image';
import { usePortfolioCarousel } from '../hooks/usePortfolioCarousel';

export const PortfolioViewer = () => {
  const { currentIndex, portfolioItems, nextSlide, prevSlide, goToSlide } =
    usePortfolioCarousel();

  const handlePortfolioClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className='w-full max-w-6xl mx-auto'>
      {/* Main Viewer */}
      <div className='relative mb-6'>
        {/* Main Image Container */}
        <div className='relative h-80 md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
          <Image
            src={portfolioItems[currentIndex]?.image}
            alt={portfolioItems[currentIndex]?.title}
            fill
            className='object-contain'
            priority={currentIndex === 0}
          />

          {/* Overlay with Info */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none'>
            <div className='absolute bottom-0 left-0 right-0 p-6'>
              <h3 className='text-2xl md:text-4xl font-bold text-white mb-2'>
                {portfolioItems[currentIndex]?.title}
              </h3>
              <p className='text-lg text-gray-200 opacity-90'>
                {portfolioItems[currentIndex]?.description}
              </p>
            </div>
          </div>

          {/* Clickable Portfolio Link */}
          <button
            onClick={() =>
              handlePortfolioClick(portfolioItems[currentIndex]?.link)
            }
            className='absolute inset-0 w-full h-full cursor-pointer group'
            aria-label={`Visit ${portfolioItems[currentIndex]?.title}`}
          >
            <div className='absolute inset-0 bg-transparent group-hover:bg-blue-500/10 transition-colors duration-300'></div>
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10'
            aria-label='Previous portfolio'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10'
            aria-label='Next portfolio'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>

          {/* Visit Portfolio Button */}
          <button
            onClick={() =>
              handlePortfolioClick(portfolioItems[currentIndex]?.link)
            }
            className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 z-10'
          >
            Visit Portfolio →
          </button>
        </div>

        {/* Slide Counter */}
        <div className='absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm z-10'>
          {currentIndex + 1} / {portfolioItems.length}
        </div>
      </div>

      {/* Thumbnail Navigator */}
      <div className='px-2'>
        <div className='flex gap-3 overflow-x-auto pb-4 scrollbar-hide'>
          {portfolioItems.map((item, index) => (
            <div key={item.id} className='flex flex-col items-center'>
              <button
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 group relative transition-all duration-300 ${
                  index === currentIndex
                    ? 'scale-110 ring-4 ring-blue-500 ring-offset-2 ring-offset-gray-900'
                    : 'hover:scale-105'
                }`}
              >
                {/* Thumbnail Image */}
                <div className='relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={96}
                    height={96}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                  />

                  {/* Active Indicator */}
                  {index === currentIndex && (
                    <div className='absolute inset-0 bg-blue-500/20 flex items-center justify-center'>
                      <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
                    </div>
                  )}
                </div>
              </button>

              {/* Thumbnail Label */}
              <div className='mt-2 text-center'>
                <p
                  className={`text-xs font-medium transition-colors duration-300 ${
                    index === currentIndex
                      ? 'text-blue-400'
                      : 'text-gray-400 group-hover:text-gray-300'
                  }`}
                >
                  {item.title}
                </p>

                {/* Visit Link Button */}
                <button
                  onClick={() => handlePortfolioClick(item.link)}
                  className='mt-1 text-xs text-blue-500 hover:text-blue-400 underline transition-colors duration-300'
                >
                  Visit →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Swipe Indicator */}
      <div className='md:hidden text-center mt-4'>
        <p className='text-sm text-gray-400'>Swipe left/right to navigate</p>
      </div>
    </div>
  );
};
