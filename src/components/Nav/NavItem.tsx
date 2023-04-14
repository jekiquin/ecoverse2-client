import { NavLink } from 'react-router-dom';
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
  root: 'overflow-hidden h-6 bg-white custom-tooltip',
  link: 'flex items-center gap-4 h-full',
  icon: 'h-full w-auto grow-0 shrink-0 fill-primary',
  label: 'shrink-1 w-full hidden md:block',
  tooltip: 'custom-tooltip__ctx',
  tooltipClosed: 'custom-tooltip__ctx--closed',
};
