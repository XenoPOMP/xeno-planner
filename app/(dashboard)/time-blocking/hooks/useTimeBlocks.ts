import { useQuery } from '@tanstack/react-query';
import { roundNumber } from '@xenopomp/advanced-utils';
import { useEffect, useMemo, useState } from 'react';

import { MINUTES_IN_DAY } from '@/src/constants/time.constants';
import { TimeBlockService } from '@/src/services/time-block.service.ts';
import type { ITimeBlockResponse } from '@/src/types';

export const useTimeBlocks = () => {
  const { data, ...query } = useQuery({
    queryKey: ['time blocks', 'list'],
    queryFn: () => TimeBlockService.getTimeBlocks(),
  });

  const [items, setItems] = useState<ITimeBlockResponse[] | undefined>();

  useEffect(() => {
    setItems(data);
  }, [data]);

  /** Calculated time available for sleep. */
  const hoursLeft = useMemo(() => {
    if (!data) {
      return 0;
    }

    const minutesBlocked = data!.reduce(
      (reducer, next) => reducer + next.duration,
      0,
    );

    return roundNumber((MINUTES_IN_DAY - minutesBlocked) / 60, 1);
  }, [data]);

  return { ...query, data: items, setItems, hoursLeft };
};
