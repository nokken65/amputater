import { userModel } from '@/entities/User';
import { GenerateShortLinkForm } from '@/features/generateShortLink';
import { LogoIcon } from '@/shared/icons';
import { supabase } from '@/shared/lib/supabase';
import { Button, Heading } from '@/shared/ui';

const Home = () => {
  const handleClick = () => {
    const user = supabase.auth.session()?.user;
    const token = supabase.auth.session()?.access_token;
    if (user && token) {
      fetch('http://localhost:8787', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          token,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex min-h-screen flex-col items-center justify-center gap-20 pb-12 hlg:gap-36'>
        <Button onClick={handleClick}>Click</Button>
        <Heading
          uppercase
          className='text-center !text-5xl !font-semibold !leading-relaxed'
        >
          little <mark>url</mark>. big <mark>control</mark>.
        </Heading>
        <LogoIcon className='h-fit w-12' />
      </div>
      <div className='flex w-full flex-col items-center gap-14 px-4 pb-36'>
        <p className='max-w-xl text-center text-2xl'>
          Copy the shortened link and share it in messages, texts, posts,
          websites and other locations.
        </p>
        <GenerateShortLinkForm />
      </div>
    </div>
  );
};

export default Home;
