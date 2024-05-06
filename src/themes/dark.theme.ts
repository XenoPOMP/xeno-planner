import { type CustomTheme } from './index';

export const darkTheme: CustomTheme = {
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
};
