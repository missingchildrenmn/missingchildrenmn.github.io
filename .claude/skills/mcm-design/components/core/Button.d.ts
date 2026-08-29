/**
 * Primary action control. Variants mirror the app's CSS classes: primary/save
 * (teal), back/secondary (green), danger, clear, icon.
 * @startingPoint section="Core" subtitle="Buttons, cards, alerts, logo" viewport="700x260"
 */
export interface ButtonProps {
  variant?: 'primary' | 'save' | 'back' | 'secondary' | 'danger' | 'clear' | 'icon';
  /** Full-width block button (used for the app's fixed bottom action). */
  block?: boolean;
  disabled?: boolean;
  /** Render as an anchor instead of a button. */
  href?: string;
  /** Ionicons glyph name, e.g. "add-circle". */
  icon?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}
export function Button(props: ButtonProps): JSX.Element;
