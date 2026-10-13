/** Tiny wide-tracked caps line above a headline ("QUESTIONS, ANSWERED", "VOICES OF TRUST"). */
export interface EyebrowProps {
  children?: React.ReactNode;
  /** default brand blue; use #fff on blue */
  color?: string;
  align?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
