import { useForm } from 'effector-react-form';
import { memo } from 'react';

import { AddIcon, LinkIcon } from '@/shared/icons';
import { Form, Input } from '@/shared/lib/Form';
import { Button } from '@/shared/ui';

import { forms } from '../model';
import { CreateShortLinkInputs } from '../model/models';

const CreateShortLinkFormView = () => {
  const { controller, handleSubmit } = useForm<CreateShortLinkInputs>({
    form: forms.createShortLinkForm,
  });

  return (
    <Form
      className='flex w-full max-w-2xl flex-col gap-6'
      onSubmit={handleSubmit}
    >
      <Input
        after={
          <Button className='w-16' htmlType='submit' rounded={false}>
            <AddIcon className='h-6 w-6' />
          </Button>
        }
        before={
          <div className='flex items-center justify-center pl-4 pr-2'>
            <LinkIcon className='h-6 w-6 text-gray' />
          </div>
        }
        className='w-10/12 lg:w-full'
        controller={controller({
          name: 'url',
        })}
        placeholder='https://example.com'
        type='url'
      />
    </Form>
  );
};

export const CreateShortLinkForm = memo(CreateShortLinkFormView);
