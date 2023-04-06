import { Link, NavLink } from 'react-router-dom';

import Logo from '@/components/base/Logo';
import { ROUTES } from '@/routes';

export default function Header() {
  return (
    <header className="p-4">
      <div className="max-w-screen-2xl mx-auto flex justify-between">
        <Link to={ROUTES.HOME}>
          <Logo />
        </Link>
      </div>
    </header>
  );
}
