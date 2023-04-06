import { useEffect, useState } from 'react';

import { isMobileWidth } from '@/utils';
import { Device } from '@/utils/constants';

export default function useCheckWidth() {
  const [device, setDevice] = useState<Device>(isMobileWidth());

  useEffect(() => {
    window.addEventListener('resize', () => {
      const isResizedWidthMobile = isMobileWidth();

      setDevice(isResizedWidthMobile);
    });
  }, []);

  return device;
}
