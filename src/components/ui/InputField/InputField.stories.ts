import type { Meta, StoryObj } from '@storybook/react';
import { KeyRound, Mail } from 'lucide-react';

import InputField from './InputField';

const meta = {
  title: 'UI/Input field',
  component: InputField,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Mail,
    description: 'Поле ввода электронной почты',
    placeholder: 'Email',
    type: 'email',
  },
};

export const Password: Story = {
  args: {
    icon: KeyRound,
    description: 'Поле ввода пароля',
    placeholder: 'Пароль',
    type: 'password',
  },
};
