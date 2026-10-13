/**
 * Landing-page header: logo left; outlined phone pill + blue "FREE ESTIMATE" right. No nav links (ad landing pages are single-goal).
 * @startingPoint section="Navigation" subtitle="Landing-page header with phone + estimate CTA" viewport="1100x64"
 */
export interface SiteHeaderProps {
  phone?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** true = full-height blue CTA block flush right (pergola page style); false = compact button attached to phone pill (gates page style) */
  ctaBlock?: boolean;
  /** CTA button color: primary (blue, default) or accent (gold) */
  ctaVariant?: 'primary' | 'accent';
  onCta?: (e: any) => void;
  style?: React.CSSProperties;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
