import type { Defined } from '@xenopomp/advanced-types';
import { type useFormContext } from 'react-hook-form';

import type { TimeBlockFormStateType } from '@/src/types';

export const RESET_DATA: Defined<
  Parameters<
    ReturnType<typeof useFormContext<TimeBlockFormStateType>>['reset']
  >[0]
> = {
  id: undefined,
  name: '',
  duration: 1,
  color: 'royalblue',
};
