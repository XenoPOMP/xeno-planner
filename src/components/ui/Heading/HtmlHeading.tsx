import cn from 'classnames';
import { type ComponentProps, type FC } from 'react';

import styles from './HtmlHeading.module.scss';
import type { HtmlHeadingProps } from './HtmlHeading.props.ts';

const HtmlHeading: FC<HtmlHeadingProps & ComponentProps<'h1'>> = ({
  className,
  children,
  as: HeadingComponent,
  ...props
}) => {
  return (
    <HeadingComponent
      className={cn(styles.heading, className)}
      {...props}
    >
      {children}
    </HeadingComponent>
  );
};

export default HtmlHeading;
