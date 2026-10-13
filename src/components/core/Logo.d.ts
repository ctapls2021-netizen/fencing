/** Mulholland Brand logo lockups (real PNG files from assets/logo). Set window.MB_ASSET_BASE to the assets/ folder path relative to your page. */
export interface LogoProps {
  /** primary = blue road-sign "Out of the Ordinary" (default, on white/photo); white / white-outline = "Aluminum Technologies" lockups for blue/dark grounds; mark / mark-white = circular road mark */
  variant?: 'primary' | 'white' | 'white-outline' | 'mark' | 'mark-white';
  /** px height, default 36 */
  height?: number;
  /** override image URL */
  src?: string;
  alt?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
