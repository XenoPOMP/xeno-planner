import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, describe, test } from 'vitest';

import { clearMocks, mockRouter } from '@/__tests__/assets/mocks';
import { expectToRender } from '@/__tests__/assets/utilities';
import RQProvider from '@/src/components/providers/RQProvider/RQProvider.tsx';
import Logout from '@/src/components/settings/Logout';

describe('Logout component', () => {
  beforeAll(() => {
    mockRouter();
  });

  afterEach(() => {
    cleanup();
  });

  afterAll(() => {
    clearMocks();
  });

  test('It renders', () => {
    expectToRender(<Logout />, { wrapper: RQProvider });
  });

  test('Logout button works', async () => {
    render(<Logout />, { wrapper: RQProvider });
    const button = screen.getByText('Выйти из аккаунта');

    fireEvent.click(button);
  });
});
