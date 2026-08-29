/** Wide letterbox photograph that opens each site page. */
export interface PageBannerProps {
  /** e.g. "assets/imagery/missing-child-banner.jpg". */
  src: string;
  alt?: string;
  height?: number;
  style?: React.CSSProperties;
}
export function PageBanner(props: PageBannerProps): JSX.Element;
