import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { TriangleAlert } from 'lucide-react';

import type { WarningMessageProps } from './WarningMessage.props';

const WarningMessage: VariableFC<'div', WarningMessageProps, 'role'> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      role={'alert'}
      className={cn(
        'flex items-center gap-[.4em] text-warning-font',
        className,
      )}
      {...props}
    >
      <TriangleAlert size={'1em'} />

      {children}
    </div>
  );
};

export default WarningMessage;
