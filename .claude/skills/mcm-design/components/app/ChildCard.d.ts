/** A child record on the Kids screen, with optional photo and remove action. */
export interface ChildCardProps {
  name: string;
  age: number | string;
  birthday?: string;
  /** Nicknames / other names, rendered italic and muted. */
  aliases?: string;
  photo?: string;
  onOpen?: () => void;
  onRemove?: () => void;
  style?: React.CSSProperties;
}
export function ChildCard(props: ChildCardProps): JSX.Element;
