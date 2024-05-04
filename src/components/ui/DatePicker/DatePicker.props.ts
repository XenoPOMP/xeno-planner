export interface DatePickerProps {
  onChange?: (value: string) => void;
  value?: string | Date;
  position: 'left' | 'right';
}
