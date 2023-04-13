import { Outlet } from 'react-router-dom';

import SideNav from '@/components/Nav/SideNav';
import NavProvider from '@/context/NavContext';

export default function Home() {
  return (
    <main className={styles.root}>
      <NavProvider>
        <SideNav />
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </NavProvider>
    </main>
  );
}

const styles = {
  root: 'flex justify-stretch',
  outlet: 'flex-grow',
};
