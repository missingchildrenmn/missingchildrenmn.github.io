/**
 * An Ionicons glyph, self-hosted and tinted with currentColor.
 * Available names: people-outline, information-circle-outline, download-outline,
 * help-circle-outline, settings-outline, log-out-outline, add-circle, trash,
 * menu, create-outline, camera-outline.
 */
export interface IconProps {
  name: string;
  size?: number;
  /** Path prefix to assets/ for nested pages, e.g. "../..". */
  base?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
