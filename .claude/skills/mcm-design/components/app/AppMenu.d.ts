/** KidsIdKit side menu: teal toolbar, ionicon rows, groups split by a green hairline. */
export interface AppMenuProps {
  title?: string;
  /** Groups of items; a 2px green divider is drawn between groups. */
  groups?: { label: string; icon: string }[][];
  active?: string;
  onSelect?: (item: { label: string; icon: string }) => void;
  style?: React.CSSProperties;
}
export function AppMenu(props: AppMenuProps): JSX.Element;
