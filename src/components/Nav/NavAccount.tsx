import Login from '@/components/icons/Login';
import Logout from '@/components/icons/Logout';
import { ROUTES } from '@/routes';

import NavItem from './NavItem';

export default function NavAccount() {
  const log = {
    in: {
      label: 'Login',
      Icon: Login,
      href: ROUTES.ONBOARDING,
      isPrivate: false,
    },
    out: {
      label: 'Logout',
      Icon: Logout,
      href: ROUTES.ONBOARDING,
      isPrivate: false,
    },
  };
  return <NavItem {...log.in} />;
}
