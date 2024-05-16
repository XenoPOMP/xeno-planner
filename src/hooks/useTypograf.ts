import { DEFAULT_SELECTOR } from '@/src/constants/zustand.constants.ts';
import { useTypografStore } from '@/src/zustand/stores/useTypografStore.ts';

/**
 * This hook retrieves typograf instance from Zustand
 * store and return function to format text.
 */
export const useTypograf = () => {
  const { formatter } = useTypografStore(DEFAULT_SELECTOR);

  return formatter.execute;
};
