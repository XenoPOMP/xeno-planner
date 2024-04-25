'use client';

import { useOutside } from '@pacote/react-use-outside';
import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import useSmoothScroll from 'react-smooth-scroll-hook';

import InputField from '@/src/components/ui/InputField';

import styles from './SelectField.module.scss';
import type { SelectFieldProps } from './SelectField.props';

const SelectField: VariableFC<
  typeof InputField,
  SelectFieldProps,
  'children' | 'outerRef' | 'focused'
> = ({ className, outerOnClick, currentItem, ...props }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const outerRef = useOutside<HTMLDivElement>('click', () => {
    setExpanded(false);
  });

  const { scrollTo } = useSmoothScroll({
    ref: outerRef,
    speed: 100,
    direction: 'y',
  });

  useEffect(() => {
    if (expanded) {
      scrollTo();
    }
  }, [expanded]);

  return (
    <InputField
      className={cn(
        'cursor-pointer select-none',
        styles.selectField,
        // '[&>label]:!grid',
        {
          [`${styles.expanded}`]: expanded,
        },
        className,
      )}
      outerOnClick={ev => {
        setExpanded(prev => !prev);
        outerOnClick?.(ev);
      }}
      outerRef={outerRef}
      focused
      {...props}
    >
      <span
        className={cn('flex-grow', styles.currentItem)}
        aria-hidden={false}
      >
        {currentItem}
      </span>

      <button
        aria-hidden
        className={cn(styles.expandButton)}
      >
        {expanded ? 'Hide' : 'Show'}
      </button>
    </InputField>
  );
};

export default SelectField;
