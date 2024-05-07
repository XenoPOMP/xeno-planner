import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { type Color } from '@/app/(dashboard)/time-blocking/form/colors.data.ts';
import PriorityBadge from '@/src/components/ui/PriorityBadge';

import type { ColorBadgeProps } from './ColorBadge.props';

const ColorBadge: VariableFC<
  typeof PriorityBadge,
  ColorBadgeProps & { children?: Color },
  'priority' | 'children'
> = ({ className, style, children: color, ...props }) => {
  return (
    <PriorityBadge
      className={cn('capitalize', className)}
      style={{
        background: `${color}`,
        ...style,
      }}
      {...props}
    >
      {color}
    </PriorityBadge>
  );
};

export default ColorBadge;
