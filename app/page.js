'use client';
import { useState } from 'react';
import { Nav } from '@/components/Nav';
import { Technologies } from '@/components/Technologies';
import { User } from '@/components/User';
import { Cards } from '@/components/Cards';
import { languages } from '@/data/technologies.js'; // Import languages data
import { CheckboxList } from '@/components/CheckboxList';

export default function Home() {
  const [selected, setSelected] = useState(undefined);
  const [selectedType, setSelectedType] = useState(undefined);

  const handleReset = () => {
    setSelected(undefined);
    setSelectedType(undefined);
  };

  const handleChange = (item) => {
    console.log(item); // Handle checkbox change logic here
  };

  return (
    <>
      <Nav selected={selected} handleReset={handleReset} />
      <div className='container mx-auto px-4 py-8'>
        <div className='flex'>
          <div className='w-3/4 border-r'>
            <Technologies
              languages={languages}
              selected={selected}
              setSelected={setSelected}
            />
            <Cards
              languages={languages}
              selected={selected}
              setSelectedType={setSelectedType}
            />
            <CheckboxList
              languages={languages}
              language={selected}
              selectedType={selectedType}
              handleChange={handleChange}
            />
          </div>
          <div className='w-1/4'>
            <User languages={languages} selected={selected} />
          </div>
        </div>
      </div>
    </>
  );
}
