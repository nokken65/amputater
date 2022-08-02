import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  before?: ReactNode;
  after?: ReactNode;
  isShowError?: boolean;
};

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    { className, before, after, isShowError, ...props },
    ref,
  ) {
    return (
      <div
        className={clsx(
          'input-focus flex h-16 !w-full overflow-hidden rounded-xl bg-white text-xl outline outline-4 outline-transparent drop-shadow dark:bg-gray-400 dark:text-white',
          isShowError && '!outline-red',
          className,
        )}
      >
        {before}
        <input
          className='flex w-full bg-transparent pl-2 pr-2 text-gray placeholder:text-gray-200 focus-within:outline-none dark:text-white'
          ref={ref}
          size={10}
          {...props}
        />
        {after}
      </div>
    );
  },
);
