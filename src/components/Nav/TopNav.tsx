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
  root: 'relative overflow-x-hidden px-4 py-2 md:hidden',
  logo: 'mb-0 ml-0',
  list: 'w-full flex justify-between items-center',
};
