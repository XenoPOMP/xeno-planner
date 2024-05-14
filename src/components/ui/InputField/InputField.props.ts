import type { LucideIcon } from 'lucide-react';

import type { PrefixedComponentProps } from '@/src/interfaces/PrefixedComponentProps.ts';

/** Field`s outer wrapper */
interface ExternalWrapperProps {
  wrpClassName?: string;
}

/** Field`s inner props. */
type OuterProps = PrefixedComponentProps<'div', 'outer'>;

export interface InputFieldProps
  extends Pick<OuterProps, 'outerRef' | 'outerOnClick' | 'outerClassName'>,
    Pick<ExternalWrapperProps, 'wrpClassName'> {
  icon?: LucideIcon;
  description?: string;
  focused?: boolean;

  /** Use react-hook-form context. */
  register?: string;

  /** Same as error message. */
  warning?: string;
}
