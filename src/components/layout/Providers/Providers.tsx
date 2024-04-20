import { ThemeProvider } from 'next-themes';

import RQProvider from '@/src/components/providers/RQProvider/RQProvider';
import { type ProviderType } from '@/src/types';
import { createStorageKey } from '@/src/utils/misc';

import type { ProvidersProps } from './Providers.props';

const Providers: ProviderType<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute={'class'}
      storageKey={createStorageKey('theme')}
      enableSystem
    >
      <RQProvider>{children}</RQProvider>
    </ThemeProvider>
  );
};

export default Providers;
