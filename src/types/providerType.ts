import type { PropsWith } from '@xenopomp/advanced-types';
import { type FC } from 'react';

/** Type for any provider component. */
export type ProviderType<T = {}> = FC<PropsWith<'children', T>>;
