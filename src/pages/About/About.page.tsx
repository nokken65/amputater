import { Heading } from '@/shared/ui';

const About = () => {
  return (
    <div className='my-12 flex max-w-xl flex-col items-center gap-8 text-gray-200'>
      <Heading uppercase className='!text-3xl'>
        <mark>About</mark>
      </Heading>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don&apos;t look even slightly believable. If you
        are going to use a passage of Lorem Ipsum, you need to be sure there
        isn&apos;t anything embarrassing hidden in the middle of text. All the
        Lorem Ipsum generators on the Internet tend to repeat predefined chunks
        as necessary, making this the first true generator on the Internet. It
        uses a dictionary of over 200 Latin words, combined with a handful of
        model sentence structures, to generate Lorem Ipsum which looks
        reasonable. The generated Lorem Ipsum is therefore always free from
        repetition, injected humour, or non-characteristic words etc.
      </p>
    </div>
  );
};

export default About;
