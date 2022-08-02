import { NotFoundIcon } from '@/shared/icons';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center text-2xl text-gray'>
      <NotFoundIcon className='h-48 w-fit' />
    </div>
  );
};

export default NotFound;
