import { memo, SVGAttributes } from 'react';

type SearchIconSvgProps = SVGAttributes<SVGElement>;

const SearchIconSvg = ({ ...props }: SearchIconSvgProps) => {
  return (
    <svg
      fill='none'
      height='28'
      viewBox='0 0 29 28'
      width='29'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M2.70593 26L8.50593 20.2M5.3726 12.6667C5.3726 18.5577 10.1482 23.3333 16.0393 23.3333C21.9303 23.3333 26.7059 18.5577 26.7059 12.6667C26.7059 6.77563 21.9303 2 16.0393 2C10.1482 2 5.3726 6.77563 5.3726 12.6667Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='4'
      />
    </svg>
  );
};

export const SearchIcon = memo(SearchIconSvg);
