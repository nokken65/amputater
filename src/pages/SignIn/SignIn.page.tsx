import { SignInWithEmailForm } from '@/features/auth/ui';
import { Heading } from '@/shared/ui';

const SignIn = () => {
  return (
    <div className='flex w-full flex-col items-center gap-9'>
      <Heading uppercase>
        Sign <mark>in</mark>
      </Heading>
      <SignInWithEmailForm />
    </div>
  );
};

export default SignIn;
