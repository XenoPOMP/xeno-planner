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
    thin: false,
    hollow: false,
    unstyled: false,
    variant: 'primary',
  },
};

export const Danger: Story = {
  args: {
    children: 'Click me',
    thin: true,
    hollow: true,
    unstyled: false,
    variant: 'danger',
  },
};
