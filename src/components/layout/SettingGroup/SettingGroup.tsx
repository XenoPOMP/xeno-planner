'use client';

import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import HtmlHeading from '@/src/components/ui/Heading';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';

import styles from './SettingGroup.module.scss';
import type { SettingGroupProps } from './SettingGroup.props';

const SettingGroup: VariableFC<'article', SettingGroupProps> = ({
  className,
  children,
  heading,
  ...props
}) => {
  return (
    <article
      className={cn(styles.group, className)}
      {...props}
    >
      <UiContainer
        as={'div'}
        className={cn(styles.container)}
        maxWidth={`800px`}
      >
        {heading && (
          <header>
            <HtmlHeading as={'h2'}>{heading}</HtmlHeading>
          </header>
        )}

        {children && <section className={cn(styles.grid)}>{children}</section>}
      </UiContainer>
    </article>
  );
};

export default SettingGroup;
