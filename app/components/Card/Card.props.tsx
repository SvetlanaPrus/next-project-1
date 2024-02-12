import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  name?: ReactNode;
  lastLikeDuration?: ReactNode;
  numberLikes?: ReactNode;
  like?: boolean;
  header?: ReactNode;
  paragraph?: ReactNode;
  readDuration?: ReactNode;
  link?: ReactNode;
}
