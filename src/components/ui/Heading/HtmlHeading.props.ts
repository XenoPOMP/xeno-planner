import { type JSX } from 'react';

export interface HtmlHeadingProps {
  as: Extract<keyof JSX.IntrinsicElements, `h${number}`>;
}
