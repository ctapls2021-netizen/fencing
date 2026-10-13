/** Five gold stars, bold-italic headline, italic light quote, divider, name/location and a "Verified Project" badge line. */
export interface TestimonialCardProps {
  title: string;
  quote: string;
  name: string;
  location?: string;
  /** shown as "Verified Project: …" */
  project?: string;
  /** onBlue = white text on blue panel (default); onWhite = ink text, blue name */
  tone?: 'onBlue' | 'onWhite';
  style?: React.CSSProperties;
}
export declare function TestimonialCard(props: TestimonialCardProps): JSX.Element;
