import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { type ComponentRef } from 'react';
import { afterAll, describe, expect, test } from 'vitest';

import { expectHookToRender } from '@/__tests__/assets/utilities';
import { useOutSide } from '@/src/hooks/useOutSide.ts';

const OUTSIDE = 'use-outside-outside';
const IS_SHOWN = 'use-outside-is-shown-status';

const TestComponent = () => {
  const { ref, isShown } = useOutSide<ComponentRef<'div'>>();

  return (
    <div>
      <div>Testing useOutSide hook</div>
      <div ref={ref}>Ref</div>
      <button data-testid={OUTSIDE}>Outside</button>

      <div
        data-testid={IS_SHOWN}
        data-is-shown={isShown}
      >
        Is shown status
      </div>
    </div>
  );
};

describe('useOutSide hook', () => {
  afterAll(() => {
    cleanup();
  });

  test('It renders', () => {
    expectHookToRender(useOutSide);
  });

  test('Internal hook sets state to false when clicked outside', () => {
    // Render component with mounted refs
    render(<TestComponent />);
    // Click to any area outside ref
    fireEvent.click(screen.getByTestId(OUTSIDE));

    // Grab status from DOM
    const isShownStatus =
      screen.getByTestId(IS_SHOWN).getAttribute('data-is-shown') === 'true';

    // Assert status to be falsy
    expect(isShownStatus).toBeFalsy();
  });
});
