import { Link } from 'atomic-router-react';
import { useForm } from 'effector-react-form';

import { signInRoute } from '@/shared/config/routes';
import { ArrowIcon } from '@/shared/icons';
import { Form, Input } from '@/shared/lib/Form';
import { Button, FieldLabel } from '@/shared/ui';

import { forms } from '../model';
import { SignUpWithEmailInputs } from '../model/models';

export const SignUpWithEmailForm = () => {
  const { controller, handleSubmit } = useForm<SignUpWithEmailInputs>({
    form: forms.signUpWithEmailForm,
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
        before={<FieldLabel label='password' />}
        className='w-10/12 lg:w-full'
        controller={controller({
          name: 'password',
        })}
        placeholder='········'
        type='password'
      />
      <Button className='mt-6 h-12' htmlType='submit'>
        <p className='w-full'> Confirm</p>
        <ArrowIcon className='h-8 -rotate-90' />
      </Button>

      <Link className='link' to={signInRoute}>
        Have an account? Sign in
      </Link>
    </Form>
  );
};
