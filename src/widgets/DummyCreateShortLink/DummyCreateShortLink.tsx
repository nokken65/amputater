import { reflect } from '@effector/reflect';

import { userModel } from '@/entities/User';
import { linksRoute, signInRoute } from '@/shared/config/routes';
import { LinkIcon } from '@/shared/icons';
import { Form } from '@/shared/lib/Form';
import { Button, InputField } from '@/shared/ui';

type DummyCreateShortLinkProps = {
  isAuthorized: boolean;
};

const DummyCreateShortLinkView = ({
  isAuthorized,
}: DummyCreateShortLinkProps) => {
  return (
    <Form className='flex w-full max-w-2xl flex-col gap-6'>
      <InputField
        after={
          <Button
            className='px-4'
            rounded={false}
            onClick={isAuthorized ? linksRoute.open : signInRoute.open}
          >
            Try now
          </Button>
        }
        before={
          <div className='flex items-center justify-center pl-4 pr-2'>
            <LinkIcon className='h-6 w-6 text-slate-400' />
          </div>
        }
        className='w-10/12 lg:w-full'
        placeholder='https://example.com'
        type='url'
      />
    </Form>
  );
};

export const DummyCreateShortLink = reflect({
  view: DummyCreateShortLinkView,
  bind: { isAuthorized: userModel.selectors.$isAuthorized },
});
