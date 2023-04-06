import { Link, NavLink } from 'react-router-dom';

import Logo from '@/components/base/Logo';
import { ROUTES } from '@/routes';

export default function Navigation() {
  return (
    <header className="p-4">
      <div className="max-w-7xl mx-auto">
        <Link to={ROUTES.HOME}>
          <Logo />
        </Link>
      </div>
    </header>
  );
}
