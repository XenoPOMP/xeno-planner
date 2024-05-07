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

import { COLORS } from '@/app/(dashboard)/time-blocking/form/colors.data.ts';
import Button from '@/src/components/ui/Button';
import InputField from '@/src/components/ui/InputField';
import SelectField from '@/src/components/ui/SelectField';
import type { TimeBlockFormStateType } from '@/src/types';
import { registerNestedField } from '@/src/utils/misc';

import styles from './NewBlockForm.module.scss';
import type { NewBlockFormProps } from './NewBlockForm.props';

const NewBlockForm: FC<NewBlockFormProps> = () => {
  const { register, control, handleSubmit, ...methods } =
    useForm<TimeBlockFormStateType>({
      defaultValues: {
        color: 'royalblue',
      },
    });

  const onSubmit: SubmitHandler<TimeBlockFormStateType> = ({
    duration,
    ...data
  }) => {
    // eslint-disable-next-line no-unused-vars
    const formattedData = {
      duration: +(duration || '0'),
      ...data,
    };
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
        >
          Создать
        </Button>
      </form>
    </FormProvider>
  );
};

export default NewBlockForm;
