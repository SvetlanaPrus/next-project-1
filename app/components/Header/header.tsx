import React from 'react';
import { HeaderProps } from './header.props';
import styles from './header.module.css';
import cn from 'classnames';
import GitIcon from './github.svg';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <div className={cn(styles.top, className)} {...props}>
      <span className={cn(styles.name)}>My blog</span>
      <span className={cn(styles.gitIcon)}>
        <a
          href="https://github.com/SvetlanaPrus/next-project-1"
          target="_blank"
        >
          <GitIcon />
        </a>
      </span>
    </div>
  );
};
