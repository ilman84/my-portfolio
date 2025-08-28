export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  component?: string;
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '#hero',
    description: 'Go to home page',
    component: 'hero',
  },
  {
    id: 'about',
    label: 'About',
    href: '#proven',
    description: 'Learn more about me',
    component: 'proven',
  },
  {
    id: 'skill',
    label: 'Skill',
    href: '#experienced',
    description: 'View my skills and expertise',
    component: 'experienced',
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '#frontend',
    description: 'Browse my portfolio projects',
    component: 'frontend',
  },
  {
    id: 'faq',
    label: 'FAQ',
    href: '#frequently',
    description: 'Frequently asked questions',
    component: 'frequently',
  },
];

export const handleNavigation = (href: string) => {
  // Handle hash navigation
  if (href.startsWith('#')) {
    const targetId = href.substring(1); // Remove the # symbol

    // Special handling for home navigation
    if (targetId === 'hero') {
      // Check if we're on desktop or mobile
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        // For desktop, scroll to top of page (hero section)
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        // For mobile, scroll to hero section
        const targetElement = document.querySelector('#hero');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
      return;
    }

    // For other navigation items
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
};

export const handleLogoClick = () => {
  // Scroll to top of page (hero section)
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const handleGetInTouch = () => {
  // Navigate to conversation component
  const element = document.querySelector('#conversation');
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const handleMobileMenuToggle = (
  isOpen: boolean,
  setIsOpen: (open: boolean) => void
) => {
  setIsOpen(!isOpen);
};
