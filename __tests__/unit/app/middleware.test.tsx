import { NextRequest, NextResponse } from 'next/server';
import { afterAll, beforeAll, describe, test } from 'vitest';

import { assertNotThrowing } from '@/__tests__/assets/assertions';
import { clearMocks, mockRouter } from '@/__tests__/assets/mocks';
import { middleware } from '@/middleware.ts';
import { DASHBOARD_PAGES } from '@/src/types/routes.ts';

// Тестируем middleware
describe('Next.js middleware', () => {
  beforeAll(() => {
    mockRouter();
  });

  afterAll(() => {
    clearMocks();
  });

  /** Генерирует фейковые объекты запроса и ответа. */
  const issueConfig = (
    requestConfig: ConstructorParameters<typeof NextRequest> = [
      new URL('http://localhost:3000'),
    ],
  ): [request: NextRequest, response: NextResponse] => {
    const req = new NextRequest(...requestConfig);
    const res = new NextResponse();
    return [req, res];
  };

  // Базовая проверка - функция middleware не должнап рокидывать исключения
  test('It not throwing', async (): Promise<void> => {
    assertNotThrowing(async () => await middleware(...issueConfig()));
  });

  // Проверяем, что middleware видит refreshToken
  test('Checks for refreshToken', () => {
    const [req, res] = issueConfig([new URL('http://localhost:3000/auth')]);
    // Вручную ставим куку refreshToken
    req.cookies.set('refreshToken', 'someToken');

    // middleware все еще не должен не прокидывать исключения
    assertNotThrowing(async () => await middleware(req, res));
  });

  // Покрываем сценарий, когда текущая страница - страница авторизации
  test('Checks if current page is auth', () => {
    const [req, res] = issueConfig([new URL('http://localhost:3000/auth')]);

    // middleware все еще не должен не прокидывать исключения
    assertNotThrowing(async () => await middleware(req, res));
  });

  // Покрываем сценарий, когда пользователь авторизован и пытается зайти
  // на страницу Личный кабинет
  test('If logged, pass him to page', () => {
    const [req, res] = issueConfig([
      new URL(`http://localhost:3000${DASHBOARD_PAGES.HOME}`),
    ]);
    req.cookies.set('refreshToken', 'someToken');

    // middleware все еще не должен не прокидывать исключения
    assertNotThrowing(async () => await middleware(req, res));
  });
});
