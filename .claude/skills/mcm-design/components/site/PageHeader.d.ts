/** Page title block (h1 with 1.5rem top / 1rem bottom padding). */
export interface PageHeaderProps {
  title: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function PageHeader(props: PageHeaderProps): JSX.Element;
