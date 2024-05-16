import type { Meta, StoryObj } from '@storybook/react';

import TypografedText from './TypografedText';

const meta = {
  title: 'UI/Typograf',
  component: TypografedText,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof TypografedText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'This text is formatted',
  },
};
