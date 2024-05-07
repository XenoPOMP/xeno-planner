import { useQuery } from '@tanstack/react-query';

import { TimeBlockService } from '@/src/services/time-block.service.ts';

export const useTimeBlocks = () => {
  return useQuery({
    queryKey: ['time blocks', 'list'],
    queryFn: () => TimeBlockService.getTimeBlocks(),
  });
};
