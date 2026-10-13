/** Blue rectangular section label with italic, tracked caps; the first word(s) highlighted in gold ("MAINTENANCE-FREE PERIMETER", "SECURE ENTRANCES"). */
export interface SectionTagProps {
  /** leading highlighted word(s), gold on solid / blue on text variant */
  accent?: string;
  children?: React.ReactNode;
  /** optional Lucide icon before the label */
  icon?: string;
  /** solid = blue block (default); text = no background, used over tinted sections */
  variant?: 'solid' | 'text';
  /** override accent word color */
  accentColor?: string;
  /** override icon color */
  iconColor?: string;
  style?: React.CSSProperties;
}
export declare function SectionTag(props: SectionTagProps): JSX.Element;
