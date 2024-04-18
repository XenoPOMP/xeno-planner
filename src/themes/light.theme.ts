import type { Defined } from '@xenopomp/advanced-types';
import type { Config } from 'tailwindcss';

type Theme = Defined<Defined<Config['theme']>['extend']>;

/**
 * This theme is **default**.
 */
export const lightTheme = {
  colors: {
    accent: '#6E51D7',
    primary: {
      bg: '#0C0D0E',
      font: '#E6E5E6',
    },
    secondary: {
      bg: '#151315',
      'bg-brutal': '#0B0B0B',
      border: '#404142',
    },
  },
} satisfies Theme;
