import type { Meta, StoryObj } from '@storybook/react';
import { AlarmClockCheck } from 'lucide-react';

import InlineLink from './InlineLink';

const meta = {
  title: 'UI/Inline link',
  component: InlineLink,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof InlineLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    href: '/',
    children: 'This is an link',
    icon: AlarmClockCheck,
  },
};
