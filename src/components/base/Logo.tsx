import { twMerge } from 'tailwind-merge';

import { logo, LogoStyle } from '@/utils/constants';

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
        src={logo[LogoStyle.icon]}
        alt="ecoverse home"
        className={styles.img}
      />
    </div>
  );
}

const styles = {
  root: 'h-6 w-auto',
  img: 'h-full w-aut',
};
