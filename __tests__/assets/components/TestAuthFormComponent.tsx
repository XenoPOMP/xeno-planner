import { fireEvent, render, screen } from '@testing-library/react';
import type { VariableFC } from '@xenopomp/advanced-types';
import { type ComponentProps } from 'react';

import AuthForm from '@/src/components/ui/auth/AuthForm';

const TestAuthFormComponent: VariableFC<typeof AuthForm, {}> = ({
  children,
  ...props
}) => {
  return (
    <AuthForm
      data-testid={'auth-form'}
      {...props}
    >
      {children}

      <button data-testid={'submit-button'}>Submit</button>
    </AuthForm>
  );
};

export const renderAuthFormTest = (
  props?: ComponentProps<typeof TestAuthFormComponent>,
) => {
  render(<TestAuthFormComponent {...props} />);

  // Grab elements from DOM
  const form = screen.getByTestId<HTMLFormElement>('auth-form');
  const submitButton = screen.getByTestId<HTMLButtonElement>('submit-button');

  const submit = () => fireEvent.click(submitButton);

  return {
    form,
    submit,
  };
};
