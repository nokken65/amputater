import { memo, SVGAttributes } from 'react';

type SendIconSvgProps = SVGAttributes<SVGElement>;

const SendIconSvg = ({ ...props }: SendIconSvgProps) => {
  return (
    <svg
      fill='none'
      height='16'
      viewBox='0 0 19 16'
      width='19'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_3_1115)'>
        <path
          clipRule='evenodd'
          d='M1.85556 15.4668L17.3667 8.8179C18.0867 8.50679 18.0867 7.49346 17.3667 7.18235L1.85556 0.533457C1.26889 0.275679 0.620003 0.711235 0.620003 1.34235L0.611115 5.44012C0.611115 5.88457 0.940003 6.26679 1.38445 6.32012L13.9444 8.00012L1.38445 9.67123C0.940003 9.73346 0.611115 10.1157 0.611115 10.5601L0.620003 14.6579C0.620003 15.289 1.26889 15.7246 1.85556 15.4668Z'
          fill='currentColor'
          fillRule='evenodd'
        />
      </g>
      <defs>
        <clipPath id='clip0_3_1115'>
          <rect
            fill='white'
            height='16'
            transform='translate(0.611115)'
            width='17.7778'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SendIcon = memo(SendIconSvg);
