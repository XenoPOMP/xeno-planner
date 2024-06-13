import { describe, test } from 'vitest';

import { assertNotThrowing } from '@/__tests__/assets/assertions';
import { renderTimerControlTest } from '@/__tests__/unit/components/timer/controls/TestTimerControlsComponent.tsx';

describe('Timer controls tests', () => {
  test('It renders', () => {
    assertNotThrowing(() => renderTimerControlTest());
  });

  // test('User can start and pause timer', () => {
  //   const { result } = renderTimerControlTest({
  //     id: undefined,
  //   });
  //
  //   const article = result.getByRole('article');
  //
  //   expect(
  //     Array.from(article.classList.entries()).map(([_i, item]) => item),
  //   ).toContain('flex-center');
  // });
});
