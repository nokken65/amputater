import { createHistoryRouter } from 'atomic-router';

import { composeFunc } from '@/shared/utils/composeFunc';

import { withRouter } from './withRouter';

type ProvidersProps = {
  router: ReturnType<typeof createHistoryRouter>;
};

export const withProviders = ({ router }: ProvidersProps) =>
  composeFunc(withRouter(router));
