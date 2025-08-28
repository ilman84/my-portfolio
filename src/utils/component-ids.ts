// Component IDs for navigation
export const COMPONENT_IDS = {
  HERO: 'hero',
  PROVEN: 'proven',
  EXPERIENCED: 'experienced',
  FRONTEND: 'frontend',
  FREQUENTLY: 'frequently',
  CONVERSATION: 'conversation',
} as const;

// Function to add ID to component
export const addComponentId = (id: string) => {
  return { id };
};

// Function to scroll to component
export const scrollToComponent = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
