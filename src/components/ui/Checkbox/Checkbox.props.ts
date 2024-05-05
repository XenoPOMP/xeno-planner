import type { ComponentProps } from 'react';

export interface CheckboxProps {
  editable?: boolean;

  /** Props of inner input (appears if editable is set to true). */
  edit?: Omit<ComponentProps<'input'>, 'type'>;
}
