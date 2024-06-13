import { DragDropContext } from '@hello-pangea/dnd';
import { Priority } from '@xeno-planner/backend-types';
import dayjs from 'dayjs';
import { describe, test } from 'vitest';

import { expectToRender, testNextPage } from '@/__tests__/assets/utilities';
import Column from '@/app/(dashboard)/tasks/kanban/components/Column';
import Kanban from '@/app/(dashboard)/tasks/kanban/components/Kanban';
import KanbanTasksPage from '@/app/(dashboard)/tasks/kanban/page.tsx';
import RQProvider from '@/src/components/providers/RQProvider/RQProvider.tsx';
import { EnumDndDestId } from '@/src/data/EnumDndDestId.ts';

describe('Kanban page tests', () => {
  testNextPage(<KanbanTasksPage />, {});

  test('Kanban component can be rendered', () => {
    expectToRender(<Kanban />, {
      wrapper: RQProvider,
    });
  });

  test('Kanban column can be rendered', () => {
    expectToRender(
      <Column
        groupName={'Tomorrow'}
        destId={EnumDndDestId.TOMORROW}
        tasks={Array.from(
          {
            length: 10,
          },
          () => ({
            id: '-1 DOES NOT EXIST',
            createdAt: dayjs().add(1, 'day').startOf('day').toDate(),
            updatedAt: dayjs().add(1, 'day').startOf('day').toDate(),
            name: 'NAME',
            priority: Priority.low,
            isCompleted: false,
          }),
        )}
      />,
      {
        wrapper: ({ children }) => (
          <DragDropContext onDragEnd={() => {}}>
            <RQProvider>{children}</RQProvider>
          </DragDropContext>
        ),
      },
    );
  });
});
