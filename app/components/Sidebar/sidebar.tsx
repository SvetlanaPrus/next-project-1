import React from 'react';
import Link from 'next/link';
import { SidebarProps } from './sidebar.props';
import styles from './sidebar.module.css';
import cn from 'classnames';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(styles.sidebar, className)} {...props}>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/login">Login</Link>
    </div>
  );
};
