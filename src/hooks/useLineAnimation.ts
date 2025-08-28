import { useEffect, useRef, useCallback, useState } from 'react';
import {
  lineAnimationController,
  LineAnimationConfig,
  LINE_ANIMATION_PRESETS,
} from '@/utils/line-animation';

export interface UseLineAnimationOptions {
  id: string;
  config?: LineAnimationConfig;
  preset?: keyof typeof LINE_ANIMATION_PRESETS;
  enabled?: boolean;
}

/**
 * React hook for line animation
 * @param options Configuration options for the line animation
 * @returns Ref object to attach to the line DOM element
 */
export function useLineAnimation(options: UseLineAnimationOptions) {
  const { id, config, preset, enabled = true } = options;
  const lineRef = useRef<HTMLDivElement>(null);

  // Get configuration (custom config takes precedence over preset)
  const animationConfig: LineAnimationConfig =
    config ||
    (preset
      ? (LINE_ANIMATION_PRESETS[preset] as LineAnimationConfig)
      : (LINE_ANIMATION_PRESETS.smooth as LineAnimationConfig));

  // Add element to controller when ref is available
  const addElement = useCallback(() => {
    if (lineRef.current && enabled) {
      lineAnimationController.addElement(id, lineRef.current, animationConfig);
    }
  }, [id, animationConfig, enabled]);

  // Remove element from controller
  const removeElement = useCallback(() => {
    if (enabled) {
      lineAnimationController.removeElement(id);
    }
  }, [id, enabled]);

  useEffect(() => {
    if (enabled) {
      // Wait for next tick to ensure DOM is ready
      const timer = setTimeout(addElement, 0);
      return () => {
        clearTimeout(timer);
        removeElement();
      };
    }
  }, [addElement, removeElement, enabled]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      removeElement();
    };
  }, [removeElement]);

  // Expose controller methods for manual control
  const triggerAnimation = useCallback(
    (toEnd: boolean) => {
      if (enabled) {
        lineAnimationController.triggerAnimation(id, toEnd);
      }
    },
    [id, enabled]
  );

  const getCurrentHeight = useCallback(() => {
    return lineAnimationController.getCurrentHeight(id);
  }, [id]);

  const isAnimating = useCallback(() => {
    return lineAnimationController.isAnimating(id);
  }, [id]);

  return {
    ref: lineRef,
    triggerAnimation,
    getCurrentHeight,
    isAnimating,
  };
}

/**
 * Hook for managing multiple line animations
 * @param elements Array of element configurations
 * @returns Array of refs and control methods for each element
 */
export function useMultipleLineAnimations(elements: UseLineAnimationOptions[]) {
  // Create refs array outside of useEffect to prevent infinite loops
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array if needed
  if (refs.current.length !== elements.length) {
    refs.current = new Array(elements.length).fill(null);
  }

  // Create extended elements with resolved configs
  const extendedElements = useRef<
    Array<UseLineAnimationOptions & { resolvedConfig: LineAnimationConfig }>
  >([]);

  useEffect(() => {
    // Resolve configs for each element
    extendedElements.current = elements.map((element) => {
      const resolvedConfig: LineAnimationConfig =
        element.config ||
        (element.preset
          ? (LINE_ANIMATION_PRESETS[element.preset] as LineAnimationConfig)
          : (LINE_ANIMATION_PRESETS.smooth as LineAnimationConfig));

      return {
        ...element,
        resolvedConfig,
      };
    });

    return () => {
      extendedElements.current.forEach((element) => {
        if (element.enabled !== false) {
          lineAnimationController.removeElement(element.id);
        }
      });
    };
  }, [elements]);

  // Return ref setters for each element
  const getRefSetter = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      refs.current[index] = el;

      // Add element to controller when ref is available
      if (
        el &&
        extendedElements.current[index] &&
        extendedElements.current[index].enabled !== false
      ) {
        const config = extendedElements.current[index].resolvedConfig;
        lineAnimationController.addElement(
          extendedElements.current[index].id,
          el,
          config
        );
      }
    },
    []
  );

  return elements.map((_, index) => ({
    ref: getRefSetter(index),
    triggerAnimation: (toEnd: boolean) => {
      if (extendedElements.current[index]?.enabled !== false) {
        lineAnimationController.triggerAnimation(elements[index].id, toEnd);
      }
    },
    getCurrentHeight: () => {
      if (extendedElements.current[index]?.enabled !== false) {
        return lineAnimationController.getCurrentHeight(elements[index].id);
      }
      return null;
    },
    isAnimating: () => {
      if (extendedElements.current[index]?.enabled !== false) {
        return lineAnimationController.isAnimating(elements[index].id);
      }
      return false;
    },
    id: elements[index].id,
  }));
}

/**
 * Hook for getting line animation status
 * @returns Object with animation status and control methods
 */
export function useLineAnimationStatus() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      // Since we can't access private property, we'll assume it's active when hook is used
      setIsActive(true);
    };

    // Check initial status
    checkStatus();

    // Set up interval to check status
    const interval = setInterval(checkStatus, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    isActive,
    start: () => lineAnimationController.start(),
    stop: () => lineAnimationController.stop(),
    destroy: () => lineAnimationController.destroy(),
  };
}
