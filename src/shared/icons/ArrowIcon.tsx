import { memo, SVGAttributes } from 'react';

type ArrowIconSvgProps = SVGAttributes<SVGElement>;

const ArrowIconSvg = ({ ...props }: ArrowIconSvgProps) => {
  return (
    <svg
      fill='none'
      height='9'
      viewBox='0 0 16 9'
      width='16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M0.89776 0.30404C0.50576 0.69604 0.50576 1.32804 0.89776 1.72004L7.54576 8.36804C7.85776 8.68004 8.36176 8.68004 8.67376 8.36804L15.3218 1.72004C15.7138 1.32804 15.7138 0.69604 15.3218 0.30404C14.9298 -0.0879598 14.2978 -0.0879598 13.9058 0.30404L8.10576 6.09604L2.30576 0.296042C1.92176 -0.0879584 1.28176 -0.0879598 0.89776 0.30404Z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
};

export const ArrowIcon = memo(ArrowIconSvg);
