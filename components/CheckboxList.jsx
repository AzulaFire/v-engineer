import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react'; // Import useState to handle state
import { motion } from 'framer-motion'; // Import motion from framer-motion

export const CheckboxList = ({
  language,
  selectedType,
  handleChange,
  handleRadioChange,
  languages,
  title,
  result, // Pass the result object to track the selected frameworks, databases, and cloud services
}) => {
  const languageData = languages[language];

  // State to track the expanded section
  const [expandedSection, setExpandedSection] = useState(null);

  // Function to toggle accordion section
  const handleToggle = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null); // Close if the section is already expanded
    } else {
      setExpandedSection(section); // Open the clicked section
    }
  };

  if (languageData && selectedType && languageData[selectedType]) {
    return (
      <section className='mt-6 ml-14'>
        <div>
          {/* Frameworks Section */}
          <h2
            className='text-md font-semibold mb-4 uppercase cursor-pointer'
            onClick={() => handleToggle('frameworks')}
          >
            {title ? 'Frameworks/Libraries:' : 'フレームワーク/ライブラリ:'}
          </h2>
          <motion.div
            className='accordion-content'
            initial={{ height: 0 }}
            animate={{ height: expandedSection === 'frameworks' ? 'auto' : 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {expandedSection === 'frameworks' && (
              <div className='grid grid-cols-4 gap-4'>
                {languageData[selectedType].map((item, index) => (
                  <div key={index} className='flex items-center space-x-2'>
                    <Checkbox
                      className='cursor-pointer'
                      id={item}
                      checked={result.frameworks.includes(item)} // Make checkbox controlled
                      onCheckedChange={(checked) => {
                        handleChange('frameworks', item); // Pass 'frameworks' as the type
                      }}
                    />
                    <label
                      htmlFor={item}
                      className='text-sm font-medium leading-none capitalize flex gap-x-2 items-center cursor-pointer'
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <Separator className='my-4' />

          {/* Databases Section */}
          <h2
            className='text-md font-semibold mb-4 uppercase cursor-pointer'
            onClick={() => handleToggle('databases')}
          >
            {title ? 'Databases:' : 'データベース:'}
          </h2>
          <motion.div
            className='accordion-content'
            initial={{ height: 0 }}
            animate={{ height: expandedSection === 'databases' ? 'auto' : 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {expandedSection === 'databases' && (
              <div className='grid grid-cols-4 gap-4'>
                {languageData['databases'].map((item, index) => (
                  <div key={index} className='flex items-center space-x-2'>
                    <Checkbox
                      className='cursor-pointer'
                      id={item}
                      checked={result.databases.includes(item)} // Make checkbox controlled
                      onCheckedChange={(checked) => {
                        handleChange('databases', item); // Pass 'databases' as the type
                      }}
                    />
                    <label
                      htmlFor={item}
                      className='text-sm font-medium leading-none capitalize flex gap-x-2 items-center cursor-pointer'
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <Separator className='my-4' />

          {/* Cloud Services Section */}
          <h2
            className='text-md font-semibold mb-4 uppercase cursor-pointer'
            onClick={() => handleToggle('cloud')}
          >
            {title ? 'Cloud Services:' : 'クラウドサービス:'}
          </h2>
          <motion.div
            className='accordion-content'
            initial={{ height: 0 }}
            animate={{ height: expandedSection === 'cloud' ? 'auto' : 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {expandedSection === 'cloud' && (
              <div className='grid grid-cols-4 gap-4'>
                {languageData['cloud'].map((item, index) => (
                  <div key={index} className='flex items-center space-x-2'>
                    <Checkbox
                      className='cursor-pointer'
                      id={item}
                      checked={result.cloudServices.includes(item)} // Make checkbox controlled
                      onCheckedChange={(checked) => {
                        handleChange('cloudServices', item); // Pass 'cloudServices' as the type
                      }}
                    />
                    <label
                      htmlFor={item}
                      className='text-sm font-medium leading-none capitalize flex gap-x-2 items-center cursor-pointer'
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <Separator className='my-4' />

          {/* Experience Section */}
          <h2
            className='text-md font-semibold mb-4 uppercase cursor-pointer'
            onClick={() => handleToggle('experience')}
          >
            {title ? 'Experience:' : '経験:'}
          </h2>
          <motion.div
            className='accordion-content'
            initial={{ height: 0 }}
            animate={{ height: expandedSection === 'experience' ? 'auto' : 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {expandedSection === 'experience' && (
              <div className='grid grid-cols-4 gap-4'>
                {languageData['experience'].map((item, index) => (
                  <div key={index} className='flex items-center space-x-2'>
                    <RadioGroup
                      value={result.experience} // Make sure this value is controlled by `result.experience`
                      onValueChange={(value) =>
                        handleRadioChange('experience', value)
                      } // Update the state when a new item is selected
                    >
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value={item} id={item} />
                        <label
                          htmlFor={item}
                          className='text-sm font-medium leading-none capitalize flex gap-x-2 items-center cursor-pointer'
                        >
                          {item}
                        </label>
                      </div>
                    </RadioGroup>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  return null;
};
