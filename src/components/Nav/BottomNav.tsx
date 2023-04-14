import NavListItems from './NavListItems';

export default function BottomNav() {
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <NavListItems />
      </ul>
    </nav>
  );
}

const styles = {
  root: 'fixed bottom-0 right-0 left-0 z-10 overflow-hidden px-8 py-4 bg-white border-solid border-t-2 border-accent rounded-md shadow-bottomNav md:hidden',
  list: 'w-full flex justify-evenly items-center',
};
