import { fireEvent, render, screen } from '@testing-library/react';
import { type ComponentProps, type FC } from 'react';

import SelectField from '@/src/components/ui/SelectField';

interface IRenderSelectFieldTest
  extends Pick<ComponentProps<typeof SelectField>, 'items'> {}

const TestSelectFieldComponent: FC<Pick<IRenderSelectFieldTest, 'items'>> = ({
  items,
}) => {
  return (
    <div data-testid={'outer-wrapper'}>
      <SelectField
        items={items}
        outerDataTestId={'outer-simple-select'}
      />
      <SelectField type={'priority-badges'} />
      <SelectField type={'colors'} />
    </div>
  );
};

export const renderSelectFieldTest = ({
  items,
}: IRenderSelectFieldTest = {}) => {
  const component = render(<TestSelectFieldComponent items={items} />);

  // Get elements from DOM
  const outer = screen.getByTestId('outer-simple-select');

  const clickOuter = () => fireEvent.click(outer);

  return {
    Component: component,
    clickOuter,
  };
};
