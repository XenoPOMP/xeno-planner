import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';

import styles from './InlineLink.module.scss';
import type { InlineLinkProps } from './InlineLink.props';

const InlineLink: VariableFC<typeof Link, InlineLinkProps> = ({
  className,
  children,
  icon: Icon,
  ...props
}) => {
  return (
    <Link
      className={cn(styles.inlineLink, className)}
      {...props}
    >
      {Icon && <Icon size={'1em'} />}

      {children}
    </Link>
  );
};

export default InlineLink;
