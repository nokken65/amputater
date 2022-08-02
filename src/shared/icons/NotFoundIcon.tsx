import { memo, SVGAttributes } from 'react';

type NotFoundIconSvgProps = SVGAttributes<SVGElement>;

const NotFoundIconSvg = ({ ...props }: NotFoundIconSvgProps) => {
  return (
    <svg
      fill='none'
      height='24'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M0 0h24v24H0z' fill='none' stroke='none' />
      <path d='M3 7v4a1 1 0 0 0 1 1h3' /> <path d='M7 7v10' />
      <path d='M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z' />
      <path d='M17 7v4a1 1 0 0 0 1 1h3' /> <path d='M21 7v10' />
    </svg>
  );
};

export const NotFoundIcon = memo(NotFoundIconSvg);
