import { Device, MOBILE } from './constants';

export const isMobileWidth = () => {
  return window.innerWidth <= MOBILE ? Device.mobile : Device.desktop;
};
