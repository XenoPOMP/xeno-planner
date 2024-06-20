import { render } from '@testing-library/react';
import type { ComponentProps, ElementType } from 'react';

type Args<T extends ElementType, C> = [component: T, callback: () => C];

/**
 * This helper function creates function for rendering
 * component in testing env.
 *
 * @param component    component to render
 * @param callback     callback to execute in result function.
 */
export const createComponentTest = <T extends ElementType, C = unknown>(
  ...[Component, callback]: Args<T, C>
) => {
  return (props: ComponentProps<T>) => {
    const renderResult = render(<Component {...props} />);
    const callbackResult = callback();

    return {
      renderResult,
      ...callbackResult,
    };
  };
};
