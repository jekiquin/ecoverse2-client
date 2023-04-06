import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends PropsWithChildren {
  className: string;
  viewBox: [number, number, number, number];
}

Icon.defaultProps = {
  className: '',
  viewBox: [0, 0, 448, 512],
};

export default function Icon({ className, children, viewBox }: Props) {
  return (
    <svg className={twMerge(className)} viewBox={viewBox.toString()}>
      {children}
    </svg>
  );
}
