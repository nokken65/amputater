import clsx from 'clsx';
import { memo } from 'react';

type SeparatorProps = {
  width?: number;
  height?: number;
  valueType?: 'px' | '%';
  rounded?: boolean;
  type?: 'horizontal' | 'vertical';
  className?: string;
};

const SeparatorView = ({
  width = 16,
  height = 16,
  valueType = 'px',
  rounded = true,
  type = 'horizontal',
  className,
}: SeparatorProps) => {
  return (
    <div
      className={clsx(
        'h-1 w-11 bg-slate-400',
        rounded && 'rounded-full',
        className,
      )}
      style={
        type === 'horizontal'
          ? { width: `${width}${valueType}`, height: '2px' }
          : { width: '2px', height: `${height}${valueType}` }
      }
    />
  );
};

export const Separator = memo(SeparatorView);
