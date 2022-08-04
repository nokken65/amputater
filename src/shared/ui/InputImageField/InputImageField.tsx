import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

export type InputImageFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  imageUrl: string;
  isShowError?: boolean;
};

export const InputImageField = ({
  imageUrl,
  isShowError,
  className,
  ...props
}: InputImageFieldProps) => {
  return (
    <label
      className={clsx(
        'h-28 w-28 cursor-pointer overflow-hidden rounded-full outline outline-4 outline-transparent drop-shadow focus-within:outline-emerald-500',
        isShowError && '!outline-red-400',
        className,
      )}
      htmlFor='uploadAvatar'
    >
      <input
        accept='image/*'
        className='hidden'
        id='uploadAvatar'
        type='file'
        {...props}
      />
      <img alt='avatar' className='h-full w-full object-cover' src={imageUrl} />
    </label>
  );
};
