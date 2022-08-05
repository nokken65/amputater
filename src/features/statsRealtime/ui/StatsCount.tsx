import { reflect } from '@effector/reflect';

import { LinkIcon } from '@/shared/icons';
import { Stats } from '@/shared/types';

import { effects, selectors } from '../model';

type StatsCountProps = Pick<Stats, 'count'>;

const StatsCountView = ({ count }: StatsCountProps) => {
  return (
    <div className='flex items-center gap-4'>
      <LinkIcon className='h-7 w-7' />
      <div className='flex flex-col items-center gap-2'>
        <p className='text-3xl font-bold'>{count}</p>
        <p className='font-bold'>links</p>
      </div>
    </div>
  );
};

export const StatsCount = reflect({
  view: StatsCountView,
  bind: {
    count: selectors.$count,
  },
  hooks: {
    mounted: () => {
      effects.getShortLinksCountFx({});
    },
  },
});
