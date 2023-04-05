import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends PropsWithChildren {
  className: string;
}

Layout.defaultProps = {
  className: '',
};

export default function Layout({ children, className }: Props) {
  return (
    <section className={twMerge(styles.root, className)}>{children}</section>
  );
}

const styles = {
  root: 'container mx-auto p-4 md:px-8',
};
