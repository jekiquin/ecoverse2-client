import { Outlet } from 'react-router-dom';

import BottomNav from '@/components/Nav/BottomNav';
import SideNav from '@/components/Nav/SideNav';
import TopNav from '@/components/Nav/TopNav';
import NavProvider from '@/context/NavContext';

export default function Home() {
  return (
    <main className={styles.root}>
      <NavProvider>
        <TopNav />
        <SideNav />
        <div className={styles.outlet}>
          <Outlet />
        </div>
        <BottomNav />
      </NavProvider>
    </main>
  );
}

const styles = {
  root: 'h-screen overflow-y-hidden flex flex-col md:flex-row md:justify-stretch',
  outlet: 'flex-grow',
};
