export type ButtonTheme = 'primary';
export type ButtonVariant = 'default' | 'hollow';

export interface ButtonProps {
  theme?: ButtonTheme;
  variant?: ButtonVariant;
  thin?: boolean;
}
