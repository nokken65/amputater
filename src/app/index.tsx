import './index.scss';

import { ReactNode } from 'react';

import { Routing } from '@/pages';

import { withProviders } from './providers';

const AppView = () => {
  return <Routing />;
};

export const App = withProviders(
  AppView as () => ReactNode,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) as React.ComponentType<any>;
