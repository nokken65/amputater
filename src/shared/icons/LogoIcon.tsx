import { memo, SVGAttributes } from 'react';

type LogoIconSvgProps = SVGAttributes<SVGElement>;

const LogoIconSvg = ({ ...props }: LogoIconSvgProps) => {
  return (
    <svg
      fill='none'
      height='103'
      viewBox='0 0 62 103'
      width='62'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g filter='url(#filter0_d_3_483)'>
        <path d='M4 3L23.3878 13V35L4 20V3Z' fill='#00AB5E' />
        <path d='M54 3L34.6122 13V35L54 20V3Z' fill='#00AB5E' />
        <path d='M23.3878 3H34.6122V28H23.3878V3Z' fill='#00EE84' />
        <path
          d='M10.1224 43.8776C10.1224 33.4518 18.5742 25 29 25C39.4258 25 47.8775 33.4518 47.8775 43.8776V75.1224C47.8775 85.5482 39.4258 94 29 94C18.5742 94 10.1224 85.5482 10.1224 75.1224V43.8776Z'
          fill='#707070'
        />
        <path d='M10.1224 46H47.8775V72H10.1224V46Z' fill='#00EE84' />
      </g>
      <g clipPath='url(#clip0_3_483)'>
        <path d='M54 3L34.6122 13V35L54 20V3Z' fill='#009954' />
        <path d='M4 3L23.3878 13V35L4 20V3Z' fill='#009954' />
        <path d='M34.6122 3H23.3878V28H34.6122V3Z' fill='#00CC71' />
        <path
          d='M47.8776 43.5C47.8776 33.2827 39.4258 25 29 25C18.5742 25 10.1224 33.2827 10.1224 43.5V75.5C10.1224 85.7173 18.5742 94 29 94C39.4258 94 47.8776 85.7173 47.8776 75.5V43.5Z'
          fill='#5A5A5A'
        />
        <path d='M47.8776 46H10.1224V72H47.8776V46Z' fill='#00CC71' />
      </g>
      <defs>
        <filter
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
          height='103'
          id='filter0_d_3_483'
          width='62'
          x='0'
          y='0'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            result='hardAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dx='2' dy='3' />
          <feGaussianBlur stdDeviation='3' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            in2='BackgroundImageFix'
            mode='normal'
            result='effect1_dropShadow_3_483'
          />
          <feBlend
            in='SourceGraphic'
            in2='effect1_dropShadow_3_483'
            mode='normal'
            result='shape'
          />
        </filter>
        <clipPath id='clip0_3_483'>
          <rect
            fill='white'
            height='91'
            transform='matrix(-1 0 0 1 54 3)'
            width='25'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LogoIcon = memo(LogoIconSvg);
