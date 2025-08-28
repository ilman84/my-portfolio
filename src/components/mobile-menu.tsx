'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import {
  navigationItems,
  handleNavigation,
  handleGetInTouch,
} from '../types/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MobileMenu({ isOpen, onOpenChange }: MobileMenuProps) {
  const handleItemClick = (href: string) => {
    handleNavigation(href);
    onOpenChange(false); // Close menu after navigation
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/50 z-50' />
        <Dialog.Content className='fixed top-0 right-0 h-full w-[280px] bg-black z-50 p-6 shadow-xl overflow-y-auto'>
          <Dialog.Title asChild>
            <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
          </Dialog.Title>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-xl font-bold text-white'>Menu</h2>
            <Dialog.Close asChild>
              <button className='p-2 hover:bg-gray-800 rounded-full'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18 6L6 18M6 6L18 18'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </Dialog.Close>
          </div>

          <nav className='space-y-4'>
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.href)}
                className='w-full text-left p-3 hover:bg-gray-800 rounded-lg transition-colors'
              >
                <div className='text-lg font-medium text-white'>
                  {item.label}
                </div>
                {item.description && (
                  <div className='text-sm text-gray-300 mt-1'>
                    {item.description}
                  </div>
                )}
              </button>
            ))}
          </nav>

          {/* Get in Touch Button */}
          <div className='mt-8 pt-6 border-t border-gray-700 pb-6'>
            <button
              onClick={handleGetInTouch}
              className='w-full bg-white text-black py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors'
            >
              Get in Touch
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
