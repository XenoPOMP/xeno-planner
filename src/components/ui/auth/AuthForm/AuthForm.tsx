'use client';

import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import HtmlHeading from '@/src/components/ui/Heading';

import styles from './AuthForm.module.scss';
import type { AuthFormProps } from './AuthForm.props';

const AuthForm: VariableFC<'form', AuthFormProps> = ({
  onSubmit,
  className,
  children,
  heading,
  ...props
}) => {
  return (
    <form
      onSubmit={ev => {
        ev.preventDefault();
        onSubmit?.(ev);
      }}
      className={cn(styles.auth, className)}
      {...props}
    >
      {heading && (
        <HtmlHeading
          as={'h1'}
          className={cn(styles.heading)}
        >
          {heading}
        </HtmlHeading>
      )}

      {children && <div className={cn(styles.body)}>{children}</div>}
    </form>
  );
};

export default AuthForm;