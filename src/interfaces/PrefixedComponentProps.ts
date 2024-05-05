import type { ComponentProps, ElementType } from 'react';
import type { CamelCasedProperties } from 'type-fest';

/**
 * Adds prefix to each component prop.
 */
export type PrefixedComponentProps<
  TComponent extends ElementType,
  TPrefix extends string,
> = CamelCasedProperties<{
  [Prop in keyof ComponentProps<TComponent> as `${TPrefix} ${Exclude<Prop, symbol>}`]: ComponentProps<TComponent>[Prop];
}>;
