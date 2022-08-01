import clsx from 'clsx';
import { memo, PropsWithChildren, useEffect, useRef } from 'react';

import { useOuterClick } from '@/shared/hooks/useOuterClick';

import { Portal } from '../Portal';

type ModalProps = PropsWithChildren<{
  setIsShow: (props: boolean) => void;
}>;

const ModalView = ({ children, setIsShow }: ModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    };
  }, []);

  useOuterClick(containerRef, () => setIsShow(false));

  return (
    <Portal containerId='modal-root'>
      <div
        className={clsx(
          'min-w-screen fixed top-0 left-0 flex h-full min-h-screen w-full max-w-screen justify-center overflow-y-auto overflow-x-hidden bg-black/50 pb-8',
        )}
      >
        <div
          className='sticky top-1/4 max-w-screen overflow-y-visible rounded-xl bg-white p-16'
          ref={containerRef}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

export const Modal = memo(ModalView);
