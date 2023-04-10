import React from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { INavItem } from './types';

interface Props extends INavItem {
  navOpen: boolean;
}

export default function NavItem({
  label,
  href,
  Icon,
  isPrivate,
  navOpen,
}: Props) {
  return (
    <li className={styles.root}>
      <NavLink to={href} className={styles.link}>
        <Icon className={styles.icon} />
        <p className={twMerge(styles.label, navOpen && styles.showLabel)}>
          {label}
        </p>
      </NavLink>
    </li>
  );
}

const styles = {
  root: '',
  link: 'flex items-center gap-2',
  icon: 'h-6 w-6 grow-0 shrink-0',
  label: 'w-0 overflow-hidden',
  showLabel: 'w-full',
};
