import { useState, useCallback } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
}

export const useAccordion = (initialItems: Omit<AccordionItem, 'isOpen'>[]) => {
  const [items, setItems] = useState<AccordionItem[]>(
    initialItems.map((item) => ({ ...item, isOpen: false }))
  );

  const toggleItem = useCallback((id: string) => {
    console.log('Toggling item:', id);
    setItems((prevItems) => {
      const newItems = prevItems.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      );
      console.log('New items state:', newItems);
      return newItems;
    });
  }, []);

  const openItem = useCallback((id: string) => {
    console.log('Opening item:', id);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isOpen: true } : { ...item, isOpen: false }
      )
    );
  }, []);

  const closeAll = useCallback(() => {
    console.log('Closing all items');
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, isOpen: false }))
    );
  }, []);

  return {
    items,
    toggleItem,
    openItem,
    closeAll,
  };
};
