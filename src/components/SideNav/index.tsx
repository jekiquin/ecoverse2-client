import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '@/components/base/Button';
import LeftChevron from '@/components/icons/LeftChevron';

import NavList from './NavList';

export default function SideNav() {
  const [navOpen, setNavOpen] = useState<boolean>(true);

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
      <NavList navOpen={navOpen} />
    </nav>
  );
}

const styles = {
  root: 'h-screen w-20 py-4 px-2 flex flex-col relative transition-all border',
  navOpen: 'w-56',
  button:
    'absolute w-10 h-10 p-3 border rounded-full rotate-180 right-0 translate-x-2/4 z-10 transition-all bg-white',
  buttonRotate: 'rotate-0',
  buttonImg: 'h-full w-full',
};
