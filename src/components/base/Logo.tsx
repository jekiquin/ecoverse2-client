import { twMerge } from 'tailwind-merge';

import useCheckWidth from '@/hooks/useCheckWidth';
import { logo } from '@/utils/constants';

type Props = {
  className: string;
};

Logo.defaultProps = {
  className: '',
};

export default function Logo({ className }: Props) {
  const device = useCheckWidth();

  return (
    <div className={twMerge(styles.root, className)}>
      <img src={logo[device]} alt="ecoverse home" className={styles.img} />
    </div>
  );
}

const styles = {
  root: 'h-6 w-auto',
  img: 'h-full w-aut',
};
