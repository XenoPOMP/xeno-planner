import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { useState } from 'react';

import { useUniqueId } from '@/src/hooks/useUniqueId';

import styles from './InputField.module.scss';
import type { InputFieldProps } from './InputField.props';

const InputField: VariableFC<'input', InputFieldProps, 'children'> = ({
  className,
  id,
  icon: Icon,
  placeholder,
  description,
  onChange,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputId = id || useUniqueId(gen => `input:${gen}`);

  return (
    <div
      className={cn(styles.holder)}
      aria-hidden
    >
      {Icon && (
        <Icon
          size={'1em'}
          className={cn(styles.placeholderText, 'flex-shrink-0')}
          aria-hidden={false}
        />
      )}

      <label
        htmlFor={inputId}
        className={cn(styles.inline)}
        aria-hidden={false}
      >
        {description && <div className={cn('sr-only')}>{description}</div>}

        {placeholder && (
          <div
            className={cn(styles.hint)}
            aria-hidden
          >
            {placeholder}
          </div>
        )}

        <input
          id={inputId}
          className={cn(className)}
          data-focused={isFocused}
          onChange={ev => {
            setIsFocused(ev.target.value.length > 0);
            onChange?.(ev);
          }}
          {...props}
        />
      </label>
    </div>
  );
};

export default InputField;
