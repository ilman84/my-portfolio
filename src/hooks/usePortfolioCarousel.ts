import { useState, useCallback } from 'react';

export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

export const usePortfolioCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image: '/images/portofolio1.png',
      title: 'Portfolio 1',
      description: 'Frontend development project',
      link: 'https://challenge-12-ilman84.vercel.app/',
    },
    {
      id: 2,
      image: '/images/portofolio2.png',
      title: 'Portfolio 2',
      description: 'Web application design',
      link: 'https://challenge-11-ilman84.vercel.app/',
    },
    {
      id: 3,
      image: '/images/portofolio3.png',
      title: 'Portfolio 3',
      description: 'UI/UX design project',
      link: 'https://challenge-9-ilman84.vercel.app/',
    },
    {
      id: 4,
      image: '/images/portofolio4.png',
      title: 'Portfolio 4',
      description: 'Modern web development',
      link: 'https://ilman84.github.io/roove-collagen-drink/',
    },
    {
      id: 5,
      image: '/images/portofolio5.png',
      title: 'Portfolio 5',
      description: 'Creative design solution',
      link: 'https://challenge-8-ilman84.vercel.app/',
    },
    {
      id: 6,
      image: '/images/portofolio6.png',
      title: 'Portfolio 6',
      description: 'Innovative web project',
      link: 'https://portofoliocompanyprofile3.vercel.app/',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
  }, [portfolioItems.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  }, [portfolioItems.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return {
    currentIndex,
    portfolioItems,
    nextSlide,
    prevSlide,
    goToSlide,
  };
};
