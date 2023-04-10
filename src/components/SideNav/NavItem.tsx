import React from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { INavItem } from './types';

interface Props extends INavItem {
  navOpen: boolean;
  className: string;
}

NavItem.defaultProps = {
  className: '',
};

export default function NavItem({
  label,
  href,
  Icon,
  isPrivate,
  navOpen,
  className,
}: Props) {
  return (
    <li className={twMerge(className, styles.root)}>
      <NavLink to={href} className={styles.link}>
        <Icon className={styles.icon} />
        <p className={styles.label}>{label}</p>
      </NavLink>
    </li>
  );
}

const styles = {
  root: 'overflow-hidden',
  link: 'flex items-center gap-4',
  icon: 'h-6 w-6 grow-0 shrink-0',
  label: 'shrink-1',
};
