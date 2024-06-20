import { fireEvent, screen } from '@testing-library/react';
import type { ComponentProps, FC } from 'react';

import { createComponentTest } from '@/__tests__/assets/utilities';
import DatePicker from '@/src/components/ui/DatePicker';

const TestDatePicker: FC<{} & Partial<ComponentProps<typeof DatePicker>>> = ({
  position = 'right',
  ...props
}) => {
  return (
    <>
      <DatePicker
        position={position}
        {...props}
      />
    </>
  );
};

export const renderDatePickerTest = createComponentTest(TestDatePicker, () => {
  const toggleButton = screen.getByTestId('toggle-button');
  const toggle = () => fireEvent.click(toggleButton);

  return {
    toggle,
  };
});
