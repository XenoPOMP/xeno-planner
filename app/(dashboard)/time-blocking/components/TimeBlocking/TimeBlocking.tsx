'use client';

import cn from 'classnames';
import { type FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useTimeBlocks } from '@/app/(dashboard)/time-blocking/hooks/useTimeBlocks.ts';
import CircleLoader from '@/src/components/ui/CircleLoader';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';
import type { TimeBlockFormStateType } from '@/src/types';
import { isDragging } from '@/src/utils/react/data-attributes';

import BlocksList from '../BlocksList';
import NewBlockForm from '../NewBlockForm';

import styles from './TimeBlocking.module.scss';
import type { TimeBlockingProps } from './TimeBlocking.props';

const TimeBlocking: FC<TimeBlockingProps> = () => {
  const { isLoading } = useTimeBlocks();

  const { ...methods } = useForm<TimeBlockFormStateType>({
    defaultValues: {
      color: 'royalblue',
    },
  });

  return (
    <UiContainer
      margin={'0px'}
      maxWidth={'1362px'}
      as={'section'}
      className={cn(styles.timeBlocking)}
      {...isDragging(true)}
    >
      <FormProvider {...methods}>
        {isLoading ? (
          <div aria-hidden>
            <CircleLoader />
          </div>
        ) : (
          <BlocksList />
        )}

        <NewBlockForm />
      </FormProvider>
    </UiContainer>
  );
};

export default TimeBlocking;
