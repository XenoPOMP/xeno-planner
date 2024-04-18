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
  },
  {
    icon: LayoutDashboard,
    href: '/tasks',
    children: 'Задачи',
  },
  {
    icon: Timer,
    href: '/pomodoro',
    children: 'Pomodoro',
  },
  {
    icon: CalendarRange,
    href: '/time-blocking',
    children: 'Распорядок дня',
  },
  {
    icon: Settings,
    href: '/settings',
    children: 'Настройки',
  },
];
