import { Outlet } from 'react-router-dom';

import SideNav from '@/components/SideNav';

export default function Home() {
  return (
    <main className={styles.root}>
      <SideNav />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </main>
  );
}

const styles = {
  root: 'flex justify-stretch',
  outlet: 'flex-grow',
};
