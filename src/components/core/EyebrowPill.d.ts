/** Outlined capsule kicker with a gold dot, sits above the hero H1 on photos ("• LUXURY GATES & FENCES"). */
export interface EyebrowPillProps {
  children?: React.ReactNode;
  /** light = white outline on photos (default); dark = blue outline on white */
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export declare function EyebrowPill(props: EyebrowPillProps): JSX.Element;
