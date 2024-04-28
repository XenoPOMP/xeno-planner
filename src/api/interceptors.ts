import axios, { type CreateAxiosDefaults } from 'axios';

import { errorCatch } from '@/src/api/error.ts';
import {
  getAccessToken,
  removeFromStorage,
} from '@/src/services/auth-token.service.ts';
import { AuthService } from '@/src/services/auth.service.ts';

/** Default options for Axios interceptors. */
const options: CreateAxiosDefaults = {
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

/** Instance for accessing backend without auth token. */
const axiosClassic = axios.create(options);

/** Instance for accessing backend with auth token. */
const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use(config => {
  const accessToken = getAccessToken();

  // Connect accessToken to headers
  if (config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

axiosWithAuth.interceptors.response.use(
  config => config,
  async error => {
    const ogRequest = error.config;

    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      ogRequest._isRetry = true;

      try {
        await AuthService.getNewTokens();
        return axiosWithAuth.request(ogRequest);
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') {
          removeFromStorage();
        }
      }
    }

    throw error;
  },
);

export { axiosClassic, axiosWithAuth };
