import { type ComponentProps } from 'react';

import type UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';

import type InputField from '../components/ui/InputField';

export const NO_AUTOCOMPLETE: Pick<
  ComponentProps<typeof InputField>,
  'autoComplete' | 'aria-autocomplete'
> = {
  autoComplete: 'off',
  'aria-autocomplete': 'none',
};

export const SETTING_GROUP_SIZE: ComponentProps<typeof UiContainer> = {
  maxWidth: `800px`,
  margin: '0px',
};
