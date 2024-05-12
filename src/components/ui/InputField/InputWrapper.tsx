import type { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { type ComponentProps, type FC } from 'react';

import type InputField from '@/src/components/ui/InputField';
import WarningMessage from '@/src/components/ui/WarningMessage';

const InputWrapper: FC<
  PropsWith<'children', Pick<ComponentProps<typeof InputField>, 'warning'>>
> = ({ children, warning }) => {
  return (
    <div aria-hidden>
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
