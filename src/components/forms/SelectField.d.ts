/** Square select with thin chevron, same metrics as TextField. */
export interface SelectFieldProps {
  label?: string;
  placeholder?: string;
  options?: string[];
  value?: string;
  onChange?: (e: any) => void;
  name?: string;
  variant?: 'labeled' | 'boxed';
  style?: React.CSSProperties;
}
export declare function SelectField(props: SelectFieldProps): JSX.Element;
