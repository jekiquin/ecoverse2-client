import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { defaultVoidFunction } from '@/utils';

interface Props extends PropsWithChildren {
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

Button.defaultProps = {
  className: '',
  onClick: defaultVoidFunction,
};

export default function Button({ className, onClick, children }: Props) {
  return (
    <button className={twMerge(styles.root, className)} onClick={onClick}>
      {children}
    </button>
  );
}

const styles = {
  root: 'px-2 py-1 rounded-lg cursor-pointer',
};
