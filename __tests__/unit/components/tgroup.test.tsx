import { DragDropContext } from '@hello-pangea/dnd';
import { Priority } from '@xeno-planner/backend-types';
import { describe, test, vi } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import RQProvider from '@/src/components/providers/RQProvider/RQProvider.tsx';
import TGroup from '@/src/components/ui/TGroup';
import { EnumDndDestId } from '@/src/data/EnumDndDestId.ts';

describe('TGroup component tests', () => {
  test('It renders', () => {
    expectToRender(
      <TGroup
        destId={EnumDndDestId.TODAY}
        groupName={'Group'}
        tasks={[
          ...Array.from(
            {
              length: 12,
            },
            () => ({
              id: '-1 ID DOES NOT EXIST',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Name',
              priority: Priority.low,
              isCompleted: false,
            }),
          ),
        ]}
      />,
      {
        wrapper: ({ children }) => (
          <DragDropContext onDragEnd={vi.fn}>
            <RQProvider>{children}</RQProvider>
          </DragDropContext>
        ),
      },
    );
  });
});
