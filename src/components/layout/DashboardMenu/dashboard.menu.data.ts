import {
  CalendarRange,
  LayoutDashboard,
  Settings,
  SquareKanban,
  Timer,
} from 'lucide-react';
import { type ComponentProps } from 'react';

import type DashboardMenuItem from '@/src/components/layout/DashboardMenuItem';

export const dashboardMenuData: Array<
  ComponentProps<typeof DashboardMenuItem>
> = [
  {
    icon: LayoutDashboard,
    href: '/dashboard',
    children: 'Личный кабинет',
    'aria-disabled': false,
  },
  {
    icon: SquareKanban,
    href: '/tasks',
    children: 'Задачи',
    'aria-disabled': false,
  },
  {
    icon: Timer,
    href: '/pomodoro',
    children: 'Pomodoro',
    'aria-disabled': false,
  },
  {
    icon: CalendarRange,
    href: '/time-blocking',
    children: 'Распорядок дня',
    'aria-disabled': false,
  },
  {
    icon: Settings,
    href: '/settings',
    children: 'Настройки',
    'aria-disabled': false,
  },
];
