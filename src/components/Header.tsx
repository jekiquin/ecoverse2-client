import Button from '@/components/base/Button';
import Logo from '@/components/base/Logo';

export default function Header() {
  return (
    <header className={styles.root}>
      <Button>
        <Logo />
      </Button>
    </header>
  );
}

const styles = {
  root: 'h-screen',
};
