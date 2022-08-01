import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { createWrapperAndAppendToBody } from '@/shared/utils/createWrapperAndAppendToBody';

type PortalProps = PropsWithChildren<{
  containerId?: string;
}>;

const Portal = ({ containerId = 'modal-root', children }: PortalProps) => {
  let element = document.getElementById(containerId);

  if (!element) {
    element = createWrapperAndAppendToBody(containerId);
  }

  return createPortal(children, element);
};

export { Portal };
