import { memo, SVGAttributes } from 'react';

type CopyIconSvgProps = SVGAttributes<SVGElement>;

const CopyIconSvg = ({ ...props }: CopyIconSvgProps) => {
  return (
    <svg
      fill='none'
      height='40'
      viewBox='0 0 40 40'
      width='40'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M20 0C8.95433 0 0 8.95433 0 20C0 31.0457 8.95433 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95433 31.0457 0 20 0ZM22.0847 20.8785V31.7596H17.5826V20.8789H15.3333V17.1292H17.5826V14.878C17.5826 11.819 18.8526 10 22.461 10H25.4651V13.7501H23.5873C22.1827 13.7501 22.0897 14.2741 22.0897 15.2521L22.0847 17.1288H25.4863L25.0882 20.8785H22.0847Z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
};

export const FacebookIcon = memo(CopyIconSvg);
