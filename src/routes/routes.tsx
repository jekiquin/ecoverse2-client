import { RouteObject } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
];
