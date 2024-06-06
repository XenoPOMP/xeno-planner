import { vi } from 'vitest';

/**
 * Mock **next-metrika** package.
 */
export const mockMetrika = () => {
  vi.mock('next-metrika', (): typeof import('next-metrika') => {
    return {
      default: (props, deprecatedLegacyContext) => <></>,
    };
  });
};
