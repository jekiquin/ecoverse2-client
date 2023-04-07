import { useEffect, useState } from 'react';

import { isMobileWidth } from '@/utils';

export default function useCheckWidth() {
  const [device, setDevice] = useState<boolean>(isMobileWidth());

  useEffect(() => {
    window.addEventListener('resize', () => {
      setDevice(isMobileWidth());
    });
  }, []);

  return device;
}
