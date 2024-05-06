'use client';

import cn from 'classnames';
import { BookUser, BriefcaseBusiness, Ellipsis, Sofa } from 'lucide-react';
import { type FC } from 'react';
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';

import SettingGroup from '@/src/components/layout/SettingGroup';
import CircleLoader from '@/src/components/ui/CircleLoader';
import InputField from '@/src/components/ui/InputField';
import WarningMessage from '@/src/components/ui/WarningMessage';
import { useInitialData } from '@/src/hooks/useInitialData.ts';
import { useProfile } from '@/src/hooks/useProfile.ts';
import { useUpdateSettings } from '@/src/hooks/useUpdateSettings.ts';
import type { UserFormType } from '@/src/types';
import { registerNestedField } from '@/src/utils/misc';

import type { AccountSettingsProps } from './AccountSettings.props';

const AccountSettings: FC<AccountSettingsProps> = () => {
  const { isLoading, isError } = useProfile();

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
          save={
            !(isLoading || isError)
              ? {
                  label: 'Сохранить',
                  pending: isPending,
                }
              : undefined
          }
          id={'edit-account'}
          forceBorder
        >
          {isLoading && <CircleLoader />}

          {!isLoading && !isError && (
            <>
              <InputField
                icon={BookUser}
                placeholder={'Имя'}
                outerClassName={cn('col-span-full')}
                register={registerNestedField<UserFormType>('name')}
                focused
              />

              <InputField
                icon={BriefcaseBusiness}
                placeholder={'Время работы (в мин.)'}
                type={'number'}
                register={registerNestedField<UserFormType>('workInterval')}
                focused
              />

              <InputField
                icon={Sofa}
                placeholder={'Время перерыва (в мин.)'}
                type={'number'}
                register={registerNestedField<UserFormType>('breakInterval')}
                focused
              />

              <InputField
                icon={Ellipsis}
                placeholder={'Количество интервалов (макс 10)'}
                type={'number'}
                outerClassName={cn('col-span-full')}
                register={registerNestedField<UserFormType>('intervalsCount')}
                focused
              />
            </>
          )}

          {!isLoading && isError && (
            <WarningMessage>Не удалось загрузить профиль</WarningMessage>
          )}
        </SettingGroup>
      </form>
    </FormProvider>
  );
};

export default AccountSettings;
