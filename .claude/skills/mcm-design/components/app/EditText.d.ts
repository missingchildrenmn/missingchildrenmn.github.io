/** Outlined text field (ion-input fill="outline" mode="md"); multiline and password modes. */
export interface EditTextProps {
  label?: string;
  value?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  type?: 'text' | 'password' | 'tel' | 'email' | 'date';
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
}
export function EditText(props: EditTextProps): JSX.Element;
