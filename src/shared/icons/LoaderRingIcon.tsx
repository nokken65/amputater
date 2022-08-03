import clsx from 'clsx';
import { memo, SVGAttributes } from 'react';

type LoaderRingIconSvgProps = SVGAttributes<SVGElement> & {};

const LoaderRingIconSvg = ({ className, ...props }: LoaderRingIconSvgProps) => {
  return (
    <svg
      className={clsx('animate-spin-fast', className)}
      height='161px'
      preserveAspectRatio='xMidYMid'
      viewBox='0 0 100 100'
      width='161px'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g>
        <path
          className='stroke-emerald-200'
          d='M78 50 A28 28 0 0 1 50 78'
          fill='none'
          strokeWidth='10'
        />
        <path
          className='stroke-emerald-400'
          d='M50 78 A28 28 0 0 1 22 50'
          fill='none'
          strokeWidth='10'
        />
        <path
          className='stroke-emerald-600'
          d='M22 50 A28 28 0 0 1 49.99999999999999 22'
          fill='none'
          strokeWidth='10'
        />
        <path
          className='stroke-transparent '
          d='M49.99999999999999 22 A28 28 0 0 1 78 49.99999999999999'
          fill='none'
          strokeWidth='10'
        />
      </g>
    </svg>
  );
};

export const LoaderRingIcon = memo(LoaderRingIconSvg);
