import { axiosClassic } from '@/src/api/interceptors.ts';
import {
  removeFromStorage,
  saveTokenStorage,
} from '@/src/services/auth-token.service.ts';
import type { IAuthForm, IAuthResponse, ILogoutResponse } from '@/src/types';

export enum EnumTokens {
  // eslint-disable-next-line no-unused-vars
  ACCESS_TOKEN = 'XENO_PLANNER_accessToken',
  // eslint-disable-next-line no-unused-vars
  REFRESH_TOKEN = 'refreshToken',
}

/**
 * This function sends request to backend
 * and saves accessToken.
 * @param params
 */
async function issueAuthResponse(
  ...params: Parameters<typeof axiosClassic.post<IAuthResponse>>
) {
  const response = await axiosClassic.post<IAuthResponse>(...params);

  if (response.data.accessToken) {
    saveTokenStorage(response.data.accessToken);
  }

  return response;
}

export const AuthService = {
  async main(type: 'login' | 'register', data: IAuthForm) {
    return issueAuthResponse(`/auth/${type}`, data);
  },

  async getNewTokens() {
    return issueAuthResponse(`/auth/login/access-token`);
  },

  async logout() {
    const response = await axiosClassic.post<ILogoutResponse>('/auth/logout');

    if (response.data.logout) {
      removeFromStorage();
    }

    return response;
  },
};
