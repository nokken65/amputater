import { Profile } from '@/shared/types';

export type GetProfileByIdParams = Pick<Profile, 'id'>;
export type UpdateProfileNameParams = Pick<Profile, 'id' | 'name'>;
export type UpdateProfileAvatarParams = Pick<Profile, 'id'> & {
  avatarFile: File;
};
