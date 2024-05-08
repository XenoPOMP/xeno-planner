import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { useMemo } from 'react';

import { type Color } from '@/app/(dashboard)/time-blocking/form/colors.data.ts';
import PriorityBadge from '@/src/components/ui/PriorityBadge';
import { htmlColors } from '@/src/data/html.colors.ts';

import type { ColorBadgeProps } from './ColorBadge.props';

const ColorBadge: VariableFC<
  typeof PriorityBadge,
  ColorBadgeProps & { children?: Color },
  'priority' | 'children'
> = ({ className, style, children: color, hex = true, ...props }) => {
  const displayingColor = useMemo(() => {
    if (!hex) {
      return color;
    }

    const foundColor = htmlColors.find(
      ({ name }) => name.toLowerCase() === color?.toLowerCase(),
    );

    if (foundColor) {
      return foundColor.code;
    }

    return color;
  }, [hex, color]);

  return (
    <PriorityBadge
      className={cn('capitalize !text-timeblock-font-neutral', className)}
      style={{
        background: `${color}`,
        ...style,
      }}
      {...props}
    >
      {displayingColor}
    </PriorityBadge>
  );
};

export default ColorBadge;
