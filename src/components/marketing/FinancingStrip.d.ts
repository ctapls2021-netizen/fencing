/** "0% FINANCING AVAILABLE" band with payment-card logos and an italic note. */
export interface FinancingStripProps {
  /** blue = brand-blue band (default); light = gray band with blue text (use directly under a hero) */
  tone?: 'blue' | 'light';
  note?: string;
  style?: React.CSSProperties;
}
export declare function FinancingStrip(props: FinancingStripProps): JSX.Element;
