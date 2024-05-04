import type { Priority } from '@xeno-planner/backend-types';

export const getPriorityName = (priority: Priority): string => {
  const map: Record<keyof typeof Priority, string> = {
    low: 'Низкий',
    medium: 'Средний',
    high: 'Высокий',
  };

  return map[priority];
};
