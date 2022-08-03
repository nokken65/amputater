import { reflect } from '@effector/reflect';
import { useForm } from 'effector-react-form';

import { AddIcon, LinkIcon, LoaderRingIcon } from '@/shared/icons';
import { Form, Input } from '@/shared/lib/Form';
import { Button } from '@/shared/ui';

import { forms, selectors } from '../model';
import { CreateShortLinkInputs } from '../model/models';

type CreateShortLinkFormProps = {
  isSubmitting: boolean;
};

const CreateShortLinkFormView = ({
  isSubmitting,
}: CreateShortLinkFormProps) => {
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
            {isSubmitting ? (
              <LoaderRingIcon className='h-7 w-7' />
            ) : (
              <AddIcon className='h-5 w-5' />
            )}
          </Button>
        }
        before={
          <div className='flex items-center justify-center pl-4 pr-2'>
            <LinkIcon className='h-6 w-6 text-slate-400' />
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

export const CreateShortLinkForm = reflect({
  view: CreateShortLinkFormView,
  bind: {
    isSubmitting: selectors.$createShortLinkIsSubmitting,
  },
});
