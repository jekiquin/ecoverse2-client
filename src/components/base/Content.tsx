import { Outlet } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { useNavContext } from '@/context/NavContext';

export default function Content() {
  const { navOpen } = useNavContext();

  return (
    <div className={twMerge(styles.root, navOpen && styles.offset)}>
      <Outlet />
    </div>
  );
}
const styles = {
  root: 'absolute inset-0 md:ml-16',
  offset: '',
};
