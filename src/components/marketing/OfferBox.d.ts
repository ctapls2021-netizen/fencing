/** Hairline-bordered promo box on hero photos: gold bold offer + light descriptor + italic note. */
export interface OfferBoxProps {
  /** gold bold part, e.g. "Up to 30% OFF" / "Free Designer" */
  highlight?: string;
  text?: string;
  note?: string;
  /** light text before the highlight, e.g. "+ Get a" */
  prefix?: string;
  style?: React.CSSProperties;
}
export declare function OfferBox(props: OfferBoxProps): JSX.Element;
