'use client';

import cn from 'classnames';
import { type FC } from 'react';

import { useTimeBlocks } from '@/app/(dashboard)/time-blocking/hooks/useTimeBlocks.ts';
import CircleLoader from '@/src/components/ui/CircleLoader';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';
import { isDragging } from '@/src/utils/react/data-attributes';

import BlocksList from '../BlocksList';
import NewBlockForm from '../NewBlockForm';
import TimeBlockEntry from '../TimeBlockEntry';

import styles from './TimeBlocking.module.scss';
import type { TimeBlockingProps } from './TimeBlocking.props';

const TimeBlocking: FC<TimeBlockingProps> = () => {
  const { data, isLoading } = useTimeBlocks();

  return (
    <UiContainer
      margin={'0px'}
      maxWidth={'1362px'}
      as={'section'}
      className={cn(styles.timeBlocking)}
      {...isDragging(true)}
    >
      {isLoading ? (
        <div aria-hidden>
          <CircleLoader />
        </div>
      ) : (
        <BlocksList>
          {data?.map(block => (
            <TimeBlockEntry
              key={block.id}
              block={block}
            />
          ))}
        </BlocksList>
      )}

      <NewBlockForm />
    </UiContainer>
  );
};

export default TimeBlocking;
