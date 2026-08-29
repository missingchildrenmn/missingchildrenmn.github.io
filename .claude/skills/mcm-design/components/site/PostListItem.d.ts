/** One blog entry in a list: muted date, h3 link, justified excerpt. */
export interface PostListItemProps {
  date: string;
  title: string;
  href?: string;
  excerpt?: React.ReactNode;
  style?: React.CSSProperties;
}
export function PostListItem(props: PostListItemProps): JSX.Element;
