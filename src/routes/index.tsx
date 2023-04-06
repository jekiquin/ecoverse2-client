import { RouteObject } from 'react-router-dom';

import Home from './Home';
import Map from './Map';
import NotFound from './NotFound';
import Onboarding from './Onboarding';
import Project from './Project';
import Projects from './Projects';

export enum ROUTES {
  HOME = '/',
  PROJECTS = '/projects',
  PROJECT = '/project',
  ONBOARDING = '/onboarding',
}

export const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Map />,
      },
      {
        path: ROUTES.PROJECTS,
        element: <Projects />,
      },
      {
        path: `${ROUTES.PROJECTS}/:id`,
        element: <Project />,
      },
    ],
  },

  {
    path: ROUTES.ONBOARDING,
    element: <Onboarding />,
  },
];
