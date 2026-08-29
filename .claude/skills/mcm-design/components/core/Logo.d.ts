/**
 * The Missing Children Minnesota mark — wordmark plus Minnesota outline with
 * a child silhouette. Image asset only; never redraw it.
 */
export interface LogoProps {
  /** teal = primary mark, teal2x = 2x raster, mono = black print mark, white = knockout for dark teal surfaces, app = KidsIdKit app icon. All transparent PNG except app (SVG). */
  variant?: 'teal' | 'teal2x' | 'mono' | 'white' | 'app';
  height?: number;
  /** Path prefix to assets/ for pages nested in a subfolder, e.g. "../..". */
  base?: string;
  alt?: string;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
