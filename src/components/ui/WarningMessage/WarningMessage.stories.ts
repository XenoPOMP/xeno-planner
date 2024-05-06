import type { Meta, StoryObj } from '@storybook/react';

import WarningMessage from './WarningMessage';

const meta = {
  title: 'UI/Warning message',
  component: WarningMessage,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof WarningMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Warning message',
  },
};
