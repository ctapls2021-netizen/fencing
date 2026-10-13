/** Accordion row: bold question, small round +/− toggle, light-blue hairline divider. */
export interface FaqItemProps {
  question: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  style?: React.CSSProperties;
}
export declare function FaqItem(props: FaqItemProps): JSX.Element;
