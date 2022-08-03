import clsx from 'clsx';
import { createElement, HTMLAttributes, memo } from 'react';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  uppercase?: boolean;
  capitalize?: boolean;
  bold?: boolean;
};

const HeadingView = ({
  type = 'h2',
  uppercase = false,
  capitalize = true,
  bold = true,
  className,
  children,
  ...props
}: HeadingProps) => {
  return createElement(
    type,
    {
      ...props,
      className: clsx(
        'font-bold dark:text-white overflow-hidden',
        !uppercase && capitalize && 'capitalize',
        uppercase && 'uppercase',
        bold ? 'font-bold' : 'font-normal',
        type === 'h1' && 'text-4xl',
        type === 'h2' && 'text-2xl',
        type === 'h3' && 'text-xl',
        type === 'h4' && 'text-lg',
        type === 'h5' && 'text-md',
        type === 'h6' && 'text-sm',
        className,
      ),
    },
    children,
  );
};

export const Heading = memo(HeadingView);
