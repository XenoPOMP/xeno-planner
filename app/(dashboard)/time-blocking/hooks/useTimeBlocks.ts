import { useQuery } from '@tanstack/react-query';
import { roundNumber } from '@xenopomp/advanced-utils';
import { useMemo } from 'react';

import { MINUTES_IN_DAY } from '@/src/constants/time.constants';
import { TimeBlockService } from '@/src/services/time-block.service.ts';

export const useTimeBlocks = () => {
  const query = useQuery({
    queryKey: ['time blocks', 'list'],
    queryFn: () => TimeBlockService.getTimeBlocks(),
  });

  /** Calculated time available for sleep. */
  const hoursLeft = useMemo(() => {
    if (!query.data) {
      return 0;
    }

    const minutesBlocked = query.data!.reduce(
      (reducer, next) => reducer + next.duration,
      0,
    );

    return roundNumber((MINUTES_IN_DAY - minutesBlocked) / 60, 1);
  }, [query.data]);

  return { ...query, hoursLeft };
};
