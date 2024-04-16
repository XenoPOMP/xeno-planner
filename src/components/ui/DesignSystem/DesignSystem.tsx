import type { PropsWith, VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { Geologica } from 'next/font/google';
import { type ComponentProps, type FC } from 'react';

import HtmlHeading from '@/src/components/ui/Heading';

import styles from './DesignSystem.module.scss';
import type { DesignSystemProps } from './DesignSystem.props';

const font = Geologica({ subsets: ['latin', 'cyrillic'] });

const WithHeading: FC<
  PropsWith<
    'children',
    { heading?: string; headingType?: ComponentProps<typeof HtmlHeading>['as'] }
  >
> = ({ children, heading, headingType = 'h2' }) => {
  return (
    <>
      {heading && <HtmlHeading as={headingType}>{heading}</HtmlHeading>}
      {children}
    </>
  );
};

const Section: VariableFC<typeof WithHeading, {}> = ({
  heading,
  headingType = 'h2',
  children,
}) => {
  return (
    <section className={cn(styles.innerSection)}>
      <WithHeading
        heading={heading}
        headingType={headingType}
      >
        {children}
      </WithHeading>
    </section>
  );
};

const SubSection: VariableFC<typeof WithHeading, {}> = ({
  heading,
  headingType = 'h3',
  children,
}) => {
  return (
    <div className={cn(styles.subSection)}>
      <WithHeading
        heading={heading}
        headingType={headingType}
      >
        {children}
      </WithHeading>
    </div>
  );
};

const List: FC<PropsWith<'children', {}>> = ({ children }) => {
  return <ul className={cn(styles.list)}>{children}</ul>;
};

const DesignSystem: FC<DesignSystemProps> = () => {
  return (
    <article className={cn(styles.designSystem, font.className)}>
      <HtmlHeading as={'h1'}>Дизайн система</HtmlHeading>

      <Section heading={'Отступы'}>
        <SubSection>
          <List>
            <li>1 уровень: 56px</li>
            <li>2 уровень: 32px</li>
            <li>3 уровень: 24рх</li>
            <li>4 уровень: 16рх</li>
            <li>5 уровень: 8рх</li>
          </List>
        </SubSection>
      </Section>

      <Section heading={'Текст'}>
        <SubSection heading={'Шрифты'}>
          <List>
            <li>Основной: Geologica</li>
          </List>
        </SubSection>

        <SubSection heading={'Заголовки'}>
          <List>
            <li>
              <HtmlHeading as={'h1'}>H1 - 32px, auto</HtmlHeading>
            </li>

            <li>
              <HtmlHeading as={'h2'}>H2 - 24px, auto</HtmlHeading>
            </li>

            <li>
              <HtmlHeading as={'h3'}>H3 - 20px, auto</HtmlHeading>
            </li>

            <li>
              <HtmlHeading as={'h4'}>H4 - 16px, auto</HtmlHeading>
            </li>

            <li>
              <HtmlHeading as={'h5'}>H5 - 14px, auto</HtmlHeading>
            </li>
          </List>
        </SubSection>

        <SubSection heading={'Текст'}>
          <List>
            <li className={cn(styles.p1)}>p24 - 24px, 140%</li>
            <li className={cn(styles.p2)}>p20 - 20px, 140%</li>
            <li className={cn(styles.p3)}>p16 - 16px, 140%</li>
            <li className={cn(styles.p4)}>p14 - 14px, 140%</li>
          </List>
        </SubSection>
      </Section>
    </article>
  );
};

export default DesignSystem;
