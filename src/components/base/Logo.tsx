import { twMerge } from 'tailwind-merge';

import { logo, LogoStyle } from '@/utils/constants';

type Props = {
  className: string;
  isFull: boolean;
};

Logo.defaultProps = {
  className: '',
  isFull: true,
};

export default function Logo({ className, isFull }: Props) {
  const logoStyle = isFull ? LogoStyle.full : LogoStyle.icon;
  return (
    <div className={twMerge(styles.root, className)}>
      <img
        src={logo[LogoStyle.full]}
        alt="ecoverse home"
        className={styles.img}
      />
    </div>
  );
}

const styles = {
  root: 'h-6 w-auto',
  img: 'h-full w-full object-cover object-left',
};
