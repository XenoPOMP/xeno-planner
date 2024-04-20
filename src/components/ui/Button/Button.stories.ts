import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Click me',
  },
};
