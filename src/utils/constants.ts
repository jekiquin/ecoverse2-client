import logoMobile from '@/assets/images/icon.svg';
import logoDesktop from '@/assets/images/master-logo.svg';

export const MOBILE = 768;

export enum Device {
  mobile,
  desktop,
}

export const logo = {
  [Device.mobile]: logoMobile,
  [Device.desktop]: logoDesktop,
};
