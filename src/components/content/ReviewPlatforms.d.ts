/** Row of review-platform names + ratings above testimonials. Platform names render as plain type (official logos not supplied). */
export interface ReviewPlatformsProps {
  items?: { name: string; rating?: string }[];
  color?: string;
  style?: React.CSSProperties;
}
export declare function ReviewPlatforms(props: ReviewPlatformsProps): JSX.Element;
