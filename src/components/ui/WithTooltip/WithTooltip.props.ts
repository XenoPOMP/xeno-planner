import type { ComponentProps, ElementType } from 'react';

export type WithTooltipProps<Element extends ElementType> =
  ComponentProps<Element> & {
    as?: Element;

    tooltip: {
      id: string;
      content?: ComponentProps<'div'>['data-tooltip-content'];
      placement?: ComponentProps<'div'>['data-tooltip-place'];
    };
  };
