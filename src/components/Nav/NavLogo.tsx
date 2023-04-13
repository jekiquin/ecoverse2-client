import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import EcoverseIcon from '@/components/icons/EcoverseIcon';
import EcoverseIconFull from '@/components/icons/EcoverseIconFull';
import { useNavContext } from '@/context/NavContext';

type Props = {
  className: string;
};

NavLogo.defaultProps = {
  className: '',
};

export default function NavLogo({ className }: Props) {
  const { navOpen } = useNavContext();

  const Icon = navOpen ? EcoverseIconFull : EcoverseIcon;

  return (
    <li className={twMerge(styles.root, className)}>
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
