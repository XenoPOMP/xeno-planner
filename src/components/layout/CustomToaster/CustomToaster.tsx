import { type FC } from 'react';
import { Toaster } from 'sonner';

import type { CustomToasterProps } from './CustomToaster.props';

const CustomToaster: FC<CustomToasterProps> = () => {
  return (
    <Toaster
      toastOptions={{
        className: 'bg-secondary-bg text-primary-font border-secondary-border',
        style: {
          fontFamily: 'inherit',
        },
      }}
    />
  );
};

export default CustomToaster;
