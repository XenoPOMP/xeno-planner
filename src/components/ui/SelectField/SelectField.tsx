'use client';

import { type Priority } from '@xeno-planner/backend-types';
import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { type ComponentProps, useEffect } from 'react';
import useSmoothScroll from 'react-smooth-scroll-hook';

import ColorBadge from '@/src/components/ui/ColorBadge';
import InputField from '@/src/components/ui/InputField';
import PriorityBadge from '@/src/components/ui/PriorityBadge';
import { useOutSide } from '@/src/hooks/useOutSide.ts';

import styles from './SelectField.module.scss';
import type { SelectFieldProps, SelectFieldType } from './SelectField.props';

const SelectField: VariableFC<
  typeof InputField,
  SelectFieldProps,
  'children' | 'outerRef' | 'focused' | 'type'
> = ({
  className,
  outerOnClick,
  currentItem,
  currentValue,
  items,
  onSelection,
  type = 'default',
  ...props
}) => {
  const {
    ref: outerRef,
    isShown: expanded,
    setIsShown: setExpanded,
  } = useOutSide<HTMLDivElement>();

  const { scrollTo } = useSmoothScroll({
    ref: outerRef,
    speed: 100,
    direction: 'y',
  });

  const classMap: Record<SelectFieldType, string | undefined> = {
    default: '',
    'priority-badges': styles.prioritySelect,
    colors: cn(styles.prioritySelect),
  };

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
        classMap[type],
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
      {type === 'default' && (
        <span
          className={cn('flex-grow', styles.currentItem)}
          aria-hidden={false}
        >
          {currentItem}
        </span>
      )}

      {type === 'priority-badges' && (
        <span
          className={cn('flex-grow', styles.currentItem)}
          aria-hidden={false}
        >
          <PriorityBadge priority={currentValue as Priority}>
            {currentItem}
          </PriorityBadge>
        </span>
      )}

      {type === 'colors' && (
        <span
          className={cn('flex-grow', styles.currentItem)}
          aria-hidden={false}
        >
          <ColorBadge>{currentItem}</ColorBadge>
        </span>
      )}

      {type === 'default' && (
        <button
          aria-hidden
          className={cn(styles.expandButton)}
          type={'button'}
        >
          {!expanded ? <ChevronDown /> : <ChevronUp />}
        </button>
      )}

      {items && expanded && (
        <div className={cn(styles.selectionGroup)}>
          {items?.map(({ icon: Icon, name, value }, index) => {
            const sharedProps: ComponentProps<'div'> = {
              key: `[${index}] ${value}`,
              onClick: () => {
                onSelection?.(value);
              },
              className: cn('flex items-center', styles.item),
            };

            switch (type) {
              case 'priority-badges': {
                return (
                  <div {...sharedProps}>
                    <PriorityBadge priority={value as Priority}>
                      {name || value}
                    </PriorityBadge>
                  </div>
                );
              }

              case 'colors': {
                return (
                  <div {...sharedProps}>
                    <ColorBadge>{name}</ColorBadge>
                  </div>
                );
              }

              default: {
                return (
                  <div {...sharedProps}>
                    {Icon && <Icon size={'1em'} />}

                    {name || value}
                  </div>
                );
              }
            }
          })}
        </div>
      )}
    </InputField>
  );
};

export default SelectField;
