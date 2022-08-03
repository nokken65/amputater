import { memo, SVGAttributes } from 'react';

type EditIconSvgProps = SVGAttributes<SVGElement>;

const EditIconSvg = ({ ...props }: EditIconSvgProps) => {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <polygon points='16 3 21 8 8 21 3 21 3 16 16 3' />
    </svg>
  );
};

export const EditIcon = memo(EditIconSvg);
