import { CalendarRange, LayoutDashboard, Settings, Timer } from 'lucide-react';
import { type ComponentProps } from 'react';

import type DashboardMenuItem from '@/src/components/layout/DashboardMenuItem';

export const dashboardMenuData: Array<
  ComponentProps<typeof DashboardMenuItem>
> = [
  {
    icon: LayoutDashboard,
    href: '/dashboard',
    children: 'Личный кабинет',
    'aria-disabled': true,
  },
  {
    icon: LayoutDashboard,
    href: '/tasks',
    children: 'Задачи',
    'aria-disabled': true,
  },
  {
    icon: Timer,
    href: '/pomodoro',
    children: 'Pomodoro',
    'aria-disabled': true,
  },
  {
    icon: CalendarRange,
    href: '/time-blocking',
    children: 'Распорядок дня',
    'aria-disabled': true,
  },
  {
    icon: Settings,
    href: '/settings',
    children: 'Настройки',
    'aria-disabled': true,
  },
];
