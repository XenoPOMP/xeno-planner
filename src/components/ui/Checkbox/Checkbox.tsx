import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { Check } from 'lucide-react';

import styles from './Checkbox.module.scss';
import type { CheckboxProps } from './Checkbox.props';

const Checkbox: VariableFC<'input', CheckboxProps, 'type'> = ({
  className,
  children,
  editable,
  edit,
  ...props
}) => {
  return (
    <label
      className={cn('select-none cursor-pointer', styles.checkboxHolder)}
      data-is-editable={editable}
    >
      <input
        type={'checkbox'}
        className={cn(styles.box, className)}
        {...props}
      />

      <div
        className={cn(styles.boxDisplayed)}
        aria-hidden
      >
        <Check
          size={'.75em'}
          strokeWidth={'.25em'}
          className={cn(styles.icon)}
        />
      </div>

      {!editable ? (
        children
      ) : (
        <input
          {...edit}
          type={'text'}
          value={edit?.value}
          placeholder={edit?.placeholder}
          onChange={ev => edit?.onChange?.(ev)}
          className={cn('blank-input', styles.editArea, edit?.className)}
        />
      )}
    </label>
  );
};

export default Checkbox;
