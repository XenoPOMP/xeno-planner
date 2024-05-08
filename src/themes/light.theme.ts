import type { Defined } from '@xenopomp/advanced-types';
import type { Config } from 'tailwindcss';

type Theme = Defined<Defined<Config['theme']>['extend']>;

/**
 * This theme is **default**.
 */
export const lightTheme = {
  colors: {
    accent: '#6E51D7',
    'accent-bright': '#8373BD',
    'accent-text': '#FFFFFF',
    primary: {
      bg: '#F1F2F3',
      font: '#191A19',
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
      bg: '#DDDBFF',
      'bg-accent': '#CDCAF2',
      border: '#C9C9C9',
      'border-accent': '#B7B7B7',
      'border-brutal': '#E4E3E3',
    },
    field: {
      bg: '#CAC8EB',
      placeholder: '#7A7777',
    },
    priority: {
      low: {
        bg: '#497AB6',
        font: '#EEFDFF',
      },
      medium: {
        bg: '#B86C31',
        font: '#FFFDF2',
      },
      high: {
        bg: '#9F4C4E',
        font: '#FFE5E4',
      },
      select: {
        bg: '#313139',
        font: '#DCDDE4',
      },
    },
    warning: {
      font: '#E28203',
    },
  },
} satisfies Theme;
