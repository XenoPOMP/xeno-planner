import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';
import { KeyRound, Mail, Moon } from 'lucide-react';

import InputField from './InputField';

const meta = {
  title: 'UI/Fields/Input field [BASE]',
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

export const Custom: Story = {
  args: {
    icon: Moon,
    description: 'Поле ввода пароля',
    placeholder: 'Пароль',
    type: 'text',
    className: cn('select-none'),
    children: <>This is an custom field</>,
  },
};
