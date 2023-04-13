import Content from '@/components/base/Content';
import BottomNav from '@/components/Nav/BottomNav';
import SideNav from '@/components/Nav/SideNav';
import TopNav from '@/components/Nav/TopNav';
import NavProvider from '@/context/NavContext';

export default function Home() {
  return (
    <div className={styles.root}>
      <NavProvider>
        <TopNav />
        <SideNav />
        <Content />
        <BottomNav />
      </NavProvider>
    </div>
  );
}

const styles = {
  root: 'relative h-screen w-screen overflow-hidden',
};
