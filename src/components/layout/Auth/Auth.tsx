import cn from 'classnames';
import { type FC } from 'react';

// import styles from './Auth.module.scss';
import type { AuthProps } from './Auth.props';

const Auth: FC<AuthProps> = () => {
  return <main className={cn('h-dvh flex-center')}>Auth</main>;
};

export default Auth;
