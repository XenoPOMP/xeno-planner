import { useQuery } from '@tanstack/react-query';

import { UserService } from '@/src/services/user.service.ts';

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => UserService.getProfile(),
  });
};
