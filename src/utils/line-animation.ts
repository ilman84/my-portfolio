export interface LineAnimationConfig {
  startHeight: number; // Height when starting (short)
  endHeight: number; // Height when fully visible (long)
  duration: number; // Animation duration in milliseconds
  easing: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  threshold: number; // Intersection threshold (0-1)
  startColor?: string; // Color when starting
  endColor?: string; // Color when fully extended
  colorDuration?: number; // Color animation duration
}

export class LineAnimationController {
  private elements: Map<string, HTMLElement> = new Map();
  private configs: Map<string, LineAnimationConfig> = new Map();
  private observers: Map<string, IntersectionObserver> = new Map();
  private isActive: boolean = false;

  constructor() {
    this.handleIntersection = this.handleIntersection.bind(this);
  }

  /**
   * Add a line element to be animated
   * @param id Unique identifier for the element
   * @param element DOM element to animate
   * @param config Animation configuration
   */
  addElement(
    id: string,
    element: HTMLElement,
    config: LineAnimationConfig
  ): void {
    this.elements.set(id, element);
    this.configs.set(id, config);

    // Set initial height and color
    element.style.height = `${config.startHeight}px`;
    element.style.transition = `height ${config.duration}ms ${config.easing}`;
    element.style.overflow = 'hidden';

    // Set initial color if specified
    if (config.startColor) {
      element.style.filter = `brightness(0) saturate(100%) invert(84%) sepia(100%) saturate(1000%) hue-rotate(0deg) brightness(100%) contrast(100%)`;
      element.style.transition = `height ${config.duration}ms ${
        config.easing
      }, filter ${config.colorDuration || config.duration}ms ${config.easing}`;
    }

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => this.handleIntersection(id, entries),
      {
        threshold: config.threshold,
        rootMargin: '0px 0px -100px 0px', // Start animation before fully visible
      }
    );

    observer.observe(element);
    this.observers.set(id, observer);
  }

  /**
   * Remove an element from animation
   * @param id Element identifier
   */
  removeElement(id: string): void {
    const element = this.elements.get(id);
    const observer = this.observers.get(id);

    if (observer) {
      observer.disconnect();
      this.observers.delete(id);
    }

    if (element) {
      // Reset element styles
      element.style.height = '';
      element.style.transition = '';
      element.style.overflow = '';
      element.style.filter = '';
      this.elements.delete(id);
    }

    this.configs.delete(id);
  }

  /**
   * Handle intersection observer callback
   * @param id Element identifier
   * @param entries Intersection observer entries
   */
  private handleIntersection(
    id: string,
    entries: IntersectionObserverEntry[]
  ): void {
    const entry = entries[0];
    const element = this.elements.get(id);
    const config = this.configs.get(id);

    if (!element || !config) return;

    if (entry.isIntersecting) {
      // Element is visible, animate to full height and yellow color
      element.style.height = `${config.endHeight}px`;

      // Change to yellow color when extending
      if (config.startColor) {
        element.style.filter = `brightness(0) saturate(100%) invert(84%) sepia(100%) saturate(1000%) hue-rotate(0deg) brightness(100%) contrast(100%)`;
      }
    } else {
      // Element is not visible, reset to start height and original color
      element.style.height = `${config.startHeight}px`;

      // Reset to original color
      if (config.startColor) {
        element.style.filter = '';
      }
    }
  }

  /**
   * Manually trigger animation for an element
   * @param id Element identifier
   * @param toEnd Whether to animate to end height (true) or start height (false)
   */
  triggerAnimation(id: string, toEnd: boolean): void {
    const element = this.elements.get(id);
    const config = this.configs.get(id);

    if (!element || !config) return;

    if (toEnd) {
      element.style.height = `${config.endHeight}px`;
      // Change to yellow color
      if (config.startColor) {
        element.style.filter = `brightness(0) saturate(100%) invert(84%) sepia(100%) saturate(1000%) hue-rotate(0deg) brightness(100%) contrast(100%)`;
      }
    } else {
      element.style.height = `${config.startHeight}px`;
      // Reset to original color
      if (config.startColor) {
        element.style.filter = '';
      }
    }
  }

  /**
   * Get current height of an element
   * @param id Element identifier
   * @returns Current height in pixels or null if element not found
   */
  getCurrentHeight(id: string): number | null {
    const element = this.elements.get(id);
    if (!element) return null;

    return element.offsetHeight;
  }

  /**
   * Check if element is currently animating
   * @param id Element identifier
   * @returns True if element is animating
   */
  isAnimating(id: string): boolean {
    const element = this.elements.get(id);
    if (!element) return false;

    return element.style.transition !== '';
  }

  /**
   * Start the line animation system
   */
  start(): void {
    if (this.isActive) return;
    this.isActive = true;
  }

  /**
   * Stop the line animation system
   */
  stop(): void {
    if (!this.isActive) return;

    this.isActive = false;

    // Disconnect all observers
    this.observers.forEach((observer) => observer.disconnect());
    this.observers.clear();

    // Reset all elements
    this.elements.forEach((element, id) => {
      this.removeElement(id);
    });
  }

  /**
   * Clean up resources
   */
  destroy(): void {
    this.stop();
    this.elements.clear();
    this.configs.clear();
  }
}

// Predefined configurations for different line animation patterns
export const LINE_ANIMATION_PRESETS = {
  // Smooth line extension with yellow color
  smooth: {
    startHeight: 0,
    endHeight: 580,
    duration: 1200,
    easing: 'ease-out',
    threshold: 0.1,
    startColor: '#000000', // Original color
    endColor: '#FFD700', // Yellow color
    colorDuration: 1200,
  },

  // Quick line extension with yellow color
  quick: {
    startHeight: 0,
    endHeight: 580,
    duration: 600,
    easing: 'ease-in-out',
    threshold: 0.2,
    startColor: '#000000',
    endColor: '#FFD700',
    colorDuration: 600,
  },

  // Gradual line extension with yellow color
  gradual: {
    startHeight: 50,
    endHeight: 580,
    duration: 1500,
    easing: 'ease-in-out',
    threshold: 0.05,
    startColor: '#000000',
    endColor: '#FFD700',
    colorDuration: 1500,
  },

  // Bounce line extension with yellow color
  bounce: {
    startHeight: 0,
    endHeight: 580,
    duration: 1000,
    easing: 'ease-out',
    threshold: 0.15,
    startColor: '#000000',
    endColor: '#FFD700',
    colorDuration: 1000,
  },
};

// Create and export a default instance
export const lineAnimationController = new LineAnimationController();

// Auto-start when imported (optional)
if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      lineAnimationController.start();
    });
  } else {
    lineAnimationController.start();
  }
}
