import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

const meta = {
  title: 'UI/Check box',
  component: Checkbox,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Task',
  },
};
