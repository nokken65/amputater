import { LogoIcon } from '@/shared/icons';
import { Heading } from '@/shared/ui';
import {
  DummyCopyCreatedShortLink,
  DummyCreateShortLink,
} from '@/widgets/DummyCreateShortLink';

const Home = () => {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex min-h-[90vh] flex-col items-center justify-center gap-36 px-4 pb-12 lg:gap-20'>
        <Heading
          uppercase
          className='text-center !text-5xl !font-semibold !leading-relaxed'
        >
          little <mark>url</mark>. big <mark>control</mark>.
        </Heading>
        <LogoIcon className='h-fit w-12' />
      </div>
      <div className='flex w-full flex-col items-center gap-14 px-4 pb-36 lg:px-0'>
        <p className='max-w-xl text-center text-2xl'>
          Copy the shortened link and share it in messages, texts, posts,
          websites and other locations.
        </p>
        <DummyCreateShortLink />
        <DummyCopyCreatedShortLink />
      </div>
    </div>
  );
};

export default Home;
