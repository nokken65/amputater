import { reflect } from '@effector/reflect';

import { ClickIcon } from '@/shared/icons';
import { Stats } from '@/shared/types';

import { effects, selectors } from '../model';

type StatsClicksProps = Pick<Stats, 'clicks'>;

const StatsClicksView = ({ clicks }: StatsClicksProps) => {
  return (
    <div className='flex items-center gap-4'>
      <ClickIcon className='h-7 w-7' />
      <div className='flex flex-col items-center gap-2'>
        <p className='text-3xl font-bold'>{clicks}</p>
        <p className='font-bold'>clicks</p>
      </div>
    </div>
  );
};

export const StatsClicks = reflect({
  view: StatsClicksView,
  bind: {
    clicks: selectors.$clicks,
  },
  hooks: {
    mounted: () => {
      effects.getShortLinksClicksFx({});
    },
  },
});
