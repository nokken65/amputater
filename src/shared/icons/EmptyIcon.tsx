import { CSSProperties, memo, SVGAttributes } from 'react';

type EmptyIconSvgProps = SVGAttributes<SVGElement>;

const styles: CSSProperties = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinejoin: 'round',
  strokeLinecap: 'round',
};

const EmptyIconSvg = ({ ...props }: EmptyIconSvgProps) => {
  return (
    <svg
      version='1.1'
      viewBox='0 0 32 32'
      x='0px'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      y='0px'
      {...props}
    >
      <polyline points='26,21 26,24 16,28 6,24 6,21 ' style={styles} />
      <polygon points='6,12 16,8 26,12 16,16 ' style={styles} />
      <polyline points='16,8 13,5 3,9 6,12 ' style={styles} />
      <polyline points='16,8 19,5 29,9 26,12 ' style={styles} />
      <polyline points='6,12 3,16 13,20 16,16 ' style={styles} />
      <polyline points='26,12 29,16 19,20 16,16 ' style={styles} />
    </svg>
  );
};

export const EmptyIcon = memo(EmptyIconSvg);
