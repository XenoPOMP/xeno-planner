import {
  CalendarRange,
  LayoutDashboard,
  Settings,
  SquareKanban,
  Timer,
} from 'lucide-react';
import { type ComponentProps } from 'react';

import type DashboardMenuItem from '@/src/components/layout/DashboardMenuItem';
import { DASHBOARD_PAGES } from '@/src/types/routes.ts';

export const dashboardMenuData: Array<
  ComponentProps<typeof DashboardMenuItem>
> = [
  {
    icon: LayoutDashboard,
    href: DASHBOARD_PAGES.HOME,
    children: 'Личный кабинет',
    'aria-disabled': false,
  },
  {
    icon: SquareKanban,
    href: `${DASHBOARD_PAGES.TASKS}/list-view`,
    children: 'Задачи',
    'aria-disabled': false,
  },
  {
    icon: Timer,
    href: DASHBOARD_PAGES.POMODORO,
    children: 'Pomodoro',
    'aria-disabled': false,
  },
  {
    icon: CalendarRange,
    href: DASHBOARD_PAGES.TIME_BLOCKING,
    children: 'Распорядок дня',
    'aria-disabled': false,
  },
  {
    icon: Settings,
    href: DASHBOARD_PAGES.SETTINGS,
    children: 'Настройки',
    'aria-disabled': false,
  },
];
