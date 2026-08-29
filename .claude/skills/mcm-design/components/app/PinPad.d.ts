/** The unlock / PIN-setup card: white 12px card, 50x60 digit boxes, hint text, actions slot. */
export interface PinPadProps {
  title?: string;
  subtitle?: string;
  digits?: number;
  /** How many digits are entered so far. */
  filled?: number;
  hint?: string;
  focusIndex?: number;
  /** Action buttons and secondary links. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function PinPad(props: PinPadProps): JSX.Element;
