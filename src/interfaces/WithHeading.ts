import { type ReactNode } from 'react';

export interface WithHeading<Head extends ReactNode = string> {
  heading?: Head | undefined;
}
