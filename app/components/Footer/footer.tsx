import React from 'react';
import { FooterProps } from './footer.props';
import styles from './footer.module.css';
import cn from 'classnames';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <div className={cn(styles.footer, className)} {...props}>
      Foot
    </div>
  );
};
