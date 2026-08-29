/**
 * Jekyll site header: 5px teal top rule, hairline bottom border, site title
 * left, page links right.
 * @startingPoint section="Website" subtitle="Site header, footer, banners, lists" viewport="700x300"
 */
export interface SiteHeaderProps {
  title?: string;
  links?: { label: string; href?: string; onClick?: () => void }[];
  /** Label of the current page, rendered semibold teal. */
  current?: string;
  style?: React.CSSProperties;
}
export function SiteHeader(props: SiteHeaderProps): JSX.Element;
