import type { WithHeading } from '@/src/interfaces/WithHeading.ts';

export interface SettingGroupProps extends WithHeading {
  save?: {
    label: string;
    action?: () => void;
  };
}
