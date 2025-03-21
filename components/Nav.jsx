'use client';

import HowTo from './HowTo';
import { Button } from './ui/button';

export const Nav = ({ selected, handleReset }) => {
  return (
    <nav className='border-b bg-[#1A1A1D] lg:sticky top-0 w-full'>
      <div className='flex flex-wrap lg:flex-nowrap items-center text-2xl text-white mx-4 py-2 gap-4'>
        <div className='font-bold'>TechNavigator</div>
        <div className='flex ml-2'>
          {selected && (
            <Button
              className='ml-4 bg-lime-600 hover:bg-lime-700 cursor-pointer'
              onClick={handleReset}
            >
              Reset
            </Button>
          )}
        </div>
        <HowTo />
      </div>
    </nav>
  );
};
