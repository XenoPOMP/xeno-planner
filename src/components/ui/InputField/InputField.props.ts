import { type LucideIcon } from 'lucide-react';
import { type ComponentRef, type RefObject } from 'react';

export interface InputFieldProps {
  icon?: LucideIcon;
  description?: string;
  outerRef?: RefObject<ComponentRef<'div'>>;
  ref?: RefObject<ComponentRef<'input'>>;
}
