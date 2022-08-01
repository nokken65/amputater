import { Form, Input, InputImage } from '@/shared/lib/Form';
import { forms } from '../model';
import { useForm } from 'effector-react-form';
import { CreateProfileInputs } from '../model/model';
import { Button, FieldLabel, Separator } from '@/shared/ui';
import { ArrowIcon } from '@/shared/icons';
import { useState } from 'react';

export const CreateProfileForm = () => {
  const { controller, handleSubmit, setValue } = useForm<CreateProfileInputs>({
    form: forms.createProfileForm,
  });

  const [url, setUrl] = useState(`https://place-hold.it/${100}x${100}`);
  return (
    <Form
      onSubmit={handleSubmit}
      className='flex w-full max-w-2xl flex-col items-center gap-8'
    >
      <InputImage
        controller={controller({ name: 'avatarFile' })}
        setValue={setValue}
      />
      <Input
        before={<FieldLabel label='name' />}
        className='w-10/12 lg:w-full'
        controller={controller({
          name: 'name',
        })}
        placeholder='Alex'
        type='text'
      />
      <Button className='h-12 w-full' htmlType='submit'>
        <p className='w-full'>Create</p>
        <ArrowIcon className='h-8 -rotate-90' />
      </Button>
    </Form>
  );
};
