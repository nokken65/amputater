import { createRoute } from 'atomic-router';

export const homeRoute = createRoute();
export const linksRoute = createRoute();
export const linkRoute = createRoute<{ id: string }>();
export const profileRoute = createRoute();
export const signInRoute = createRoute();
export const signUpRoute = createRoute();
export const notFoundRoute = createRoute();

export const publicRoutes = [
  { path: '/', route: homeRoute },
  { path: '/signin', route: signInRoute },
  { path: '/signup', route: signUpRoute },
  { path: '/404', route: notFoundRoute },
];

export const privateRoutes = [
  { path: '/profile', route: profileRoute },
  { path: '/links', route: linksRoute },
  { path: '/links/:id', route: linkRoute },
];

export const routes = [...publicRoutes, ...privateRoutes];
