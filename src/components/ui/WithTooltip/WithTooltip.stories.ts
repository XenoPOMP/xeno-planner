import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/src/components/ui/Button';

import WithTooltip from './WithTooltip';

const meta = {
  title: 'UI/Tooltip',
  component: WithTooltip,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof WithTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AsDiv: Story = {
  args: {
    as: 'div',
    children: 'This is string node with tooltip',
    className: 'w-fit bg-red-500/25',
    tooltip: {
      id: 'tooltip-id',
      content: 'Tooltip content',
      placement: 'right',
    },
  },
};

export const AsButton: Story = {
  args: {
    as: Button,
    thin: true,
    hollow: true,
    children: 'This is button with tooltip',
    tooltip: {
      id: 'tooltip-id',
      content: 'Tooltip content',
      placement: 'right',
    },
  },
};
