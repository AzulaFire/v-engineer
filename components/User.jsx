import { PiUserCircleCheckDuotone } from 'react-icons/pi';
import { Label } from './ui/label';
import { Input } from './ui/input';

export const User = ({ result }) => {
  return (
    <div className='flex flex-col gap-4 mx-4'>
      <div className='flex justify-center'>
        <PiUserCircleCheckDuotone className='text-9xl' />
      </div>

      {/* Display selected language */}
      <div className='flex flex-col'>
        <Label className='font-semibold'>Language:</Label>
        <Input
          className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
          disabled
          defaultValue={result.language || ''}
        />
      </div>

      {/* Display selected type */}
      <div className='flex flex-col'>
        <Label className='font-semibold'>Project Type:</Label>
        <Input
          className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
          disabled
          defaultValue={result.type || ''}
        />
      </div>

      {/* Display frameworks/libraries */}
      <div className='flex flex-col'>
        <Label className='font-semibold'>Frameworks/Libraries:</Label>
        <Input
          className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
          disabled
          defaultValue={
            result.frameworks.length > 0 ? result.frameworks.join(', ') : 'None'
          }
        />
      </div>

      {/* Display databases */}
      <div className='flex flex-col'>
        <Label className='font-semibold'>Databases:</Label>
        <Input
          className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
          disabled
          defaultValue={
            result.databases.length > 0 ? result.databases.join(', ') : 'None'
          }
        />
      </div>

      {/* Display cloud services */}
      <div className='flex flex-col'>
        <Label className='font-semibold'>Cloud Services:</Label>
        <Input
          className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
          disabled
          defaultValue={
            result.cloudServices.length > 0
              ? result.cloudServices.join(', ')
              : 'None'
          }
        />
      </div>
    </div>
  );
};
