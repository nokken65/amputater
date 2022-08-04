import { v4 as uuidv4 } from 'uuid';

import { supabase } from '@/shared/lib/supabase';
import { Profile } from '@/shared/types';

import { UpdateProfileAvatarParams } from './models';

export const updateProfileAvatar = async ({
  id,
  avatarFile,
}: UpdateProfileAvatarParams): Promise<{
  data: Profile | null;
  error: Error | null;
}> => {
  try {
    let avatarUrl = '';
    const fileExt = avatarFile.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${fileName}`;
    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, avatarFile);

    if (uploadError) {
      return { data: null, error: new Error(uploadError.message) };
    }

    const { publicURL, error: urlError } = await supabase.storage
      .from('avatars')
      .getPublicUrl(filePath);

    if (urlError || !publicURL) {
      return {
        data: null,
        error: new Error(urlError?.message ?? 'Cannot get image publicUrl'),
      };
    }
    avatarUrl = publicURL;

    const { data, error } = await supabase
      .from<Profile>('profiles')
      .update({ avatarUrl })
      .eq('id', id)
      .single();

    return { data, error: error ? new Error(error.message) : null };
  } catch (err) {
    const error = err as Error;

    return { data: null, error };
  }
};
