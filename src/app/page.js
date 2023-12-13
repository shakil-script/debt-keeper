import Card from '@/components/Card';
import React from 'react';

const page = () => {
  return (
    <div className='mx-6'>
      <div className='grid grid-cols-3 mt-5 gap-3'>
          <Card/><Card/>
          <Card/>

      </div>
    </div>
  );
};

export default page;