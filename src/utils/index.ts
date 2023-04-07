import { Device, MOBILE } from './constants';

export const isMobileWidth = () => {
  return window.innerWidth <= MOBILE ? Device.mobile : Device.desktop;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const defaultVoidFunction = () => {};
