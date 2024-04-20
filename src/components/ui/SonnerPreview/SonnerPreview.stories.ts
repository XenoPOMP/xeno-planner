import type { Meta, StoryObj } from '@storybook/react';

import SonnerPreview from './SonnerPreview';

const meta = {
  title: 'Design/Sonner',
  component: SonnerPreview,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof SonnerPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
