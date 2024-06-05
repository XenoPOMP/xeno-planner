import { describe, expect, test } from 'vitest';

import { AppConstants } from '@/app/app.constants';
import { createStorageKey } from '@/src/utils/misc';

// Функция, которая создает название для записей в куках,
// localStorage и т.п. по единому правилу
describe('createStorageKey func', () => {
  // Название приложения - константа
  const { appName } = AppConstants;

  // Эта функция нужна для того, чтобы не повторять один
  // и тот же код в каждом тесте (принцип DRY).
  const generateAndExpect = (expected: string, ...keys: string[]) => {
    const generated = createStorageKey(...keys);

    expect(generated).to.equal(expected);
  };

  // Пустые строки отсекаются
  test('Func filters empty strings', () => {
    generateAndExpect(
      `[${appName}]:storage:persist`,
      '',
      'storage',
      '',
      'persist',
    );
  });

  // Строки обрезаются (убираются лишние пробелы в начале и конце)
  test('Strings are trimmed', () => {
    generateAndExpect(`[${appName}]:storage:persist`, '  storage  ', 'persist');
  });

  // Пробелы заменяются на нижнее подчеркивание
  test('Any whitespace is replaced with underscore', () => {
    generateAndExpect(
      `[${appName}]:storage_and_persist`,
      'storage and persist',
    );
  });

  // Весь текст приводится к нижнему регистру
  test('Lowercase', () => {
    generateAndExpect(`[${appName}]:hello_world`, 'Hello World');
  });

  // Запрещенные символы (все те символы, что не являются буквами)
  // убираются
  test('Forbidden chars are sanitized', () => {
    generateAndExpect(
      `[${appName}]:ya_russkiy_i_mne_povezlo_idk`,
      'я русский! и мне повезло idk',
    );
  });
});
