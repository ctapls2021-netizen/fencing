/** Full-width blue band with a translucent pill: "Request Free On-Site Estimate · Or Call Now: (800) 562-5770". Repeated between landing-page sections. */
export interface CtaBarProps {
  label?: string;
  phone?: string;
  href?: string;
  /** tighter padding when used inside a contained column */
  inset?: boolean;
  style?: React.CSSProperties;
}
export declare function CtaBar(props: CtaBarProps): JSX.Element;
