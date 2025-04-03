'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const Development = ({ types, selectedDevType, setSelectedDevType }) => {
  const handleTypesChange = (value) => {
    // Find the corresponding type object from the types array
    const selected = types.find((type) => type.type === value);
    setSelectedDevType(selected); // Update the selected type
  };

  return (
    <div className='flex flex-row my-4'>
      <div>
        <Select onValueChange={handleTypesChange}>
          <SelectTrigger className='w-[180px] cursor-pointer'>
            <SelectValue placeholder='Type' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Development Type</SelectLabel>
              {types.map((type) => (
                <SelectItem key={type.type} value={type.type}>
                  {type.type}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className='mx-6 text-xs'>
        {/* Displaying description based on the selected type */}
        {selectedDevType ? selectedDevType.definition : ''}
      </div>
    </div>
  );
};
