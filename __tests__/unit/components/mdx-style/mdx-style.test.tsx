import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import MdxStyle from '@/src/components/ui/MdxStyle';

import { renderMdxTest } from './renderMdxTest.tsx';

describe('MdxStyle component', () => {
  afterEach(() => cleanup());

  test('It renders', () => {
    expectToRender(<MdxStyle />);
  });

  test('Classnames are being applied', () => {
    const { styles, wrapperClasses } = renderMdxTest({
      type: 'changelog',
    });

    expect(wrapperClasses).toContain(styles.changelog);
  });
});
