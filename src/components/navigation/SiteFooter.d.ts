/** Minimal landing-page footer: logo + "Since 1994…" blurb, light-blue rule, copyright + proof points. */
export interface SiteFooterProps {
  blurb?: string;
  year?: number;
  style?: React.CSSProperties;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
