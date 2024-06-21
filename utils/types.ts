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

export interface productProps {
  id: string;
  name: string;
  image: string;
  description: string;
}
[];
