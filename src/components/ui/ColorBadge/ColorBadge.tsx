import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { type Color } from '@/app/(dashboard)/time-blocking/form/colors.data.ts';
import PriorityBadge from '@/src/components/ui/PriorityBadge';

import type { ColorBadgeProps } from './ColorBadge.props';

const ColorBadge: VariableFC<
  typeof PriorityBadge,
  ColorBadgeProps & { children?: Color },
  'priority' | 'children'
> = ({ className, style, children, ...props }) => {
  return (
    <PriorityBadge
      className={cn('capitalize', className)}
      style={{
        background: `${children}`,
        ...style,
      }}
      {...props}
    >
      {children}
    </PriorityBadge>
  );
};

export default ColorBadge;
