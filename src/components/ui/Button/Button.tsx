import type { Defined, VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import styles from './Button.module.scss';
import type { ButtonProps } from './Button.props';

type ClassnameRecord = Required<{
  [PropertyType in keyof Omit<ButtonProps, 'thin'>]: Record<
    Defined<ButtonProps[PropertyType]>,
    string | undefined
  >;
}>;

const Button: VariableFC<'button', ButtonProps> = ({
  className,
  children,
  theme = 'primary',
  variant = 'default',
  thin = false,
  ...props
}) => {
  const classnames: ClassnameRecord = {
    theme: {
      primary: styles.themePrimary,
    },
    variant: {
      default: '',
      hollow: styles.hollow,
    },
  };

  return (
    <button
      className={cn(
        styles.uiButton,
        classnames.theme[theme],
        classnames.variant[variant],
        {
          [`${styles.thin}`]: thin,
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
