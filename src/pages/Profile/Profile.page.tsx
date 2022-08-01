import { userModel } from '@/entities/User';
import { useUnit } from 'effector-react';

const Profile = () => {
  const profile = useUnit(userModel.selectors.$profile);
  return (
    <div className='flex gap-12'>
      <img src={profile?.avatarUrl} className='' />
    </div>
  );
};

export default Profile;
