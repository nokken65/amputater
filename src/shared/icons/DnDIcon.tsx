import { memo, SVGAttributes } from 'react';

type DnDIconSvgProps = SVGAttributes<SVGElement>;

const DnDIconSvg = ({ ...props }: DnDIconSvgProps) => {
  return (
    <svg
      fill='none'
      height='14'
      viewBox='0 0 31 14'
      width='31'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_3_501)'>
        <path
          clipRule='evenodd'
          d='M28.6256 0.441162H1.90838C0.858769 0.441162 0 1.43381 0 2.64704C0 3.86028 0.858769 4.85293 1.90838 4.85293H28.6256C29.6752 4.85293 30.534 3.86028 30.534 2.64704C30.534 1.43381 29.6752 0.441162 28.6256 0.441162ZM1.90838 13.6765H28.6256C29.6752 13.6765 30.534 12.6838 30.534 11.4706C30.534 10.2573 29.6752 9.26469 28.6256 9.26469H1.90838C0.858769 9.26469 0 10.2573 0 11.4706C0 12.6838 0.858769 13.6765 1.90838 13.6765Z'
          fill='currentColor'
          fillRule='evenodd'
        />
      </g>
      <defs>
        <clipPath id='clip0_3_501'>
          <rect
            fill='white'
            height='13.2353'
            transform='translate(0 0.441162)'
            width='30.534'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const DnDIcon = memo(DnDIconSvg);
