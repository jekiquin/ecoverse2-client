import { NavLink, NavLinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { useNavContext } from '@/context/NavContext';
import { defaultClassNameProps } from '@/utils/constants';

import { INavItem } from './types';

interface Props extends INavItem {
  className: string;
}

NavItem.defaultProps = defaultClassNameProps;

export default function NavItem({
  label,
  href,
  Icon,
  isPrivate, // this will be used somewhere
  className,
}: Props) {
  const { navOpen } = useNavContext();

  return (
    <li className={twMerge(styles.root, className)}>
      <NavLink to={href} className={styles.link}>
        <Icon className={styles.icon} />
        <p className={styles.label}>{label}</p>
        <p className={twMerge(styles.tooltip, navOpen && styles.tooltipClosed)}>
          {label}
        </p>
      </NavLink>
    </li>
  );
}

const styles = {
  root: 'overflow-hidden bg-white custom-tooltip',
  link: 'flex items-center gap-6 h-8 p-1 rounded-md rrd-link',
  icon: 'h-7 w-7 grow-0 shrink-0 fill-primary rrd-link__icon',
  label: 'shrink-1 w-full hidden md:block',
  tooltip: 'custom-tooltip__ctx',
  tooltipClosed: 'custom-tooltip__ctx--closed',
};
