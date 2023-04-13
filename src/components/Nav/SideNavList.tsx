import NavAccount from './NavAccount';
import NavListItems from './NavListItems';
import NavLogo from './NavLogo';

export default function SideNavList() {
  return (
    <ul className={styles.root}>
      <NavLogo />
      <NavListItems />
      <li className={styles.divider}></li>
      <NavAccount />
    </ul>
  );
}

const styles = {
  root: 'flex flex-col gap-6 h-full',
  divider: 'mt-auto h-1 w-full bg-slate-200',
};
