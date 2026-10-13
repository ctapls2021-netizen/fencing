/** Product-line tile: photo with an overlapping white card holding a line-art product icon and a blue label bar ("Find Your Perfect Gate Style" grid). */
export interface ProductTileProps {
  /** photo URL */
  image: string;
  /** product icon file stem from assets/icons/products (e.g. "horizontal-slat-gate") or full URL */
  icon?: string;
  /** label, may contain a line break */
  label: React.ReactNode;
  href?: string;
  onClick?: (e: any) => void;
  style?: React.CSSProperties;
}
export declare function ProductTile(props: ProductTileProps): JSX.Element;
