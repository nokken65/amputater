import { reflect } from '@effector/reflect';
import clsx from 'clsx';
import { useState } from 'react';

import {
  StatsClicks,
  StatsCount,
  statsRealtimeModel,
} from '@/features/statsRealtime';
import { ArrowIcon } from '@/shared/icons';
import { Button, Heading } from '@/shared/ui';

const StatsView = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className='flex w-full flex-col items-center gap-4 px-4'>
      <div>
        <Button type='ghost' onClick={() => setIsExpanded((prev) => !prev)}>
          <Heading
            uppercase
            className='text-emerald-500 dark:text-emerald-500'
            type='h4'
          >
            Stats
          </Heading>
          <ArrowIcon
            className={clsx(
              'text-emerald-500 transition-transform duration-150 ease-in-out',
              isExpanded ? 'rotate-180' : 'rotate-0',
            )}
          />
        </Button>
      </div>
      {isExpanded && (
        <div className='flex gap-16'>
          <StatsCount />
          <StatsClicks />
        </div>
      )}
    </div>
  );
};

export const Stats = reflect({
  view: StatsView,
  bind: {},
  hooks: {
    mounted: () => {
      statsRealtimeModel.effects.getStatsRealtimeFx({});
    },
  },
});
