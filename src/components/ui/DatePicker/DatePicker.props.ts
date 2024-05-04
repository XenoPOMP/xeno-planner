export interface DatePickerProps {
  onChange?: (value: string) => void;
  value?: string;
  position: 'left' | 'right';
}
