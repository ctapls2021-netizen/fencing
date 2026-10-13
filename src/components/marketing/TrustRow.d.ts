/** Row of thin-line icons with short proof points, sits at the bottom of the hero photo. */
export interface TrustRowProps {
  /** [{icon: lucide name, label}] — defaults to 30+ Years / LA Factory / Rust-Proof / 0% Financing */
  items?: { icon: string; label: string }[];
  /** gold on gates pages, light blue/white on pergola pages */
  iconColor?: string;
  color?: string;
  style?: React.CSSProperties;
}
export declare function TrustRow(props: TrustRowProps): JSX.Element;
