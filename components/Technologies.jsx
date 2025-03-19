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

export const Technologies = ({ languages, selected, setSelected }) => {
  const handleChange = (value) => {
    // Find the corresponding key for the selected language
    const key = Object.keys(languages).find(
      (key) => languages[key].name === value
    );
    setSelected(key);
  };

  return (
    <div className='flex flex-row'>
      <div>
        <Select onValueChange={handleChange}>
          <SelectTrigger className='w-[180px] cursor-pointer'>
            <SelectValue placeholder='Language' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Programming Languages</SelectLabel>
              {Object.keys(languages).map((key) => (
                <SelectItem
                  key={languages[key].name}
                  value={languages[key].name}
                >
                  {languages[key].name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className='mx-6'>
        {/* Displaying description based on the selected language */}
        {selected && languages[selected]?.description}
      </div>
    </div>
  );
};
