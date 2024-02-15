import React from 'react';
import { ContentProps } from './content.props';
import styles from './content.module.css';
import cn from 'classnames';

export const Content = ({
  children,
  className,
  ...props
}: ContentProps): JSX.Element => {
  return (
    <div className={cn(styles.content, className)} {...props}>
      {children}
    </div>
  );
};
