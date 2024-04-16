import cn from 'classnames';
import { type FC } from 'react';

import styles from './DesignSystem.module.scss';
import type { DesignSystemProps } from './DesignSystem.props';

const DesignSystem: FC<DesignSystemProps> = () => {
  return <article className={cn(styles.designSystem)}>Design system</article>;
};

export default DesignSystem;
