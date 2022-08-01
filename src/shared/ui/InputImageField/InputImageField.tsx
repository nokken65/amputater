import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

export type InputImageFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  imageUrl: string;
  isShowError?: boolean;
  isValid?: boolean;
};

export const InputImageField = ({
  imageUrl,
  isShowError,
  isValid,
  ...props
}: InputImageFieldProps) => {
  return (
    <label
      htmlFor='uploadAvatar'
      className={clsx(
        'h-28 w-28 cursor-pointer overflow-hidden rounded-full',
        isShowError && 'outline outline-4 outline-red',
        isValid && 'outline outline-4 outline-primary',
      )}
    >
      <input
        type='file'
        id='uploadAvatar'
        accept='image/*'
        className='hidden'
        {...props}
      />
      <img src={imageUrl} className='h-full w-full object-cover' />
    </label>
  );
};
