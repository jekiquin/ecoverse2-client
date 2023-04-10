import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

import { defaultVoidFunction } from '@/utils';

type INavContext = {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultValue = {
  navOpen: true,
  setNavOpen: defaultVoidFunction,
};

const NavContext = createContext<INavContext>(defaultValue);

export const useNavContext = () => useContext(NavContext);

export default function NavProvider({ children }: PropsWithChildren) {
  const [navOpen, setNavOpen] = useState<boolean>(true);

  return (
    <NavContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </NavContext.Provider>
  );
}
