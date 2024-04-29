import { Voicemail } from 'lucide-react';
import { FormProvider, useForm } from 'react-hook-form';
import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import InputField from '@/src/components/ui/InputField';
import type { IAuthForm } from '@/src/types';
import { registerNestedField } from '@/src/utils/misc';

const TestComponent = () => {
  const methods = useForm<IAuthForm>();

  return (
    <FormProvider {...methods}>
      <form>
        <InputField register={registerNestedField<IAuthForm>('email')} />
        <InputField
          register={registerNestedField<IAuthForm>('password')}
          type={'password'}
        />

        <InputField
          icon={Voicemail}
          description={'SR Only text'}
          placeholder={'Placeholder...???'}
          type={undefined}
        />
      </form>
    </FormProvider>
  );
};

describe('InputField component', () => {
  test('It renders', () => {
    expectToRender(<TestComponent />);
  });

  test('No form context', () => {
    expectToRender(<InputField />);
  });
});
