import clsx from 'clsx';
import { memo } from 'react';

import { Notification } from '@/shared/types';

type NotificationToastProps = Notification & {
  onClose: (props: Pick<Notification, 'id'>) => void;
};

const NotificationToastView = ({
  id,
  text,
  type,
  duration,
  onClose,
}: NotificationToastProps) => {
  return (
    <div
      className={clsx(
        'flex h-fit flex-col overflow-hidden rounded-xl rounded-br-none drop-shadow lg:rounded-none lg:drop-shadow-none',
        type === 'info' && 'bg-emerald-500 text-white',
        type === 'warn' && 'bg-yellow-300 text-slate-700',
        type === 'error' && 'bg-red-400 text-white',
      )}
      role='button'
      tabIndex={-1}
      onClick={() => onClose({ id })}
      onKeyDown={() => onClose({ id })}
    >
      <p className='break-words p-4 font-bold'>{text}</p>
      <span
        className='anima h-1 animate-expire bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
        style={{ animationDuration: `${duration}ms` }}
      />
    </div>
  );
};

export const NotificationToast = memo(NotificationToastView);
