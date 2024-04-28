import type { SanitizedUser } from '@/src/types';

/** User profile interface. */
export interface IProfileResponse {
  user: SanitizedUser;
  statistics: Array<{
    label: string;
    value: string;
  }>;
}

export type UserFormType = Omit<SanitizedUser, 'id'> & { password?: string };
