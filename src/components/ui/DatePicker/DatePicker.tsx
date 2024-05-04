import { useOutside } from '@pacote/react-use-outside';
import cn from 'classnames';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { X } from 'lucide-react';
import { type FC, useState } from 'react';
import { DayPicker, type SelectSingleEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import type { DatePickerProps } from './DatePicker.props';
import { formatCaption } from './DatePickerCaption.tsx';

dayjs.extend(LocalizedFormat);

const DatePicker: FC<DatePickerProps> = ({ onChange, value, position }) => {
  const [selected, setSelected] = useState<Date>();
  const [isShown, setIsShown] = useState<boolean>(false);
  const ref = useOutside<HTMLDivElement>('click', () => setIsShown(false));

  /** Displaying date value. */
  const dayValue = value || selected;

  const handleDaySelect: SelectSingleEventHandler = date => {
    const ISOdate = date?.toISOString();
    setSelected(date);

    if (ISOdate) {
      onChange?.(ISOdate);
      setIsShown(false);
    } else {
      onChange?.('');
    }
  };

  return (
    <div
      className={cn('relative')}
      ref={ref}
    >
      <button onClick={() => setIsShown(prev => !prev)}>
        {dayValue ? dayjs(dayValue).format('LL') : 'Нажмите, чтобы выбрать'}

        {dayValue && (
          <button
            className={
              'absolute -top-[.5em] -right-[1em] opacity-30 hover:opacity-100 transition-opacity'
            }
            onClick={() => onChange?.('')}
          >
            <X size={'.7em'} />
          </button>
        )}

        {isShown && (
          <div
            className={cn(
              'absolute p-[.625em] slide bg-secondary-bg-accent shadow rounded-lg',
              position === 'left' ? '-left-[1em]' : '-right-[1em]',
            )}
            style={{
              top: 'calc(100% + .7em)',
            }}
          >
            <DayPicker
              fromYear={2023}
              toYear={2054}
              initialFocus={isShown}
              mode={'single'}
              defaultMonth={selected}
              selected={selected}
              onSelect={handleDaySelect}
              weekStartsOn={1}
              formatters={{
                formatCaption,
              }}
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default DatePicker;
