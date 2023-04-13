import { IconClassName } from '@/components/icons/Icon';

export interface INavItem {
  label: string;
  href: string;
  Icon: ({ className }: IconClassName) => JSX.Element;
  isPrivate: boolean;
}
