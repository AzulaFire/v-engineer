import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { FaQuestionCircle } from 'react-icons/fa';

const HowTo = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <FaQuestionCircle className='text-2xl text-zinc-500 absolute top-4 right-4 cursor-pointer' />
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle className='font-bold text-black text-xl mb-4'>
            Decision Matrix:
          </SheetTitle>
          <SheetDescription className='text-start font-bold text-sm text-black'>
            Instructions
            <br />
            <span className='my-4'>HELLO</span>
            <br />
            TEMPLATES
            <br />
            <span className='my-4'>TEST</span>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default HowTo;
