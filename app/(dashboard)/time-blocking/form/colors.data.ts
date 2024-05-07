import type { Globals } from 'csstype';
import { type CSSProperties } from 'react';

/** Html valid color. */
export type Color = Extract<
  Exclude<CSSProperties['color'], Globals>,
  string | number | symbol
>;

export const COLORS: Color[] = [
  'tomato',
  'orchid',
  'coral',
  'seagreen',
  'orange',
  'royalblue',
  'lightslategray',
];
