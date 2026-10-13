/** Square-cornered text input. "boxed" = placeholder-as-label (hero lead form); "labeled" = bold label above (full estimate form). */
export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  type?: string;
  name?: string;
  variant?: 'labeled' | 'boxed';
  required?: boolean;
  /** error message shown under the field */
  error?: string;
  style?: React.CSSProperties;
}
export declare function TextField(props: TextFieldProps): JSX.Element;
