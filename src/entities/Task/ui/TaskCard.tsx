import { memo } from 'react';

import { Task } from '@/shared/types';

import styles from './TaskCard.module.scss';

type TaskCardProps = Task & { toggle: () => void };

const TaskCardView = ({
  description,
  title,
  isCompleted,
  toggle,
}: TaskCardProps) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className='flex gap-2 p-4'>
        <input
          checked={isCompleted}
          type='checkbox'
          onChange={() => toggle()}
        />
        <p>{description}</p>
      </div>
    </div>
  );
};

export const TaskCard = memo(TaskCardView);
