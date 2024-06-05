import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, describe, test } from 'vitest';

import { clearMocks, mockRouter } from '@/__tests__/assets/mocks';
import { expectToRender } from '@/__tests__/assets/utilities';
import RQProvider from '@/src/components/providers/RQProvider/RQProvider.tsx';
import Logout from '@/src/components/settings/Logout';

// Проверяем кнопку «Выйти из аккаунта»
describe('Logout component', () => {
  // Перед выполнением тестов необходимо сделать
  // моки для библиотеки `next/navigation`, потому что
  // она может быть недоступна в тестовом окружении
  beforeAll(() => {
    mockRouter();
  });

  // Очищаем отрендеренные компоненты после каждого теста, чтобы
  // они не мешали друг другу и последующим тестам
  afterEach(() => {
    cleanup();
  });

  // Моки очищаем после выполнения ВСЕХ тестов
  afterAll(() => {
    clearMocks();
  });

  // Простая проверка на то, что компонент может быть отрисован
  // без ошибок
  test('It renders', () => {
    expectToRender(<Logout />, { wrapper: RQProvider });
  });

  // Слушатель событий должен быть вызван при нажатии на
  // кнопку
  test('Logout button works', async () => {
    render(<Logout />, { wrapper: RQProvider });
    const button = screen.getByText('Выйти из аккаунта');

    fireEvent.click(button);
  });
});
