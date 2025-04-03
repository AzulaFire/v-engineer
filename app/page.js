'use client';
import { useState, useEffect } from 'react';
import { Nav } from '@/components/Nav';
import { Technologies } from '@/components/Technologies';
import { User } from '@/components/User';
import { Cards } from '@/components/Cards';
import {
  languages,
  jpLanguages,
  developmentTypes,
  jpdDevelopmentTypes,
} from '@/data/technologies.js'; // Import languages data
import { CheckboxList } from '@/components/CheckboxList';
import { Development } from '@/components/Development';
import { DatePicker } from '@/components/DatePicker';

// Function to return the initial state for result
const initialResultState = () => ({
  language: '',
  type: '',
  frameworks: [],
  databases: [],
  cloudServices: [],
  experience: '',
});

export default function Home() {
  // Grouping related state together
  const [selection, setSelection] = useState({
    selectedLanguage: undefined,
    selectedType: undefined,
  });

  const [siteData, setSiteData] = useState({
    language: languages,
    type: developmentTypes,
  });

  const [dateData, setDateData] = useState({
    date: undefined,
    startDate: undefined,
  });

  const [result, setResult] = useState(initialResultState());
  const [language, setLanguage] = useState(false);
  const [selectedDevType, setSelectedDevType] = useState({});

  useEffect(() => {
    if (dateData.date) {
      const newDate = new Date(dateData.date);
      const formattedDate = `${(newDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${newDate
        .getDate()
        .toString()
        .padStart(2, '0')}/${newDate.getFullYear()}`;
      setDateData((prevState) => ({ ...prevState, startDate: formattedDate }));
    }
  }, [dateData.date]);

  useEffect(() => {
    if (selection.selectedLanguage && selection.selectedType) {
      setResult({
        language: selection.selectedLanguage,
        type: selection.selectedType,
        frameworks: [],
        databases: [],
        cloudServices: [],
        experience: '',
      });
    }
  }, [selection]);

  useEffect(() => {
    if (language) {
      setSelection({
        selectedLanguage: undefined,
        selectedType: undefined,
      });
      setResult(initialResultState());
      setSelectedDevType({});
      setDateData({ date: undefined, startDate: undefined });
      setSiteData({
        language: languages,
        type: developmentTypes,
      });
    } else {
      setSelection({
        selectedLanguage: undefined,
        selectedType: undefined,
      });
      setResult(initialResultState());
      setSelectedDevType({});
      setDateData({ date: undefined, startDate: undefined });
      setSiteData({
        language: jpLanguages,
        type: jpdDevelopmentTypes,
      });
    }
  }, [language]);

  // Reset the state
  const handleReset = () => {
    setSelection({
      selectedLanguage: undefined,
      selectedType: undefined,
    });
    setResult(initialResultState());
    setSelectedDevType({});
    setLanguage(false);
    setDateData({ date: undefined, startDate: undefined });

    // Trigger page reload
    window.location.reload();
  };

  const handleChange = (type, item) => {
    setResult((prevResult) => {
      const newArray = prevResult[type].includes(item)
        ? prevResult[type].filter((i) => i !== item)
        : [...prevResult[type], item];

      return {
        ...prevResult,
        [type]: newArray,
      };
    });
  };

  const handleRadioChange = (type, item) => {
    setResult((prevResult) => ({
      ...prevResult,
      [type]: item,
    }));
  };

  return (
    <>
      <Nav
        selected={selection.selectedLanguage}
        handleReset={handleReset}
        setLanguage={setLanguage}
      />
      <div className='container mx-auto px-4 pt-4 pb-8'>
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
              languages={siteData.language}
              selected={selection.selectedLanguage}
              setSelected={(lang) =>
                setSelection((prev) => ({ ...prev, selectedLanguage: lang }))
              }
            />
            <Development
              types={siteData.type}
              selectedDevType={selectedDevType}
              setSelectedDevType={setSelectedDevType}
            />
            <DatePicker
              date={dateData.date}
              setDate={(date) => setDateData((prev) => ({ ...prev, date }))}
            />
            <Cards
              languages={siteData.language}
              selected={selection.selectedLanguage}
              setSelectedType={(type) =>
                setSelection((prev) => ({ ...prev, selectedType: type }))
              }
              language={language}
            />
            <CheckboxList
              languages={siteData.language}
              language={selection.selectedLanguage}
              selectedType={selection.selectedType}
              handleChange={handleChange}
              handleRadioChange={handleRadioChange}
              title={language}
              result={result}
            />
          </div>

          {/* 1/4 section: Only visible on large screens */}
          <div className='w-full lg:w-1/4 lg:block hidden'>
            <User
              result={result}
              language={language}
              selectedDevType={selectedDevType}
              startDate={dateData.startDate}
            />
          </div>
        </div>
      </div>
    </>
  );
}
