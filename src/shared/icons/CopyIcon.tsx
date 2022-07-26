import { memo, SVGAttributes } from 'react';

type CopyIconSvgProps = SVGAttributes<SVGElement>;

const CopyIconSvg = ({ ...props }: CopyIconSvgProps) => {
  return (
    <svg
      fill='none'
      height='34'
      viewBox='0 0 34 34'
      width='34'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.75806 21.9119H5.25806C4.46241 21.9119 3.69935 21.5958 3.13674 21.0332C2.57413 20.4706 2.25806 19.7075 2.25806 18.9119V5.41187C2.25806 4.61622 2.57413 3.85315 3.13674 3.29054C3.69935 2.72794 4.46241 2.41187 5.25806 2.41187H18.7581C19.5537 2.41187 20.3168 2.72794 20.8794 3.29054C21.442 3.85315 21.7581 4.61622 21.7581 5.41187V6.91187M15.7581 12.9119H29.2581C30.9149 12.9119 32.2581 14.255 32.2581 15.9119V29.4119C32.2581 31.0687 30.9149 32.4119 29.2581 32.4119H15.7581C14.1012 32.4119 12.7581 31.0687 12.7581 29.4119V15.9119C12.7581 14.255 14.1012 12.9119 15.7581 12.9119Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='3'
      />
    </svg>
  );
};

export const CopyIcon = memo(CopyIconSvg);
