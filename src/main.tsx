import { createRoot } from 'react-dom/client';

import { App } from '@/app';

import { createWrapperAndAppendToBody } from './shared/utils/createWrapperAndAppendToBody';

let appRootContainer = document.getElementById('app-root');

if (!appRootContainer) {
  appRootContainer = createWrapperAndAppendToBody('app-root', true);
}

createRoot(appRootContainer).render(<App />);
