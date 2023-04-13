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
  root: 'relative overflow-x-hidden px-8 py-4 md:hidden ',
  list: 'w-full flex justify-evenly items-center',
};
