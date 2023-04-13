import MapIcon from '@/components/icons/MapIcon';
import ProjectsIcon from '@/components/icons/ProjectsIcons';
import { ROUTES } from '@/routes';

import NavItem from './NavItem';
import { INavItem } from './types';

export default function NavListItems() {
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
    <>
      {navItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
    </>
  );
}
