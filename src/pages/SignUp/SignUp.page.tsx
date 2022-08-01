import { SignUpWithEmailForm } from '@/features/auth/ui';
import { Heading } from '@/shared/ui';

const SignUp = () => {
  return (
    <div className='flex w-full flex-col items-center gap-9'>
      <Heading uppercase>
        Sign <mark>up</mark>
      </Heading>
      <SignUpWithEmailForm />
    </div>
  );
};

export default SignUp;
