import { useForm } from 'effector-react-form';

import { Form, InputImage } from '@/shared/lib/Form';

import { form } from '../model';
import { UpdateProfileAvatarInputs } from '../model/model';

export const UpdateProfileAvatarForm = () => {
  const { controller, handleSubmit, setValue } =
    useForm<UpdateProfileAvatarInputs>({
      form: form.updateProfileAvatarForm,
    });

  return (
    <Form
      className='flex h-56 w-56 flex-col items-center gap-8'
      onSubmit={handleSubmit}
    >
      <InputImage
        controller={controller({ name: 'avatarFile' })}
        setValue={setValue}
      />
    </Form>
  );
};
