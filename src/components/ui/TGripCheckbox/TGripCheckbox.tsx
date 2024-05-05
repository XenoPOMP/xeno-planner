import { type FC } from 'react';

import { useUpdateTask } from '@/app/(dashboard)/tasks/hooks/useUpdateTask.ts';
import Checkbox from '@/src/components/ui/Checkbox';

import type { TGripCheckboxProps } from './TGripCheckbox.props';

const TGripCheckbox: FC<TGripCheckboxProps> = ({ id, isCompleted, name }) => {
  const { updateTask } = useUpdateTask(id);

  return (
    <Checkbox
      checked={!!isCompleted}
      onChange={ev => {
        updateTask({
          id,
          data: {
            isCompleted: ev.target.checked,
          },
        });
      }}
    >
      {name}
    </Checkbox>
  );
};

export default TGripCheckbox;
