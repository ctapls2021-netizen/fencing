/**
 * Mulholland CTA button. Square-cornered (2px), Plus Jakarta Sans bold.
 * @startingPoint section="Core" subtitle="Primary, gold CTA, outline and white buttons" viewport="700x300"
 */
export interface ButtonProps {
  /** primary = brand blue; accent = gold marketing CTA (uppercase by default); outline-gold = secondary on photos ("Or Call Now"); white = on blue/photo; outline-light; outline-blue = phone pill in header; navy */
  variant?: 'primary' | 'accent' | 'outline-gold' | 'white' | 'outline-light' | 'outline-blue' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name rendered before the label */
  icon?: string;
  /** Lucide icon name rendered after the label */
  iconRight?: string;
  /** force uppercase (default true for accent) */
  uppercase?: boolean;
  /** wide letter-spaced label, as in the brand guide's "B o o k  A  F r e e" style */
  tracked?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: (e: any) => void;
  type?: 'button' | 'submit';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
