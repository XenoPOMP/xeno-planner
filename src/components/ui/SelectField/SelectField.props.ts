import { type ComponentProps } from 'react';

import type InputField from '@/src/components/ui/InputField';

interface Selection extends Pick<ComponentProps<typeof InputField>, 'icon'> {
  name?: string;
  value: string;
}

export interface SelectFieldProps {
  currentItem?: string;
  items?: Selection[];
  onSelection?: (newItem: Selection) => void;
}
