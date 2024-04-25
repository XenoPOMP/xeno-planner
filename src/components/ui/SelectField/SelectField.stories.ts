import type { Meta, StoryObj } from '@storybook/react';
import { Sun } from 'lucide-react';

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
  },
};

export const NotSelected: Story = {
  args: {
    icon: Sun,
    placeholder: 'Тема',
    currentItem: 'Не выбрано',
  },
};
