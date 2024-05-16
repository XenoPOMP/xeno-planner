import Typograf from 'typograf';
import { create } from 'zustand';

interface ITypografStore {
  formatter: Typograf;
}

/**
 * This hook allows you to share Typograf instance between components.
 */
export const useTypografStore = create<ITypografStore>(() => ({
  formatter: new Typograf({
    locale: ['ru', 'en-US'],
  }),
}));
