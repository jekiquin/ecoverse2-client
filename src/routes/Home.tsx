import { Outlet } from 'react-router-dom';

import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Outlet />
    </main>
  );
}
