import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { type ComponentProps } from 'react';

import type InputField from '@/src/components/ui/InputField';
import WarningMessage from '@/src/components/ui/WarningMessage';

const InputWrapper: VariableFC<
  'div',
  Pick<ComponentProps<typeof InputField>, 'warning'>
> = ({
  children,
  warning,
  className,
  'aria-hidden': ariaHidden = true,
  ...props
}) => {
  return (
    <div
      aria-hidden={ariaHidden}
      className={cn(className)}
      {...props}
    >
      {children}
      {warning && (
        <WarningMessage
          className={cn('mt-[.5em]')}
          style={{
            marginLeft: 'calc(var(--p-level-3))',
          }}
        >
          {warning}
        </WarningMessage>
      )}
    </div>
  );
};

export default InputWrapper;
