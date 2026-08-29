/**
 * Resource / navigation link list. "touch" spacing reproduces the app's
 * 18px block links with 16px gaps; "inline" is the compact site bullet list.
 */
export interface LinkListProps {
  items: { label: string; href?: string; note?: string }[];
  spacing?: 'touch' | 'inline';
  style?: React.CSSProperties;
}
export function LinkList(props: LinkListProps): JSX.Element;
