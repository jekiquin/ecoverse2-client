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
  root: 'absolute top-0 left-0 right-0 mt-12 mb-16 content-mobile overflow-y-auto md:h-screen md:ml-16 md:my-0',
  offset: '',
};
