'use client';

import cn from 'classnames';
import { Clock9, SquarePen } from 'lucide-react';
import { type FC } from 'react';

import { COLORS } from '@/app/(dashboard)/time-blocking/form/colors.data.ts';
import Button from '@/src/components/ui/Button';
import InputField from '@/src/components/ui/InputField';
import SelectField from '@/src/components/ui/SelectField';

import styles from './NewBlockForm.module.scss';
import type { NewBlockFormProps } from './NewBlockForm.props';

const NewBlockForm: FC<NewBlockFormProps> = () => {
  return (
    <form className={cn(styles.addNewBlock)}>
      <section className={cn(styles.inputGroup)}>
        <InputField
          placeholder={'Название'}
          icon={SquarePen}
        />

        <InputField
          placeholder={'Продолжительность (в мин.)'}
          icon={Clock9}
        />
      </section>

      <section>
        <p>Цвет:</p>

        <SelectField
          currentItem={'royalblue'}
          items={COLORS.map(col => ({ name: col, value: col }))}
          type={'colors'}
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
  );
};

export default NewBlockForm;
