import logoIcon from '@/assets/images/icon.svg';
import logoFull from '@/assets/images/master-logo.svg';

export const MOBILE = 768;

export enum Device {
  mobile,
  desktop,
}

export enum LogoStyle {
  icon,
  full,
}

export const logo = {
  [LogoStyle.icon]: logoIcon,
  [LogoStyle.full]: logoFull,
};
