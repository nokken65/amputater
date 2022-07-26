import { memo, SVGAttributes } from 'react';

type ViewIconSvgProps = SVGAttributes<SVGElement>;

const ViewIconSvg = ({ ...props }: ViewIconSvgProps) => {
  return (
    <svg
      fill='none'
      height='25'
      viewBox='0 0 37 25'
      width='37'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M35.1562 12.5C35.1562 12.5 27.725 22.75 18.5 22.75C9.275 22.75 1.84375 12.5 1.84375 12.5C1.84375 12.5 9.275 2.25 18.5 2.25C27.725 2.25 35.1562 12.5 35.1562 12.5Z'
        stroke='currentColor'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='3'
      />
      <path
        d='M18.5 17.625C21.3305 17.625 23.625 15.3305 23.625 12.5C23.625 9.66954 21.3305 7.375 18.5 7.375C15.6695 7.375 13.375 9.66954 13.375 12.5C13.375 15.3305 15.6695 17.625 18.5 17.625Z'
        stroke='currentColor'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='3'
      />
    </svg>
  );
};

export const ViewIcon = memo(ViewIconSvg);
