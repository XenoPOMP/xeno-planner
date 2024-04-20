import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';

import styles from './Actions.module.scss';

export const FormActions: VariableFC<'footer', {}> = ({
  className,
  children,
  ...props
}) => {
  return (
    <footer
      className={cn(styles.actions, className)}
      {...props}
    >
      {children}
    </footer>
  );
};

export const FormLink: VariableFC<typeof Link, {}> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Link
      className={cn(styles.formLink, className)}
      {...props}
    >
      {children}
    </Link>
  );
};
