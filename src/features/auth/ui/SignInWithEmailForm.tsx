import { Link } from 'atomic-router-react';
import { useForm } from 'effector-react-form';

import { signUpRoute } from '@/shared/config/routes';
import { ArrowIcon } from '@/shared/icons';
import { Form, Input } from '@/shared/lib/Form';
import { Button, FieldLabel } from '@/shared/ui';

import { forms } from '../model';
import { SignInWithEmailInputs } from '../model/models';

export const SignInWithEmailForm = () => {
  const { controller, handleSubmit } = useForm<SignInWithEmailInputs>({
    form: forms.signInWithEmailForm,
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
        <p className='w-full'>Sign in</p>
        <ArrowIcon className='h-8 -rotate-90' />
      </Button>

      <Link className='link' to={signUpRoute}>
        Don&apos;t have an account? Sign up
      </Link>
    </Form>
  );
};
