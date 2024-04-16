import type { Defined } from '@xenopomp/advanced-types';
import type { Config } from 'tailwindcss';

type Theme = Defined<Defined<Config['theme']>['extend']>;

/**
 * This theme is **default**.
 */
export const lightTheme = {
  colors: {
    primary: {
      bg: '#0C0D0E',
      font: '#FFFFFF',
    },
  },
} satisfies Theme;
