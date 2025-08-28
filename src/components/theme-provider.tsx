'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage and apply to document
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    // Apply theme-specific styles
    if (theme === 'light') {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    } else {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <ToggleGroup.Root
      type='single'
      value={theme}
      onValueChange={(value) => {
        if (value) setTheme(value as Theme);
      }}
      className='flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-lg p-1'
    >
      <ToggleGroup.Item
        value='dark'
        className={`flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 ${
          theme === 'dark'
            ? 'bg-white/20 text-white shadow-sm'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
        aria-label='Dark mode'
      >
        <svg
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
        </svg>
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value='light'
        className={`flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 ${
          theme === 'light'
            ? 'bg-white/20 text-white shadow-sm'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
        aria-label='Light mode'
      >
        <svg
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='12' cy='12' r='4' />
          <path d='M12 2v2' />
          <path d='M12 20v2' />
          <path d='m4.93 4.93 1.41 1.41' />
          <path d='m17.66 17.66 1.41 1.41' />
          <path d='M2 12h2' />
          <path d='M20 12h2' />
          <path d='m4.93 19.07-1.41 1.41' />
          <path d='m17.66 6.34-1.41 1.41' />
        </svg>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
