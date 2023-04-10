import MapIcon from '@/components/icons/MapIcon';
import { ROUTES } from '@/routes';

import ProjectsIcon from '../icons/ProjectsIcons';
import NavAccount from './NavAccount';
import NavItem from './NavItem';
import NavLogo from './NavLogo';
import { INavItem } from './types';

export default function NavList() {
  const navItems: INavItem[] = [
    {
      label: 'Map',
      Icon: MapIcon,
      href: ROUTES.HOME,
      isPrivate: false,
    },
    {
      label: 'Projects',
      Icon: ProjectsIcon,
      href: ROUTES.PROJECTS,
      isPrivate: false,
    },
  ];

  return (
    <ul className={styles.root}>
      <NavLogo />
      {navItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
      <li className={styles.divider}></li>
      <NavAccount />
    </ul>
  );
}

const styles = {
  root: 'flex flex-col gap-6 h-full',
  divider: 'mt-auto h-1 w-full bg-slate-200',
};
