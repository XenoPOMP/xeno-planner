'use client';

import { getObjectEntries } from '@xenopomp/advanced-utils';
import { Laptop, Moon, Palette, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { type FC } from 'react';

import SelectField from '@/src/components/ui/SelectField';
import type { Selection } from '@/src/components/ui/SelectField/SelectField.props';

import type { ThemeSelectProps } from './ThemeSelect.props';

const data: Record<string, Omit<Selection, 'value'>> = {
  light: {
    icon: Sun,
    name: 'Светлая',
  },

  dark: {
    icon: Moon,
    name: 'Темная',
  },

  system: {
    icon: Laptop,
    name: 'Как в системе',
  },
};

/**
 * Theme select component.
 * It may be working only if you will import it dynamically, by disabling ssr.
 *
 * @constructor
 *
 * @example
 * const ThemeSelect = dynamic(() => import('@/src/components/ui/ThemeSelect'), {
 *   ssr: false,
 * });
 *
 * const TestPage: FC<{}> = () => {
 *   return (
 *     <main className={cn('p-[1rem]')}>
 *       <ThemeSelect />
 *     </main>
 *   );
 * };
 */
const ThemeSelect: FC<ThemeSelectProps> = () => {
  const { theme, themes, setTheme } = useTheme();

  return (
    <SelectField
      icon={theme ? data[theme]?.icon : Palette}
      placeholder={'Тема'}
      currentItem={theme ? data[theme]?.name : '...'}
      items={getObjectEntries(data).map(([key, value]) => ({
        ...value,
        value: key,
      }))}
      onSelection={newTheme => {
        if (!themes.includes(newTheme)) {
          return;
        }

        setTheme(newTheme);
      }}
    />
  );
};

export default ThemeSelect;
