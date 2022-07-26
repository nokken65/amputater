import { lazy, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { ROUTE_PATHS } from '@/shared/constants/routePaths';

const HomePage = lazy(() => import('./Home/Home.page'));
const AboutPage = lazy(() => import('./About/About.page'));

const Layout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};

const Routing = () => {
  return (
    <Routes>
      <Route element={<Layout />} path={ROUTE_PATHS.index}>
        <Route index element={<HomePage />} />
        <Route element={<AboutPage />} path={ROUTE_PATHS.about} />
      </Route>
    </Routes>
  );
};

export { Routing };
