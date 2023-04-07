import { MOBILE } from './constants';

export const isMobileWidth = () => {
  return window.innerWidth <= MOBILE;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const defaultVoidFunction = () => {};
