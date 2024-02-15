import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface LikeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  numberLikes?: ReactNode;
  like?: string;
}
