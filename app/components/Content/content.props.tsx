import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
