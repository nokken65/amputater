import { NotFoundIcon } from '@/shared/icons';

const NotFound = () => {
  return (
    <div className='text-gray flex flex-col items-center text-2xl'>
      <NotFoundIcon className='h-48 w-fit' />
    </div>
  );
};

export default NotFound;
