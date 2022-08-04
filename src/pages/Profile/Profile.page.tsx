import { useUnit } from 'effector-react';

import { userModel } from '@/entities/User';
import { Separator } from '@/shared/ui';

const Profile = () => {
  const profile = useUnit(userModel.selectors.$profile);

  return (
    <div className='flex w-full flex-col items-center gap-12'>
      {profile && (
        <div className='flex items-center gap-6 lg:flex-col'>
          <img
            alt='avatar'
            className='h-36 w-36 rounded-full'
            src={profile.avatarUrl}
          />
          <p className='text-2xl text-slate-700 dark:text-white'>
            {profile.name}
          </p>
        </div>
      )}
      <Separator valueType='%' width={50} />
      <p>Chtoto tyt bydet</p>
      <p className='mt-36'>ili net</p>
    </div>
  );
};

export default Profile;
