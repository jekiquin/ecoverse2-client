import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';

export default function Home() {
  return (
    <main className={styles.root}>
      <Header />
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
