import { twMerge } from 'tailwind-merge';

import Button from '@/components/base/Button';
import LeftChevron from '@/components/icons/LeftChevron';
import { useNavContext } from '@/context/NavContext';

import SideNavList from './SideNavList';

export default function SideNav() {
  const { navOpen, setNavOpen } = useNavContext();

  const handleOpenNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <nav className={twMerge(styles.root, navOpen && styles.navOpen)}>
      <Button
        className={twMerge(styles.button, navOpen && styles.buttonRotate)}
        onClick={handleOpenNav}
      >
        <LeftChevron className={styles.buttonImg} />
      </Button>
      <SideNavList />
    </nav>
  );
}

const styles = {
  root: 'h-screen w-16 py-4 px-4 flex flex-col relative transition-all border hidden md:block',
  navOpen: 'w-48',
  button:
    'absolute z-10 top-11 right-0 translate-x-2/4 w-8 h-8 flex justify-center items-center border rounded-full rotate-180 transition-all bg-white',
  buttonRotate: 'rotate-0',
  buttonImg: 'h-4 w-4 opacity-50 transition-all hover:opacity-100',
};
