import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import styles from './FieldList.module.scss';
import type { FieldListProps } from './FieldList.props';

const FieldList: VariableFC<'div', FieldListProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(styles.list, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default FieldList;
