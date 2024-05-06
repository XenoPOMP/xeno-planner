import type { Defined } from '@xenopomp/advanced-types';
import type { Config } from 'tailwindcss';

type Theme = Defined<Defined<Config['theme']>['extend']>;

/**
 * This theme is **default**.
 */
export const lightTheme = {
  colors: {
    accent: '#6E51D7',
    'accent-bright': '#9982EB',
    primary: {
      bg: '#0C0D0E',
      font: '#E5E6E5',
      error: {
        soft: {
          font: '#F85149',
          hover: {
            bg: '#B62324',
          },
        },
      },
    },
    secondary: {
      bg: '#151315',
      'bg-accent': '#1A1A1A',
      border: '#404142',
      'border-accent': '#636363',
      'border-brutal': '#222324',
    },
    field: {
      bg: '#262626',
      placeholder: '#A8A8A8',
    },
    priority: {
      low: {
        bg: '#208B25',
        font: '#A2F1E3',
      },
      medium: {
        bg: '#B2761D',
        font: '#FFFFFF',
      },
      high: {
        bg: '#9D4949',
        font: '#FFD9DA',
      },
      select: {
        bg: '#313139',
        font: '#DCDDE4',
      },
    },
  },
} satisfies Theme;
