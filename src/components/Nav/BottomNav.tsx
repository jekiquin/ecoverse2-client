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
  root: 'relative overflow-x-hidden md:hidden ',
  list: 'w-full flex justify-evenly align-center px-8 py-4',
};
