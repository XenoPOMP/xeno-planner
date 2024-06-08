import { describe, expect, test } from 'vitest';

import { validatePasswordsMatch } from '@/src/utils/validation/auth-validation.ts';

/**
 * Helper func for testing validatePasswordsMatch.
 * @param value
 * @param password
 */
const issueFuncCall = (value: string, password: string) => {
  return validatePasswordsMatch(value, password, {
    clearErrors: () => {},
    setError: () => {},
  });
};

describe('Auth validations utilities', () => {
  test('If passwords match, return must be True', () => {
    const res = issueFuncCall('passwword', 'passwword');
    expect(res).toBe(true);
  });

  test('If passwords do not match, return must be string message', () => {
    const res = issueFuncCall('passwword', 'passwword12');
    expect(res).toBe('Пароли не совпадают');
  });
});
