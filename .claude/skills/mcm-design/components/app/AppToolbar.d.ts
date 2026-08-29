/**
 * KidsIdKit page header: solid teal bar with menu button and page title.
 * @startingPoint section="KidsIdKit app" subtitle="Toolbar, menu, cards, fields, PIN" viewport="700x360"
 */
export interface AppToolbarProps {
  title: string;
  onMenu?: () => void;
  trailing?: React.ReactNode;
  style?: React.CSSProperties;
}
export function AppToolbar(props: AppToolbarProps): JSX.Element;
