import { type Config } from 'tailwindcss';
import tailwindThemer from 'tailwindcss-themer';

import { CustomClassesPlugin } from './src/styles/themes/plugins';
import { darkTheme, lightTheme } from './src/themes';

const tailwindConfig: Config = {
  darkMode: ['class', '[data-mode="dark"]'],
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './src/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './app/**/*.{js,ts,jsx,tsx,mdx,scss}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    CustomClassesPlugin(),
    tailwindThemer({
      defaultTheme: {
        extend: {
          colors: {
            'timeblock-font-neutral': '#FFF',
          },
        },
      },
      themes: [
        {
          name: 'light',
          extend: lightTheme,
        },
        {
          name: 'dark',
          extend: darkTheme,
        },
      ],
    }),
  ],
};

export default tailwindConfig;
