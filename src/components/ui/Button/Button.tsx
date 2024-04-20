import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import styles from './Button.module.scss';
import type { ButtonProps } from './Button.props';

const Button: VariableFC<'button', ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(styles.uiButton, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
