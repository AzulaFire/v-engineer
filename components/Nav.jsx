'use client';

import { Button } from './ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from './ui/label';

export const Nav = ({ selected, handleReset, setLanguage, language }) => {
  // Function to handle print action
  const handlePrint = () => {
    // Open the print dialog
    window.print();
  };

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
          {/* Print Button */}
          {selected && (
            <Button
              className='ml-4 bg-blue-600 hover:bg-blue-700 cursor-pointer'
              onClick={handlePrint}
            >
              Print
            </Button>
          )}
        </div>
        <div className='ml-auto flex flex-row'>
          <Label className='mr-2 text-amber-400'>EN</Label>
          <Switch
            className='data-[state=checked]:bg-amber-400'
            onCheckedChange={(checked) => {
              setLanguage((prevState) => !prevState); // Toggle the state
            }}
          />
        </div>
      </div>
    </nav>
  );
};
