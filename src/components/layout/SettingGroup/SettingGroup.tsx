'use client';

import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import Button from '@/src/components/ui/Button';
import HtmlHeading from '@/src/components/ui/Heading';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';
import { SETTING_GROUP_SIZE } from '@/src/constants/fields.constants.ts';

import styles from './SettingGroup.module.scss';
import type { SettingGroupProps } from './SettingGroup.props';

const SettingGroup: VariableFC<'article', SettingGroupProps> = ({
  className,
  children,
  heading,
  save,
  saveButtonProps,
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
        {...SETTING_GROUP_SIZE}
      >
        {heading && (
          <header>
            <HtmlHeading as={'h2'}>{heading}</HtmlHeading>
          </header>
        )}

        {children && <section className={cn(styles.grid)}>{children}</section>}

        {save && (
          <Button
            thin
            hollow
            className={cn('w-fit')}
            type={'submit'}
            onClick={() => {
              save?.action?.();
            }}
            {...saveButtonProps}
          >
            {save.label}
          </Button>
        )}
      </UiContainer>
    </article>
  );
};

export default SettingGroup;
