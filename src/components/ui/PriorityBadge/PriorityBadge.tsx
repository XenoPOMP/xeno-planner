import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import styles from './PriorityBadge.module.scss';
import type { PriorityBadgeProps } from './PriorityBadge.props';

const PriorityBadge: VariableFC<'div', PriorityBadgeProps> = ({
  priority,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(styles.badge, className)}
      data-priority={priority || 'none'}
      {...props}
    >
      {children}
    </div>
  );
};

export default PriorityBadge;
