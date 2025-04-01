'use client';
import { useState, useEffect } from 'react';
import { Nav } from '@/components/Nav';
import { Technologies } from '@/components/Technologies';
import { User } from '@/components/User';
import { Cards } from '@/components/Cards';
import { languages, jpLanguages } from '@/data/technologies.js'; // Import languages data
import { CheckboxList } from '@/components/CheckboxList';

export default function Home() {
  const [selected, setSelected] = useState(undefined);
  const [selectedType, setSelectedType] = useState(undefined);
  const [result, setResult] = useState({
    language: '',
    type: '',
    frameworks: [],
    databases: [],
    cloudServices: [],
    experience: '',
  });
  const [siteLanguage, setSiteLanguage] = useState({});
  const [language, setLanguage] = useState(false);

  useEffect(() => {
    if (selected && selectedType) {
      // Reset the arrays when either language or type changes
      setResult({
        language: selected,
        type: selectedType,
        frameworks: [], // Reset frameworks on language/type change
        databases: [], // Reset databases on language/type change
        cloudServices: [], // Reset cloud services on language/type change
        experience: '', // Reset experience on language/type change
      });
    }
  }, [selected, selectedType]); // Triggered when language or type changes

  useEffect(() => {
    if (language) {
      setSelected(undefined);
      setSelectedType(undefined);
      setResult({
        language: '',
        type: '',
        frameworks: [], // Reset frameworks on language/type change
        databases: [], // Reset databases on language/type change
        cloudServices: [], // Reset cloud services on language/type change
        experience: '', // Reset experience on language/type change
      });
      setSiteLanguage(languages);
    } else {
      setSelected(undefined);
      setSelectedType(undefined);
      setResult({
        language: '',
        type: '',
        frameworks: [], // Reset frameworks on language/type change
        databases: [], // Reset databases on language/type change
        cloudServices: [], // Reset cloud services on language/type change
        experience: '', // Reset experience on language/type change
      });
      setSiteLanguage(jpLanguages);
    }
  }, [language]);

  const handleReset = () => {
    setSelected(undefined);
    setSelectedType(undefined);
    setResult({
      language: '',
      type: '',
      frameworks: [], // Reset frameworks on language/type change
      databases: [], // Reset databases on language/type change
      cloudServices: [], // Reset cloud services on language/type change
      experience: '', // Reset experience on language/type change
    });
    setLanguage(false);
  };

  const handleChange = (type, item) => {
    setResult((prevResult) => {
      let newArray;

      // If the checkbox is checked, add the item to the array
      if (prevResult[type].includes(item)) {
        // If it's already selected (checked), remove it
        newArray = prevResult[type].filter((i) => i !== item);
      } else {
        // Otherwise, add it to the array
        newArray = [...prevResult[type], item];
      }

      // Update the state with the new array
      return {
        ...prevResult,
        [type]: newArray, // Update the specific type (frameworks, databases, or cloudServices)
      };
    });
  };

  const handleRadioChange = (type, item) => {
    setResult((prevResult) => ({
      ...prevResult,
      [type]: item, // Directly set the selected value
    }));
  };

  return (
    <>
      <Nav
        selected={selected}
        handleReset={handleReset}
        setLanguage={setLanguage}
      />
      <div className='container mx-auto px-4 py-8'>
        {/* Show the message on small screens and hide the content */}
        <div className='block lg:hidden text-center'>
          <p className='text-lg font-semibold'>
            This app is best viewed on a desktop or tablet. Please switch to a
            larger screen for the best experience.
          </p>
        </div>

        <div className='flex'>
          {/* 3/4 section: Only visible on large screens */}
          <div className='w-full lg:w-3/4 border-r lg:block hidden'>
            <Technologies
              languages={siteLanguage}
              selected={selected}
              setSelected={setSelected}
            />
            <Cards
              languages={siteLanguage}
              selected={selected}
              setSelectedType={setSelectedType}
              language={language}
            />
            <CheckboxList
              languages={siteLanguage}
              language={selected}
              selectedType={selectedType}
              handleChange={handleChange}
              handleRadioChange={handleRadioChange}
              title={language}
              result={result} // Pass the result object to CheckboxList
            />
          </div>

          {/* 1/4 section: Only visible on large screens */}
          <div className='w-full lg:w-1/4 lg:block hidden'>
            <User result={result} language={language} />
          </div>
        </div>
      </div>
    </>
  );
}
