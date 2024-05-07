import { type ComponentProps } from 'react';

import type InputField from '@/src/components/ui/InputField';

export interface Selection
  extends Pick<ComponentProps<typeof InputField>, 'icon'> {
  name?: string;
  value: string;
}

export type SelectFieldType = 'default' | 'priority-badges' | 'colors';

export interface SelectFieldProps {
  currentItem?: string;
  currentValue?: string;
  items?: Selection[];
  onSelection?: (newValue: Selection['value']) => void;
  type?: SelectFieldType;
}
