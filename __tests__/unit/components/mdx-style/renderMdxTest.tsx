import { render, screen } from '@testing-library/react';
import { type ComponentProps } from 'react';

import MdxStyle from '@/src/components/ui/MdxStyle';
import styles from '@/src/components/ui/MdxStyle/MdxStyle.module.scss';

// Renders MdxStyle for testing and grabs
// needed components from DOM etc.
export const renderMdxTest = (props?: ComponentProps<typeof MdxStyle>) => {
  const result = render(
    <MdxStyle
      data-testid={'mdx-style-wrapper'}
      {...props}
    />,
  );

  // Get wrapper
  const wrapper = screen.getByTestId('mdx-style-wrapper');
  const wrapperClasses = Array.from(wrapper.classList.entries()).map(
    ([_i, item]) => item,
  );

  return {
    renderResult: result,
    wrapper,
    wrapperClasses,
    styles,
  };
};
