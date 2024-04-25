import type { LucideIcon } from 'lucide-react';
import type { ComponentProps, ComponentRef, RefObject } from 'react';
import type { CamelCasedProperties } from 'type-fest';

/** Field`s wrapper props. */
type OuterProps = CamelCasedProperties<{
  [Prop in keyof ComponentProps<'div'> as `outer ${Prop}`]: ComponentProps<'div'>[Prop];
}>;

export interface InputFieldProps
  extends Pick<OuterProps, 'outerRef' | 'outerOnClick' | 'outerClassName'> {
  icon?: LucideIcon;
  description?: string;
  ref?: RefObject<ComponentRef<'input'>>;
  focused?: boolean;
}
