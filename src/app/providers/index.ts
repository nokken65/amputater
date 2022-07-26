import { composeFunc } from '@/shared/utils/composeFunc';

import { withRouter } from './withRouter';

export const withProviders = composeFunc(withRouter);
