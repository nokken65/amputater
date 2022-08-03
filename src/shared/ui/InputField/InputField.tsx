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
          'flex h-16 !w-full gap-2 overflow-hidden rounded-xl bg-white text-xl outline outline-4 outline-transparent drop-shadow focus-within:outline-emerald-500 dark:bg-slate-700 dark:text-white lg:rounded-none',
          isShowError && '!outline-red-400',
          className,
        )}
      >
        {before}
        <input
          className='flex w-full bg-transparent  placeholder:text-slate-400 focus-within:outline-none dark:text-white'
          ref={ref}
          size={10}
          {...props}
        />
        {after}
      </div>
    );
  },
);
