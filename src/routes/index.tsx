import { RouteObject } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';
import Projects from './Projects';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
];
