'use client';

import cn from 'classnames';
import { BookUser, BriefcaseBusiness, Ellipsis, Sofa } from 'lucide-react';
import { type FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

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
  // eslint-disable-next-line no-unused-vars
  const { mutate, isPending } = useUpdateSettings();

  useInitialData(reset);

  const handleSave = () => {
    console.log('Account saving started...');
  };

  return (
    <FormProvider
      register={register}
      handleSubmit={handleSubmit}
      reset={reset}
      {...methods}
    >
      <SettingGroup
        heading={'Настройки аккаунта'}
        save={{
          label: 'Сохранить',
          action: handleSave,
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
        />

        <InputField
          icon={Sofa}
          placeholder={'Время перерыва (в мин.)'}
          type={'number'}
        />

        <InputField
          icon={Ellipsis}
          placeholder={'Количество интервалов (макс 10)'}
          type={'number'}
          outerClassName={cn('col-span-full')}
        />
      </SettingGroup>
    </FormProvider>
  );
};

export default AccountSettings;
