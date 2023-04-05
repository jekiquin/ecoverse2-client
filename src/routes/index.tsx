import { RouteObject } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';

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
