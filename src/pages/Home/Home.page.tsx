import {
  AddIcon,
  ArrowIcon,
  ClickIcon,
  CopyIcon,
  DnDIcon,
  EditIcon,
  FacebookIcon,
  FilterIcon,
  GithubIcon,
  InstagramIcon,
  LinkIcon,
  LogoIcon,
  RemoveIcon,
  SearchIcon,
  SendIcon,
  SortIcon,
  StatsIcon,
  TelegramIcon,
  TwitterIcon,
  ViewIcon,
} from '@/shared/icons';
import { Button, Heading, Separator } from '@/shared/ui';

const Home = () => {
  return (
    <div className='flex flex-col gap-8 p-4'>
      <div className='flex flex-col gap-4'>
        <Heading>UI</Heading>
        <Button>Click</Button>
        <Button disabled>Click</Button>
        <Button type='ghost'>Click</Button>
        <Button disabled type='ghost'>
          Click
        </Button>
        <Separator />
        <Separator className='bg-primary' width={30} />
        <Separator rounded={false} />
        <Separator type='vertical' />
      </div>
      <div className='flex flex-col gap-4'>
        <Heading>Icons</Heading>
        <div className='flex flex-wrap gap-4'>
          <LogoIcon className='h-6 w-fit ' />
          <LinkIcon className='h-6 w-fit text-primary' />
          <CopyIcon className='h-6 w-fit text-primary' />
          <GithubIcon className='h-6 w-fit text-primary' />
          <TelegramIcon className='h-6 w-fit text-primary' />
          <FacebookIcon className='h-6 w-fit text-primary' />
          <TwitterIcon className='h-6 w-fit text-primary' />
          <InstagramIcon className='h-6 w-fit text-primary' />
          <AddIcon className='h-6 w-fit text-primary' />
          <ViewIcon className='h-6 w-fit text-primary' />
          <ClickIcon className='h-6 w-fit text-primary' />
          <SearchIcon className='h-6 w-fit text-primary' />
          <SortIcon className='h-6 w-fit text-primary' />
          <FilterIcon className='h-6 w-fit text-primary' />
          <StatsIcon className='h-6 w-fit text-primary' />
          <EditIcon className='h-6 w-fit text-primary' />
          <RemoveIcon className='h-6 w-fit text-primary' />
          <DnDIcon className='h-6 w-fit text-primary' />
          <ArrowIcon className='h-6 w-fit text-primary' />
          <SendIcon className='h-6 w-fit text-primary' />
        </div>
      </div>
    </div>
  );
};

export default Home;
