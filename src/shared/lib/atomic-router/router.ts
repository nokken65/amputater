import { createHistoryRouter } from 'atomic-router';
import { sample } from 'effector';
import { createBrowserHistory } from 'history';

import { notFoundRoute, routes } from '@/shared/config/routes';

const history = createBrowserHistory();

const router = createHistoryRouter({ routes });

router.setHistory(history);

sample({
  clock: router.routeNotFound,
  fn: () => ({}),
  target: notFoundRoute.open,
});

export { router };
