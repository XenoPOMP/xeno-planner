import plugin from 'tailwindcss/plugin';
import { type CSSRuleObject } from 'tailwindcss/types/config';

import { cssPropertiesToTw } from './api';

const generateFontClasses = (...sizes: number[]) => {
  const classes: Record<string, CSSRuleObject> = {};

  sizes.forEach(size => {
    classes[`.p${size}`] = cssPropertiesToTw({
      fontSize: `var(--p${size})`,
    });
  });

  return classes;
};

/**
 * Add custom classes and utilities to tailwind.
 * @constructor
 */
export const CustomClassesPlugin = () => {
  return plugin(({ addComponents }) => {
    addComponents({
      '.flex-center': cssPropertiesToTw({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }),

      '.blank-input': cssPropertiesToTw({
        outline: 'none',
        border: 'none',
        background: 'transparent',
        fontSize: 'inherit',
        fontWeight: 'inherit',
      }),

      ...generateFontClasses(24, 20, 16, 14),
    });
  });
};
