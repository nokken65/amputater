import clsx from 'clsx';
import { memo, PropsWithChildren, ReactNode, useRef, useState } from 'react';

import styles from './Tooltip.module.scss';

type TooltipProps = PropsWithChildren<{
  content: ReactNode;
  disabled?: boolean;
  wrapperClassName?: string;
}>;

const TooltipView = ({
  children,
  content,
  disabled,
  wrapperClassName,
}: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const isShowTooltip = (isHovered || isFocused) && !disabled;

  return (
    <div className={clsx(styles.wrapper, wrapperClassName)}>
      <div
        className={styles.target}
        ref={targetRef}
        role='button'
        tabIndex={-1}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
      {isShowTooltip && (
        <div className={styles.container}>
          <div className={styles.box}>{content}</div>
        </div>
      )}
    </div>
  );
};

export const Tooltip = memo(TooltipView);
