import clsx from 'clsx';
import { forwardRef, ReactNode, TextareaHTMLAttributes } from 'react';

export type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  before?: ReactNode;
  after?: ReactNode;
  isShowError?: boolean;
};

export const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>(function TextAreaField(
  { className, before, after, isShowError, ...props },
  ref,
) {
  return (
    <div
      className={clsx(
        'flex !w-full flex-col gap-2 overflow-hidden rounded-xl bg-white text-xl outline outline-4 outline-transparent drop-shadow focus-within:outline-emerald-500 dark:bg-slate-700 dark:text-white lg:rounded-none',
        isShowError && '!outline-red-400',
        className,
      )}
    >
      {before}
      <textarea
        className='flex w-full bg-transparent px-4  placeholder:text-slate-400 focus-within:outline-none dark:text-white'
        ref={ref}
        {...props}
      />
      {after}
    </div>
  );
});
