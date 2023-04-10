import React, { ReactElement, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { useNavContext } from '@/context/NavContext';
import useShowToolTip from '@/hooks/useShowToolTip';
import { DEFAULT_CLASSNAME_PROPS } from '@/utils/constants';

import { INavItem } from './types';

interface Props extends INavItem {
  className: string;
}

NavItem.defaultProps = DEFAULT_CLASSNAME_PROPS;

export default function NavItem({
  label,
  href,
  Icon,
  isPrivate,
  className,
}: Props) {
  const { showTooltip, setElement } = useShowToolTip();
  const { navOpen } = useNavContext();

  const itemRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    setElement(itemRef.current);
  }, []);

  return (
    <li ref={itemRef} className={twMerge(styles.root, className)}>
      <NavLink to={href} className={styles.link}>
        <Icon className={styles.icon} />
        <p className={styles.label}>{label}</p>
        <p
          className={twMerge(
            styles.tooltip,
            showTooltip && !navOpen && styles.showTooltip
          )}
        >
          {label}
        </p>
      </NavLink>
    </li>
  );
}

const styles = {
  root: 'overflow-hidden h-6 bg-white',
  link: 'flex items-center gap-4 h-full',
  icon: 'h-full w-auto grow-0 shrink-0',
  label: 'shrink-1 w-full',
  tooltip:
    'absolute -z-10 left-full px-4 py-2 rounded-lg opacity-0 translate-x-1 transition-opacity bg-white',
  showTooltip: 'z-10 opacity-100',
};
