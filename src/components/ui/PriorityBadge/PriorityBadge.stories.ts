import type { Meta, StoryObj } from '@storybook/react';
import { Priority } from '@xeno-planner/backend-types';

import PriorityBadge from './PriorityBadge';

const meta = {
  title: 'UI/Priority badge',
  component: PriorityBadge,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof PriorityBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoPriority: Story = {
  args: {
    children: 'Click to select',
  },
};

export const Low: Story = {
  args: {
    priority: Priority.low,
    children: 'Low',
  },
};

export const Medium: Story = {
  args: {
    priority: Priority.medium,
    children: 'Medium',
  },
};

export const High: Story = {
  args: {
    priority: Priority.high,
    children: 'High',
  },
};
