import { useEffect, useState } from 'react';

export default function useShowToolTip() {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  const show = () => {
    setShowTooltip(true);
  };

  const hide = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    element?.addEventListener('mouseenter', show);
    element?.addEventListener('mouseleave', hide);

    return () => {
      element?.removeEventListener('mouseenter', show);
      element?.removeEventListener('mouseleave', hide);
    };
  }, [element]);

  return { showTooltip, setElement };
}
