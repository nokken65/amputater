import { useForm } from 'effector-react-form';

import { SendIcon } from '@/shared/icons';
import { Form, Input, TextArea } from '@/shared/lib/Form';
import { Button, FieldLabel } from '@/shared/ui';

import { form } from '../model';
import { ContactUsInputs } from '../model/models';

export const ContactUsForm = () => {
  const { controller, handleSubmit } = useForm<ContactUsInputs>({
    form: form.contactUsForm,
  });

  return (
    <Form
      className='flex w-full max-w-2xl flex-col gap-6'
      onSubmit={handleSubmit}
    >
      <Input
        before={<FieldLabel label='email' />}
        className='w-10/12 lg:w-full'
        controller={controller({
          name: 'email',
        })}
        placeholder='alex@mail.com'
        type='email'
      />
      <Input
        before={<FieldLabel label='name' />}
        className='w-10/12 lg:w-full'
        controller={controller({
          name: 'name',
        })}
        placeholder='Alex'
        type='name'
      />
      <TextArea
        before={<FieldLabel label='message' type='vertical' />}
        className='w-10/12 lg:w-full'
        controller={controller({
          name: 'message',
        })}
        placeholder='Type your message...'
        rows={8}
      />

      <Button className='mt-6 h-12 lg:rounded-none' htmlType='submit'>
        <p className='w-full'>Send</p>
        <SendIcon className='h-8' />
      </Button>
    </Form>
  );
};
