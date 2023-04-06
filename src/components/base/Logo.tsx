import { twMerge } from 'tailwind-merge';

import logoMobile from '@/assets/images/icon.svg';
import logoDesktop from '@/assets/images/master-logo.svg';

type Props = {
  className: string;
};

Logo.defaultProps = {
  className: '',
};

export default function Logo({ className }: Props) {
  return (
    <div className={twMerge(styles.root, className)}>
      <img
        src={logoMobile}
        alt="ecoverse home"
        className={twMerge(styles.img, styles.mobile)}
      />
      <img src={logoDesktop} alt="ecoverse home" className={styles.img} />
    </div>
  );
}

const styles = {
  root: 'h-6 w-auto',
  img: 'h-full w-auto hidden lg:block',
  mobile: 'block lg:hidden',
};
