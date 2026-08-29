/**
 * Modal confirm dialog, matching the app's McmAlert (ion-alert) with a
 * non-dismissable backdrop.
 */
export interface AlertProps {
  header?: string;
  message?: string;
  confirmPrompt?: string;
  /** Omit for a single-action alert. */
  cancelPrompt?: string;
  open?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}
export function Alert(props: AlertProps): JSX.Element | null;
