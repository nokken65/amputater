import { Profile } from '@/shared/types';

export type CreateProfileInputs = Pick<Profile, 'name'> & {
  avatarFile: File | null;
};
