'use client';

import cn from 'classnames';
import { BookUser, BriefcaseBusiness, Ellipsis, Sofa } from 'lucide-react';
import { type FC } from 'react';
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';

import SettingGroup from '@/src/components/layout/SettingGroup';
import InputField from '@/src/components/ui/InputField';
import { useInitialData } from '@/src/hooks/useInitialData.ts';
import { useUpdateSettings } from '@/src/hooks/useUpdateSettings.ts';
import type { UserFormType } from '@/src/types';

import type { AccountSettingsProps } from './AccountSettings.props';

const AccountSettings: FC<AccountSettingsProps> = () => {
  const { register, handleSubmit, reset, ...methods } = useForm<UserFormType>({
    mode: 'onChange',
  });
  const { mutate, isPending } = useUpdateSettings();

  useInitialData(reset);

  const onSubmit: SubmitHandler<UserFormType> = data => {
    const { password, workInterval, breakInterval, intervalsCount, ...rest } =
      data;

    mutate({
      ...rest,
      workInterval: +(workInterval || 0),
      breakInterval: +(breakInterval || 0),
      intervalsCount: +(intervalsCount || 0),
      password: password || undefined,
    });
  };

  return (
    <FormProvider
      register={register}
      handleSubmit={handleSubmit}
      reset={reset}
      {...methods}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <SettingGroup
          heading={'Настройки аккаунта'}
          save={{
            label: 'Сохранить',
            pending: isPending,
          }}
          id={'edit-account'}
        >
          <InputField
            icon={BookUser}
            placeholder={'Имя'}
            outerClassName={cn('col-span-full')}
            register={'name'}
          />

          <InputField
            icon={BriefcaseBusiness}
            placeholder={'Время работы (в мин.)'}
            type={'number'}
            register={'workInterval'}
          />

          <InputField
            icon={Sofa}
            placeholder={'Время перерыва (в мин.)'}
            type={'number'}
            register={'breakInterval'}
          />

          <InputField
            icon={Ellipsis}
            placeholder={'Количество интервалов (макс 10)'}
            type={'number'}
            outerClassName={cn('col-span-full')}
            register={'intervalsCount'}
          />
        </SettingGroup>
      </form>
    </FormProvider>
  );
};

export default AccountSettings;
