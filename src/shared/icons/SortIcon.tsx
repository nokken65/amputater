import { memo, SVGAttributes } from 'react';

type SortIconSvgProps = SVGAttributes<SVGElement>;

const SortIconSvg = ({ ...props }: SortIconSvgProps) => {
  return (
    <svg
      fill='none'
      height='30'
      viewBox='0 0 36 30'
      width='36'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M28.9412 0L36.0001 8.82353H30.7059V30H27.1765V8.82353H21.8824L28.9412 0ZM20.1177 26.4706V30H0.705933V26.4706H20.1177ZM20.1177 14.1176V17.6471H0.705933V14.1176H20.1177ZM16.5883 1.76471V5.29412H0.705933V1.76471H16.5883Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const SortIcon = memo(SortIconSvg);
