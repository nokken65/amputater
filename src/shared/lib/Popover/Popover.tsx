import { Placement } from '@popperjs/core';
import {
  memo,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';
import { usePopper } from 'react-popper';

import { Portal } from '../Portal';

type PopoverProps = PropsWithChildren<{
  contentNode: ReactNode;
  placement?: Placement;
  disabled?: boolean;
  triggerBehavior?: 'click' | 'hover';
}>;

const PopoverView = ({
  children,
  contentNode,
  placement,
  disabled = false,
  triggerBehavior = 'hover',
}: PopoverProps) => {
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

  // useOuterClick<HTMLDivElement>(popperRef, () => {
  //   if (triggerBehavior === 'hover') {
  //     hide();
  //   }
  // });

  return (
    <>
      <div
        ref={triggerRef}
        role='button'
        tabIndex={-1}
        onClick={isVisible && triggerBehavior === 'click' ? hide : show}
        onKeyDown={isVisible && triggerBehavior === 'click' ? hide : show}
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        {children}
      </div>
      {!disabled && (
        <Portal containerId='popover-root'>
          <div
            className={isVisible ? 'visible' : 'pointer-events-none invisible'}
            ref={popperRef}
            style={styles.popper}
            onMouseEnter={show}
            onMouseLeave={hide}
            {...attributes.popper}
          >
            {contentNode}
          </div>
        </Portal>
      )}
    </>
  );
};

export const Popover = memo(PopoverView);
