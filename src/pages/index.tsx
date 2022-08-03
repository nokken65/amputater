import { variant } from '@effector/reflect';
import { Route } from 'atomic-router-react';
import { sample } from 'effector';
import { lazy, PropsWithChildren, Suspense } from 'react';

import { userModel } from '@/entities/User';
import * as routes from '@/shared/config/routes';
import { LoaderRingIcon } from '@/shared/icons';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

const HomePage = lazy(() => import('./Home/Home.page'));
const AboutPage = lazy(() => import('./About/About.page'));
const ContactPage = lazy(() => import('./Contact/Contact.page'));
const LinksPage = lazy(() => import('./Links/Links.page'));
const ProfilePage = lazy(() => import('./Profile/Profile.page'));
const SignInPage = lazy(() => import('./SignIn/SignIn.page'));
const SignUpPage = lazy(() => import('./SignUp/SignUp.page'));
const NotFoundPage = lazy(() => import('./NotFound/NotFound.page'));

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className='flex flex-col items-center justify-between gap-6 p-4 lg:px-0'>
        <Suspense
          fallback={
            <div className='flex h-full w-full items-center justify-center'>
              <LoaderRingIcon className='h-20 w-20 animate-spin-fast' />
            </div>
          }
        >
          {children}
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

const PublicRoutes = () => {
  return (
    <>
      <Route route={routes.homeRoute} view={HomePage} />
      <Route route={routes.aboutRoute} view={AboutPage} />
      <Route route={routes.contactRoute} view={ContactPage} />
      <Route route={routes.signInRoute} view={SignInPage} />
      <Route route={routes.signUpRoute} view={SignUpPage} />
      <Route route={routes.notFoundRoute} view={NotFoundPage} />
    </>
  );
};

const PrivateRoutes = () => {
  return (
    <>
      <PublicRoutes />
      <Route route={routes.linksRoute} view={LinksPage} />
      <Route route={routes.profileRoute} view={ProfilePage} />
    </>
  );
};

const $variant = userModel.selectors.$isAuthorized.map((is) =>
  is ? 'private' : 'public',
);

// redirect if private route
sample({
  clock: [...routes.privateRoutes.map((route) => route.route.opened)],
  source: $variant,
  filter: (v) => v === 'public',
  target: routes.signInRoute.open,
});

sample({
  clock: $variant,
  filter: (v) => v === 'public',
  target: routes.homeRoute.open,
});

const Routes = variant({
  source: $variant,
  cases: {
    private: PrivateRoutes,
    public: PublicRoutes,
  },
});

const Routing = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export { Routing };
