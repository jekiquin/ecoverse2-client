import MapIcon from '@/components/icons/MapIcon';
import { ROUTES } from '@/routes';

import ProjectsIcon from '../icons/ProjectsIcons';
import NavAccount from './NavAccount';
import NavItem from './NavItem';
import { INavItem } from './types';

type Props = {
  navOpen: boolean;
};

export default function NavList({ navOpen }: Props) {
  const navItems: INavItem[] = [
    {
      label: 'Home',
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
      {navItems.map((item) => (
        <NavItem key={item.label} navOpen={navOpen} {...item} />
      ))}
      <li className={styles.divider}></li>
      <NavAccount navOpen={navOpen} />
    </ul>
  );
}

const styles = {
  root: 'my-12 flex flex-col gap-6 h-full',
  divider: 'mt-auto h-1 w-full bg-slate-200',
};
