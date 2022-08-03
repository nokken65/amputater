import { useForm } from 'effector-react-form';
import { memo, useEffect } from 'react';

import { EditIcon } from '@/shared/icons';
import { Form, Input } from '@/shared/lib/Form';
import { ShortLink } from '@/shared/types';
import { Button } from '@/shared/ui';

import { form } from '../model';
import { UpdateShortLinkLabelInputs } from '../model/models';

type UpdateShortLinkLabelFormProps = Pick<ShortLink, 'label'> & {
  onBlur: () => void;
};

const UpdateShortLinkLabelFormView = ({
  label,
  onBlur,
}: UpdateShortLinkLabelFormProps) => {
  const { controller, handleSubmit, setValues } =
    useForm<UpdateShortLinkLabelInputs>({
      form: form.updateShortLinkLabelForm,
    });

  useEffect(() => {
    setValues({ label });
  }, [label, setValues]);

  return (
    <Form
      className='flex w-fit max-w-2xl items-center gap-2 pl-2'
      onBlur={onBlur}
      onSubmit={handleSubmit}
    >
      <Input
        autoFocus
        className='!h-7 !w-fit !rounded-sm !outline-2 !drop-shadow-none lg:w-full'
        controller={controller({
          name: 'label',
        })}
        type='text'
      />
      <Button className='py-2 ' htmlType='submit' type='ghost'>
        <EditIcon className='h-5 w-5' />
      </Button>
    </Form>
  );
};

export const UpdateShortLinkLabelForm = memo(UpdateShortLinkLabelFormView);
