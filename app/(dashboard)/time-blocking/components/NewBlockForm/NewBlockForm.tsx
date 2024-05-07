'use client';

import cn from 'classnames';
import { Clock9, SquarePen } from 'lucide-react';
import { type FC } from 'react';
import {
  Controller,
  FormProvider,
  type SubmitHandler,
  useForm,
} from 'react-hook-form';
import { toast } from 'sonner';

import { COLORS } from '@/app/(dashboard)/time-blocking/form/colors.data.ts';
import Button from '@/src/components/ui/Button';
import InputField from '@/src/components/ui/InputField';
import SelectField from '@/src/components/ui/SelectField';
import { MINUTES_IN_DAY } from '@/src/constants/time.constants.ts';
import type { TimeBlockFormStateType } from '@/src/types';
import { registerNestedField } from '@/src/utils/misc';

import { useCreateTimeBlock } from '../../hooks/useCreateTimeBlock.ts';

import styles from './NewBlockForm.module.scss';
import type { NewBlockFormProps } from './NewBlockForm.props';

const NewBlockForm: FC<NewBlockFormProps> = () => {
  const { register, control, handleSubmit, ...methods } =
    useForm<TimeBlockFormStateType>({
      defaultValues: {
        color: 'royalblue',
      },
    });

  const createBlock = useCreateTimeBlock();

  const onSubmit: SubmitHandler<TimeBlockFormStateType> = ({
    duration,
    ...data
  }) => {
    const formattedData = {
      duration: +(duration || '0'),
      ...data,
    };

    if (!formattedData.name) {
      toast.error('Вы не ввели имя блока!');
      return;
    }

    createBlock(formattedData);
  };

  return (
    <FormProvider
      register={register}
      control={control}
      handleSubmit={handleSubmit}
      {...methods}
    >
      <form
        className={cn(styles.addNewBlock)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className={cn(styles.inputGroup)}>
          <InputField
            placeholder={'Название'}
            icon={SquarePen}
            register={registerNestedField<TimeBlockFormStateType>('name')}
          />

          <InputField
            placeholder={'Продолжительность (в мин.)'}
            icon={Clock9}
            type={'number'}
            min={1}
            max={MINUTES_IN_DAY}
            register={registerNestedField<TimeBlockFormStateType>('duration')}
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
          type={'submit'}
        >
          Создать
        </Button>
      </form>
    </FormProvider>
  );
};

export default NewBlockForm;
