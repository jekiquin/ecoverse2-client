import { Link } from 'react-router-dom';

import Logo from '@/components/base/Logo';
import { ROUTES } from '@/routes';

export default function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.header}>
        <Link to={ROUTES.HOME}>
          <Logo />
        </Link>
      </div>
    </header>
  );
}

const styles = {
  root: 'p-4',
  header: 'max-w-screen-2xl mx-auto flex justify-between"',
};
