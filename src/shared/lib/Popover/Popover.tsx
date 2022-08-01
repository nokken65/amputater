import { Placement } from '@popperjs/core';
import { memo, ReactNode, useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';

import { useOuterClick } from '@/shared/hooks/useOuterClick';

import { Portal } from '../Portal';

type PopoverProps = {
  triggerNode: ReactNode;
  contentNode: ReactNode;
  placement?: Placement;
};

const PopoverView = ({ triggerNode, contentNode, placement }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const show = useCallback(() => setIsVisible(true), []);
  const hide = useCallback(() => setIsVisible(false), []);

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const popperRef = useRef<HTMLDivElement | null>(null);
  const { attributes, styles } = usePopper(
    triggerRef.current,
    popperRef.current,
    {
      placement,
    },
  );

  useOuterClick<HTMLDivElement>(popperRef, hide);

  return (
    <>
      <div ref={triggerRef} onMouseEnter={show} onMouseLeave={hide}>
        {triggerNode}
      </div>
      <Portal containerId='popover-root'>
        <div
          className={isVisible ? 'visible' : 'pointer-events-none invisible'}
          ref={popperRef}
          role='button'
          style={styles.popper}
          tabIndex={-1}
          onClick={hide}
          onKeyDown={hide}
          onMouseEnter={show}
          onMouseLeave={hide}
          {...attributes.popper}
        >
          {contentNode}
        </div>
      </Portal>
    </>
  );
};

export const Popover = memo(PopoverView);
