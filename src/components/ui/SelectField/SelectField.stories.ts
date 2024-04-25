import type { Meta, StoryObj } from '@storybook/react';
import { Moon, Sun } from 'lucide-react';

import SelectField from './SelectField';

const meta = {
  title: 'UI/Fields/Select',
  component: SelectField,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Sun,
    placeholder: 'Тема',
    currentItem: 'Светлая',
    items: [
      {
        icon: Sun,
        name: 'Светлая',
        value: 'light',
      },
      {
        icon: Moon,
        name: 'Темная',
        value: 'dark',
      },
    ],
  },
};

export const NotSelected: Story = {
  args: {
    icon: Sun,
    placeholder: 'Тема',
    currentItem: 'Не выбрано',
  },
};
