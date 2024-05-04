import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { Check } from 'lucide-react';

import styles from './Checkbox.module.scss';
import type { CheckboxProps } from './Checkbox.props';

const Checkbox: VariableFC<'input', CheckboxProps, 'type'> = ({
  className,
  children,
  ...props
}) => {
  return (
    <label className={cn('select-none cursor-pointer', styles.checkboxHolder)}>
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

      {children}
    </label>
  );
};

export default Checkbox;
