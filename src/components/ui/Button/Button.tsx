import type { PropsWith, VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import styles from './Button.module.scss';
import type { ButtonProps } from './Button.props';

const Button: VariableFC<
  'button',
  PropsWith<'children', ButtonProps>,
  'children'
> = ({
  className,
  children,
  thin = false,
  hollow = false,
  unstyled = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        {
          [`${styles.uiButton}`]: !unstyled && true,
          [`${styles.themePrimary}`]: !unstyled && true,
          [`${styles.thin}`]: !unstyled && thin,
          [`${styles.hollow}`]: !unstyled && hollow,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
