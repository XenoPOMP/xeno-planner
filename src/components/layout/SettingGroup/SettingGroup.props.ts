import type { ComponentProps } from 'react';

import type Button from '@/src/components/ui/Button';
import type { WithHeading } from '@/src/interfaces/WithHeading.ts';

export interface SettingGroupProps extends WithHeading {
  save?: {
    label: string;
    action?: () => void;
  };

  saveButtonProps?: Omit<
    ComponentProps<typeof Button>,
    'onClick' | 'children' | 'thin' | 'hollow' | 'className'
  >;
}
