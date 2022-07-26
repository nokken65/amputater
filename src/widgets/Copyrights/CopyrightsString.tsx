import { memo } from 'react';

const CopyrightsStringView = () => {
  return (
    <p className='inline-flex justify-center'>
      © 2022 Amputater.at - Tool to shorten a long link.
    </p>
  );
};

export const CopyrightsString = memo(CopyrightsStringView);
