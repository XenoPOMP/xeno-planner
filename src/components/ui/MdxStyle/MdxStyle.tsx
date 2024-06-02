import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import styles from './MdxStyle.module.scss';
import type { MdxStyleProps } from './MdxStyle.props';

const MdxStyle: VariableFC<'div', MdxStyleProps> = ({
  children,
  className,
  type = 'changelog',
  ...props
}) => {
  return (
    <div
      className={cn(styles.mdxStyles, styles[type], className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default MdxStyle;
