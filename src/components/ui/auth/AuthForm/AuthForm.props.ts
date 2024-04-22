import { type ReactNode } from 'react';

export interface AuthFormProps {
  heading?: ReactNode;

  /**
   * If true, ev.preventDefault() will
   * not be called in onSubmit.
   */
  allowDefaultEvent?: boolean;
}
