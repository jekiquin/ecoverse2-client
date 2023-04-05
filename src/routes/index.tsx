import { RouteObject } from 'react-router-dom';

import Home from './Home';
import Map from './Map';
import NotFound from './NotFound';
import Onboarding from './Onboarding';
import Project from './Project';
import Projects from './Projects';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Map />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/projects/:id',
        element: <Project />,
      },
    ],
  },

  {
    path: '/onboarding',
    element: <Onboarding />,
  },
];
