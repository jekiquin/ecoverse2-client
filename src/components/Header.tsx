import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '@/components/base/Button';
import Logo from '@/components/base/Logo';

export default function Header() {
  const [isHeaderExpanded, setIsHeaderExpanded] = useState<boolean>(true);

  const handleExpandHeader = () => {
    setIsHeaderExpanded((prev) => !prev);
  };

  return (
    <header
      className={twMerge(styles.root, isHeaderExpanded && styles.expanded)}
    >
      <Button onClick={handleExpandHeader}>
        <Logo className={styles.logo} isFull={isHeaderExpanded} />
      </Button>
    </header>
  );
}

const styles = {
  root: 'h-screen w-20 py-4 px-2 flex flex-col items-start gap-4 transition-all overflow-hidden border',
  expanded: 'w-56',
  logo: 'h-10',
};
