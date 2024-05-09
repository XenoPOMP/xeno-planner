'use client';

import cn from 'classnames';
import { Clock9, SquarePen } from 'lucide-react';
import { type FC, useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { COLORS } from '@/app/(dashboard)/time-blocking/form/colors.data.ts';
import { useBlockForm } from '@/app/(dashboard)/time-blocking/hooks/useBlockForm.ts';
import { useTimeBlocks } from '@/app/(dashboard)/time-blocking/hooks/useTimeBlocks.ts';
import Button from '@/src/components/ui/Button';
import InputField from '@/src/components/ui/InputField';
import SelectField from '@/src/components/ui/SelectField';
import { NEW_BLOCK_FORM_ID } from '@/src/constants/ids.constants.ts';
import { MINUTES_IN_DAY } from '@/src/constants/time.constants.ts';
import type { TimeBlockFormStateType } from '@/src/types';
import { registerNestedField } from '@/src/utils/misc';

import styles from './NewBlockForm.module.scss';
import type { NewBlockFormProps } from './NewBlockForm.props';

const NewBlockForm: FC<NewBlockFormProps> = () => {
  const { isLoading } = useTimeBlocks();

  const { handleSubmit, control, watch } =
    useFormContext<TimeBlockFormStateType>();

  const { onSubmit } = useBlockForm();

  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const { unsubscribe } = watch(({ id }) => {
      const idDefined = id !== undefined;
      setIsUpdate(idDefined);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <form
        className={cn(styles.addNewBlock)}
        onSubmit={handleSubmit(onSubmit)}
        id={NEW_BLOCK_FORM_ID}
      >
        <section className={cn(styles.inputGroup)}>
          <InputField
            placeholder={'Название'}
            icon={SquarePen}
            register={registerNestedField<TimeBlockFormStateType>('name')}
            disabled={isLoading}
            focused
          />

          <InputField
            placeholder={'Продолжительность (в мин.)'}
            icon={Clock9}
            type={'number'}
            min={1}
            max={MINUTES_IN_DAY}
            register={registerNestedField<TimeBlockFormStateType>('duration')}
            disabled={isLoading}
            focused
          />
        </section>

        <section className={cn('flex flex-col gap-[.2em]')}>
          <p>Цвет:</p>

          <Controller
            control={control}
            name={'color'}
            render={({ field: { value, onChange } }) => (
              <SelectField
                currentItem={value || undefined}
                onSelection={val => onChange(val)}
                items={COLORS.map(col => ({ name: col, value: col }))}
                type={'colors'}
              />
            )}
          />
        </section>

        <Button
          thin
          hollow
          className={'max-w-fit'}
          disabled={isLoading}
          type={'submit'}
        >
          {!isUpdate ? 'Создать' : 'Обновить'}
        </Button>
      </form>
    </>
  );
};

export default NewBlockForm;
