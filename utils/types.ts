export interface btnProps {
  label: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: string;
  loading?: boolean;
}
