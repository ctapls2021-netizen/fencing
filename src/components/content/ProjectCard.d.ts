/** Installed-project photo with bottom-left location kicker + caption ("BEL AIR, CA — Pedestrian Entry Gate"). Used in "Inspirational transformations" mosaics. */
export interface ProjectCardProps {
  image: string;
  /** "Pasadena, CA" — rendered as tiny tracked caps */
  location?: string;
  title: string;
  /** px or CSS length, default 240 */
  height?: number | string;
  style?: React.CSSProperties;
}
export declare function ProjectCard(props: ProjectCardProps): JSX.Element;
