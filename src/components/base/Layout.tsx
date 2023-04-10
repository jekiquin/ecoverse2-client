import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { DEFAULT_CLASSNAME_PROPS } from '@/utils/constants';

interface Props extends PropsWithChildren {
  className: string;
}

Layout.defaultProps = DEFAULT_CLASSNAME_PROPS;

export default function Layout({ children, className }: Props) {
  return <div className={twMerge(styles.root, className)}>{children}</div>;
}

const styles = {
  root: 'container mx-auto p-4 md:px-8',
};
