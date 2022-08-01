import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

import styles from './InputField.module.scss';

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  before?: ReactNode;
  after?: ReactNode;
  isShowError?: boolean;
  isValid?: boolean;
};

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    { className, before, after, isShowError, isValid, ...props },
    ref,
  ) {
    return (
      <div
        className={clsx(
          styles.wrapper,
          isShowError && styles.isShowError,
          isValid && styles.isValid,
          className,
        )}
      >
        {before}
        <input
          className='flex w-full pl-2 pr-2 placeholder:text-gray/50 focus-within:outline-none'
          ref={ref}
          size={10}
          {...props}
        />
        {after}
      </div>
    );
  },
);
