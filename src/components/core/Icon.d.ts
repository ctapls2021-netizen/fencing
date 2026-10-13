/** Thin-line icon (Lucide, fetched from CDN and inlined; stroke inherits color). Substitute for the brand's thin blue outline icons. */
export interface IconProps {
  /** Lucide icon name, e.g. "phone", "shield-check", "factory", "droplet", "arrow-right" */
  name: string;
  /** px, default 18 */
  size?: number;
  /** any CSS color, default currentColor */
  color?: string;
  /** accessible label; omit for decorative */
  title?: string;
  /** stroke width override (Lucide default 2); e.g. 1.25 for extra-thin */
  stroke?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
