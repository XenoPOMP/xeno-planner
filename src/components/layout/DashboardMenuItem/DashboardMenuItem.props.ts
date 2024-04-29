import type { LucideIcon } from 'lucide-react';
import type Link from 'next/link';
import type { ComponentProps } from 'react';

export interface DashboardMenuItemProps {
  icon?: LucideIcon;

  /** Indicates parent url in group. */
  parent?: ComponentProps<typeof Link>['href'];

  /**
   * If true, component will be styled
   * as tab control entry.
   */
  isTab?: boolean;
}
