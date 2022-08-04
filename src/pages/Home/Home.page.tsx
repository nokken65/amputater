import { ContactUsForm } from '@/features/contactUs';
import { LogoIcon } from '@/shared/icons';
import { Heading } from '@/shared/ui';
import {
  DummyCopyCreatedShortLink,
  DummyCreateShortLink,
} from '@/widgets/DummyCreateShortLink';

const Home = () => {
  return (
    <div className='flex w-full flex-col gap-24'>
      <div className='flex min-h-[90vh] flex-col items-center justify-center gap-36 px-4 lg:gap-20'>
        <Heading
          uppercase
          className='text-center !text-5xl !font-semibold !leading-relaxed'
        >
          little <mark>url</mark>. big <mark>control</mark>.
        </Heading>
        <LogoIcon className='h-fit w-12' />
      </div>
      <div className='flex w-full flex-col items-center gap-14 px-4 pb-56 lg:px-0'>
        <p className='max-w-xl text-center text-2xl'>
          Copy the shortened link and share it in messages, texts, posts,
          websites and other locations.
        </p>
        <DummyCreateShortLink />
        <DummyCopyCreatedShortLink />
      </div>
      <div className='flex w-full flex-col items-center gap-12 px-4 pb-56 text-center'>
        <Heading uppercase>
          <mark>About</mark>
        </Heading>
        <p className='max-w-lg'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          minima, quae perspiciatis eius numquam nesciunt incidunt aut eligendi
          commodi qui, praesentium reprehenderit eveniet repudiandae nulla unde
          laudantium eum laboriosam eos dolorem provident possimus ea. Quisquam
          voluptatum facere qui neque id amet cumque delectus non, atque cum
          dolor laudantium nostrum nesciunt.
        </p>
      </div>
      <div className='flex w-full flex-col items-center gap-12 px-4 pb-56 text-center lg:px-0'>
        <Heading uppercase>
          <mark>Contact us</mark>
        </Heading>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default Home;
