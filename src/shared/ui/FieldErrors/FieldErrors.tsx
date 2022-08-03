import clsx from 'clsx';
import { memo, PropsWithChildren } from 'react';

import styles from './FieldErrors.module.scss';

type FieldErrorsProps = PropsWithChildren;

const FieldErrorsView = ({ children }: FieldErrorsProps) => {
  return (
    <div
      className={clsx(
        styles.arrow,
        'mb-4 rounded-xl bg-red-400 py-2 px-4 text-white drop-shadow',
      )}
    >
      {children}
    </div>
  );
};

export const FieldErrors = memo(FieldErrorsView);
