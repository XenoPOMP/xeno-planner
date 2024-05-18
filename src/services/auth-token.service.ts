import Cookies from 'js-cookie';

import { EnumTokens } from './auth.service';

export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
  return accessToken || null;
};

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: process.env.NEXT_PUBLIC_TRUSTED_DOMAIN,
    // Make sameSite strict if use SSL
    // sameSite: 'strict',
    sameSite: 'none',
    expires: 1,
  });
};

export const removeFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN);
};
