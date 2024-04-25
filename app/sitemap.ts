import type { ArrayType } from '@xenopomp/advanced-types';

import { AppConstants } from '@/app/app.constants';
import { dashboardMenuData } from '@/src/components/layout/DashboardMenu/dashboard.menu.data.ts';
import { useEnv } from '@/src/hooks/use-env';
import { type Sitemap } from '@/src/utils/seo/sitemap-utils';

export default function sitemap(): Sitemap {
  const env = useEnv();
  const CANONICAL = env.get('CANONICAL_URL') || AppConstants.defaultCanonical;

  const dashboardEntries: Sitemap = dashboardMenuData
    .filter(({ href }) => !['/settings'].includes(href.toString()))
    .map<ArrayType<Sitemap>>(({ href }) => {
      return {
        url: `${CANONICAL}${href}`,
        priority: 1,
      };
    });
  return [
    {
      url: `${CANONICAL}`,
      // lastModified: new Date(2024, Months.February, 25),
      // changeFrequency: 'always',
      priority: 0.9,
    },
    ...dashboardEntries,
  ];
}
