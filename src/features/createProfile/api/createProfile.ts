import { User } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

import { supabase } from '@/shared/lib/supabase';
import { Profile } from '@/shared/types';

import { CreateProfileInputs } from '../model/model';

type CreateProfileProps = CreateProfileInputs & Pick<User, 'id'>;

export const createProfile = async ({
  id,
  name,
  avatarFile,
}: CreateProfileProps): Promise<{
  profile: Profile | null;
  error: Error | null;
}> => {
  try {
    let avatarUrl = '';
    if (avatarFile) {
      const fileExt = avatarFile.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `${fileName}`;
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, avatarFile);

      if (uploadError) {
        return { profile: null, error: new Error(uploadError.message) };
      }

      const { publicURL, error: urlError } = await supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      if (urlError || !publicURL) {
        return {
          profile: null,
          error: new Error(urlError?.message ?? 'Cannot get image publicUrl'),
        };
      }
      avatarUrl = publicURL;
    } else {
      avatarUrl = `${
        import.meta.env.VITE_SUPABASE_URL
      }/storage/v1/object/public/avatars/default.jpg`;
    }

    const { data, error } = await supabase
      .from<Profile>('profiles')
      .insert({ id, name, avatarUrl })
      .single();

    return { profile: data, error: error ? new Error(error.message) : null };
  } catch (err) {
    const error = err as Error;

    return { profile: null, error };
  }
};
