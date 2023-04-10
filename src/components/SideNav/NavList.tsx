import MapIcon from '@/components/icons/MapIcon';
import { ROUTES } from '@/routes';

import ProjectsIcon from '../icons/ProjectsIcons';
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
    <ul>
      {navItems.map((item) => (
        <NavItem key={item.label} navOpen={navOpen} {...item} />
      ))}
    </ul>
  );
}
