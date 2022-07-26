import { memo, SVGAttributes } from 'react';

type AddIconSvgProps = SVGAttributes<SVGElement>;

const AddIconSvg = ({ ...props }: AddIconSvgProps) => {
  return (
    <svg
      fill='none'
      height='35'
      viewBox='0 0 35 35'
      width='35'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17.25 2.25V32.25M2.25 17.25H32.25'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='4'
      />
    </svg>
  );
};

export const AddIcon = memo(AddIconSvg);
