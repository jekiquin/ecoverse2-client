import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { DEFAULT_CLASSNAME_PROPS } from '@/utils/constants';

export type IconClassName = {
  className: string;
};

interface Props extends PropsWithChildren {
  className: IconClassName['className'];
  viewBox: [number, number, number, number];
}

Icon.defaultProps = {
  ...DEFAULT_CLASSNAME_PROPS,
  viewBox: [0, 0, 448, 512],
};

export default function Icon({ className, children, viewBox }: Props) {
  return (
    <svg className={twMerge(className)} viewBox={viewBox.toString()}>
      {children}
    </svg>
  );
}
