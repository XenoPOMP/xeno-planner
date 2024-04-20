import { type ComponentProps } from 'react';

import type InputField from '../components/ui/InputField';

export const NO_AUTOCOMPLETE: Pick<
  ComponentProps<typeof InputField>,
  'autoComplete' | 'aria-autocomplete'
> = {
  autoComplete: 'off',
  'aria-autocomplete': 'none',
};
