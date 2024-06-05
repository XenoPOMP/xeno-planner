import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import ColorBadge from '@/src/components/ui/ColorBadge';

// Тесты для компонента ColorBadge
describe('ColorBadge test', () => {
  // Ожидаем, что он может быть отрендерен без ошибок
  test('It renders', () => {
    expectToRender(<ColorBadge />);
  });

  // Проверяем, что отключение режима hex (когда цвет
  // записывается в формате #FFFFFF) работает, и компонент
  // пытается подобрать название цвета
  test('No hex', () => {
    expectToRender(<ColorBadge hex={false} />);
  });

  // Проверка того, что цвета будут парсится
  test('Colors are being parsed', () => {
    expectToRender(<ColorBadge>tomato</ColorBadge>);
    expectToRender(<ColorBadge>#FFFFFF</ColorBadge>);
  });
});
