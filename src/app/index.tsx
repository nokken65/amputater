import './index.scss';
import '@/entities/ShortLink';

import { reflect } from '@effector/reflect';
import { ReactNode } from 'react';

import { userModel } from '@/entities/User';
import { Routing } from '@/pages';
import { router } from '@/shared/lib/atomic-router';

import { withProviders } from './providers';

const PureAppView = () => {
  return <Routing />;
};

const PureApp = reflect({
  view: PureAppView,
  bind: {},
  hooks: {
    mounted: () => {
      userModel.events.subscribeUserAuthStateListener();
    },
    unmounted: () => {
      userModel.events.unsubscribeUserAuthStateListener();
    },
  },
});

export const App = withProviders({ router })(PureApp as () => ReactNode);
