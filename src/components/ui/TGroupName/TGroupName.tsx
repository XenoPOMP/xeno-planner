import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import HtmlHeading from '@/src/components/ui/Heading';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';

import type { TGroupNameProps } from './TGroupName.props';

const TGroupName: VariableFC<'th', TGroupNameProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <th
      className={cn(className)}
      {...columnType('group')}
      {...props}
    >
      <HtmlHeading as={'h2'}>{children}</HtmlHeading>
    </th>
  );
};

export default TGroupName;
