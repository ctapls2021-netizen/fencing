/** Icon + bold Raleway title + light description. inline = blue square icon left; stacked = thin outline icon on top. */
export interface FeatureItemProps {
  /** Lucide icon name */
  icon?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  layout?: 'inline' | 'stacked';
  /** e.g. var(--mb-blue) for blue titles (fencing / pergola feature rows) */
  titleColor?: string;
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export declare function FeatureItem(props: FeatureItemProps): JSX.Element;
