/**
 * Lead-capture form. "hero" = compact blue gradient card beside the hero H1; "full" / "full-gold" = two-column labeled estimate form for the closing section.
 * @startingPoint section="Forms" subtitle="Hero lead form and full estimate form" viewport="700x520"
 */
export interface LeadFormProps {
  variant?: 'hero' | 'full' | 'full-gold';
  /** hero title, default "Ready To Get Started On Your Project?" */
  title?: string;
  /** optional thin top banner on the hero card, e.g. "0% Financing Available · 18 Months 0% Interest*" */
  banner?: string;
  submitLabel?: React.ReactNode;
  /** product-interest options */
  products?: string[];
  onSubmit?: (e: any) => void;
  style?: React.CSSProperties;
}
export declare function LeadForm(props: LeadFormProps): JSX.Element;
