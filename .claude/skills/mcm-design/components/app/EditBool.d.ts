/** Label + toggle, justified end, green when on. */
export interface EditBoolProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
}
export function EditBool(props: EditBoolProps): JSX.Element;
