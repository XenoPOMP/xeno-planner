import { type LucideIcon } from 'lucide-react';
import { type ComponentRef, type RefObject } from 'react';

export interface InputFieldProps {
  icon?: LucideIcon;
  description?: string;
  ref?: RefObject<ComponentRef<'input'>>;
}
