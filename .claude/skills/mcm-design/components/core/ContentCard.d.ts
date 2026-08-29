/**
 * The signature MCM content card: white surface, 1px black hairline, 10px
 * radius, and a hard 5px light-teal offset shadow.
 */
export interface ContentCardProps {
  title?: string;
  subtitle?: string;
  /** Absolutely positioned top-right actions (icon buttons). */
  actions?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function ContentCard(props: ContentCardProps): JSX.Element;
