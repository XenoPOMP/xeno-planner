import { cleanup } from '@testing-library/react';
import { afterEach, describe, test } from 'vitest';

import { assertNotThrowing } from '@/__tests__/assets/assertions';
import { renderSelectFieldTest } from '@/__tests__/assets/components/TestSelectFieldComponent.tsx';
import { expectToRender } from '@/__tests__/assets/utilities';
import SelectField from '@/src/components/ui/SelectField';

describe('SelectField test', () => {
  afterEach(() => cleanup());

  test('It renders', () => {
    expectToRender(<SelectField />);
  });

  test('Various variants works', () => {
    assertNotThrowing(() => renderSelectFieldTest());
  });

  test('Items can be rendered', () => {
    assertNotThrowing(() =>
      renderSelectFieldTest({
        items: [
          {
            name: 'Item',
            value: 'strong',
          },
          {
            name: 'Item',
            value: 'weak',
          },
          {
            name: 'Item',
            value: 'medium',
          },
        ],
      }),
    );
  });

  test('Outer click toggles expanded state', () => {
    const { clickOuter } = renderSelectFieldTest();

    assertNotThrowing(() => clickOuter());
    assertNotThrowing(() => clickOuter());
  });
});
