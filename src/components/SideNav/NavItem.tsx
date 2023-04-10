import React from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { INavItem } from './types';

interface Props extends INavItem {
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
  className,
}: Props) {
  return (
    <li className={twMerge(styles.root, className)}>
      <NavLink to={href} className={styles.link}>
        <Icon className={styles.icon} />
        <p className={styles.label}>{label}</p>
      </NavLink>
    </li>
  );
}

const styles = {
  root: 'overflow-hidden h-6',
  link: 'flex items-center gap-4 h-full',
  icon: 'h-full w-auto grow-0 shrink-0',
  label: 'shrink-1',
};
