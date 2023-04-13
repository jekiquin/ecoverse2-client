import NavAccount from './NavAccount';
import NavLogo from './NavLogo';

export default function TopNav() {
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <NavLogo className={styles.logo} />
        <NavAccount />
      </ul>
    </nav>
  );
}

const styles = {
  root: 'fixed top-0 left-0 right-0 z-10 overflow-x-hidden px-4 py-2 bg-white md:hidden',
  logo: 'mb-0 ml-0',
  list: 'w-full flex justify-between items-center',
};
