import {
  CopyCreatedShortLink,
  CreateShortLinkForm,
} from '@/features/createShortLink';
import { ShortLinksFeed } from '@/widgets/ShortLinksFeed';

const Links = () => {
  return (
    <div className='my-8 flex w-full flex-col items-center justify-start gap-16'>
      <div className='flex w-full flex-col items-center justify-between gap-10'>
        <CreateShortLinkForm />
        <CopyCreatedShortLink />
      </div>
      <ul className='flex w-full flex-col gap-6'>
        <ShortLinksFeed />
      </ul>
    </div>
  );
};

export default Links;
