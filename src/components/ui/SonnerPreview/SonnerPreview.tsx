import cn from 'classnames';
import { type FC } from 'react';
import { toast } from 'sonner';

import CustomToaster from '@/src/components/layout/CustomToaster';

import type { SonnerPreviewProps } from './SonnerPreview.props';

const SonnerPreview: FC<SonnerPreviewProps> = () => {
  return (
    <main>
      <CustomToaster />

      <div
        className={cn(
          'flex flex-col gap-[1rem] items-start p-[1rem]',
          '[&>button]:bg-accent [&>button]:px-[1rem] [&>button]:py-[.5rem] [&>button]:rounded-md',
        )}
      >
        <button onClick={() => toast.success('Hello world!')}>Success</button>
        <button onClick={() => toast.info('Hello world!')}>Info</button>
        <button onClick={() => toast.error('Hello world!')}>Error</button>
      </div>
    </main>
  );
};

export default SonnerPreview;
