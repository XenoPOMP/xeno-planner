import type { Meta, StoryObj } from '@storybook/react';
import { KanbanSquareIcon } from 'lucide-react';

import DashboardMenuItem from './DashboardMenuItem';

const meta = {
  title: 'Dashboard layout/Menu item',
  component: DashboardMenuItem,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof DashboardMenuItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/',
    'aria-disabled': false,
    icon: KanbanSquareIcon,
    children: 'Menu item',
  },
};

export const Tab: Story = {
  args: {
    href: '/',
    'aria-disabled': false,
    icon: KanbanSquareIcon,
    children: 'Board',
    isTab: true,
  },
};
