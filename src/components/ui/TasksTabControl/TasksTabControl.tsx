'use client';

import { Kanban, ListTodo } from 'lucide-react';
import { type FC } from 'react';

import DashboardTab from '@/src/components/layout/DashboardTab';
import DashboardTabs from '@/src/components/layout/DashboardTabs';
import { DASHBOARD_PAGES } from '@/src/types/routes.ts';

import type { TasksTabControlProps } from './TasksTabControl.props';

const TasksTabControl: FC<TasksTabControlProps> = () => {
  return (
    <DashboardTabs>
      <DashboardTab
        href={`${DASHBOARD_PAGES.TASKS}/list-view`}
        icon={ListTodo}
      >
        Список
      </DashboardTab>

      <DashboardTab
        href={`${DASHBOARD_PAGES.TASKS}/kanban`}
        icon={Kanban}
      >
        Доска
      </DashboardTab>
    </DashboardTabs>
  );
};

export default TasksTabControl;
