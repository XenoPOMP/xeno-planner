'use client';

import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { Mail } from 'lucide-react';

import HtmlHeading from '@/src/components/ui/Heading';
import InputField from '@/src/components/ui/InputField';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';

import styles from './SettingGroup.module.scss';
import type { SettingGroupProps } from './SettingGroup.props';

const SettingGroup: VariableFC<'article', SettingGroupProps> = () => {
  return (
    <article className={cn(styles.group)}>
      <UiContainer
        as={'div'}
        className={cn(styles.container)}
        maxWidth={`800px`}
      >
        <header>
          <HtmlHeading as={'h2'}>Group name</HtmlHeading>
        </header>

        <section className={cn(styles.grid)}>
          <InputField
            icon={Mail}
            placeholder={'Email'}
          />
          <InputField
            icon={Mail}
            placeholder={'Email'}
          />
          <InputField
            icon={Mail}
            placeholder={'Email'}
          />
          <InputField
            icon={Mail}
            placeholder={'Email'}
          />
          <InputField
            icon={Mail}
            placeholder={'Email'}
          />
        </section>
      </UiContainer>
    </article>
  );
};

export default SettingGroup;
