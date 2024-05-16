import Typograf, { type TypografPrefs } from 'typograf';
import { create } from 'zustand';

interface ITypografStore {
  formatter: Typograf;
  prefs: TypografPrefs;
}

/**
 * This hook allows you to share Typograf instance between components.
 */
export const useTypografStore = create<ITypografStore>((set, get) => ({
  prefs: {
    locale: ['ru', 'en-US'],
  },
  formatter: new Typograf(get().prefs),
}));
