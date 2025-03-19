import { PiUserCircleCheckDuotone } from 'react-icons/pi';
import { Input } from './ui/input';

export const User = ({ languages, selected }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 mx-4'>
      <PiUserCircleCheckDuotone className='text-9xl' />
      <Input
        className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
        disabled
        defaultValue={selected}
      />
      <Input
        className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
        disabled
        defaultValue={selected}
      />
      <Input
        className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
        disabled
        defaultValue={selected}
      />
      <Input
        className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
        disabled
        defaultValue={selected}
      />
    </div>
  );
};
