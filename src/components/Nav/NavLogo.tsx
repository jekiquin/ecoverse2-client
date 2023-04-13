import { Link } from 'react-router-dom';

import EcoverseIcon from '@/components/icons/EcoverseIcon';
import { useNavContext } from '@/context/NavContext';

import EcoverseIconFull from '../icons/EcoverseIconFull';

export default function NavLogo() {
  const { navOpen } = useNavContext();

  const Icon = navOpen ? EcoverseIconFull : EcoverseIcon;

  return (
    <li className={styles.root}>
      <Link to="/" className={styles.link}>
        <Icon className={styles.icon} />
      </Link>
    </li>
  );
}

const styles = {
  root: 'overflow-hidden mb-2 -ml-1',
  link: 'flex items-center gap-3',
  icon: 'h-8 w-auto shrink-0 grow-0',
};
