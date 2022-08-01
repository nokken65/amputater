import clsx from 'clsx';
import { ButtonHTMLAttributes, memo } from 'react';

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type'
> & {
  type?: 'primary' | 'ghost';
  bordered?: boolean;
  rounded?: boolean;
  htmlType?: 'submit' | 'reset' | 'button';
};

const ButtonView = ({
  children,
  type = 'primary',
  rounded = true,
  bordered = false,
  htmlType = 'button',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'btn',
        rounded && 'rounded-xl',
        bordered && 'border-2',
        type === 'primary' && 'btn-primary',
        type === 'ghost' && 'btn-ghost',
        className,
      )}
      type={htmlType === 'submit' ? 'submit' : 'button'}
      {...props}
    >
      {children}
    </button>
  );
};

export const Button = memo(ButtonView);
