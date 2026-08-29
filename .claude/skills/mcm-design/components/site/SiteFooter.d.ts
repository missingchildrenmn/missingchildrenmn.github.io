/** Site footer: title, contact column, optional link column, mission text. */
export interface SiteFooterProps {
  title?: string;
  email?: string;
  links?: { label: string; href?: string }[];
  /** Mission statement (site.description). */
  description?: string;
  style?: React.CSSProperties;
}
export function SiteFooter(props: SiteFooterProps): JSX.Element;
