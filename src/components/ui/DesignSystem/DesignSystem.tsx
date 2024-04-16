import cn from 'classnames';
import { type FC } from 'react';

import HtmlHeading from '@/src/components/ui/Heading';

import styles from './DesignSystem.module.scss';
import type { DesignSystemProps } from './DesignSystem.props';

const DesignSystem: FC<DesignSystemProps> = () => {
  return (
    <article className={cn(styles.designSystem)}>
      <HtmlHeading as={'h1'}>Дизайн система</HtmlHeading>
    </article>
  );
};

export default DesignSystem;
