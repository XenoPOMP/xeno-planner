'use client';

import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { Eye, EyeOff } from 'lucide-react';
import { type HTMLInputTypeAttribute, useEffect, useState } from 'react';
import TextOverflow from 'react-text-overflow';

import { useUniqueId } from '@/src/hooks/useUniqueId';

import styles from './InputField.module.scss';
import type { InputFieldProps } from './InputField.props';

const InputField: VariableFC<'input', InputFieldProps, 'ref'> = ({
  className,
  id,
  icon: Icon,
  placeholder,
  description,
  onChange,
  type = 'text',
  children,
  focused = false,
  outerRef,
  outerOnClick,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(focused || false);
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const inputId = id || useUniqueId(gen => `input:${gen}`);

  const processType = (
    type: HTMLInputTypeAttribute,
  ): HTMLInputTypeAttribute => {
    // Hide and show password
    if (type === 'password') {
      return !isPasswordShown ? 'password' : 'text';
    }

    return type;
  };

  useEffect(() => {
    setIsFocused(focused);
  }, [focused]);

  return (
    <div
      className={cn(styles.holder, {
        [className || '']: children !== undefined,
      })}
      aria-hidden={children === undefined}
      ref={outerRef}
      onClick={ev => {
        outerOnClick?.(ev);
      }}
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
            aria-hidden={children === undefined}
          >
            <TextOverflow text={placeholder} />
          </div>
        )}

        <div
          aria-hidden
          className={cn(styles.focusTracker, 'hidden')}
          data-focused={isFocused}
        ></div>

        {children || (
          <input
            id={inputId}
            className={cn(className)}
            data-password-shown={isPasswordShown}
            type={processType(type || 'text')}
            onChange={ev => {
              setIsFocused(ev.target.value.length > 0);
              onChange?.(ev);
            }}
            {...props}
          />
        )}
      </label>

      {type === 'password' && (
        <button
          className={cn(styles.placeholderText)}
          onClick={() => {
            setIsPasswordShown(prev => !prev);
          }}
        >
          <div className={cn('sr-only')}>
            {isPasswordShown ? 'Скрыть пароль' : 'Открыть пароль'}
          </div>

          {isPasswordShown ? <Eye /> : <EyeOff />}
        </button>
      )}
    </div>
  );
};

export default InputField;
