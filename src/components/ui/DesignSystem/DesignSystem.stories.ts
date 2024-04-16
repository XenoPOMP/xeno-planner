import type { Meta, StoryObj } from '@storybook/react';

import DesignSystem from './DesignSystem';

const meta = {
  title: 'Design/Design System',
  component: DesignSystem,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof DesignSystem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
