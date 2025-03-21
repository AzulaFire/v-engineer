import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react'; // Import useState to handle state
import { motion } from 'framer-motion'; // Import motion from framer-motion

export const CheckboxList = ({
  language,
  selectedType,
  handleChange,
  languages,
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
      <section className='mt-14 ml-14'>
        <div>
          {/* Frameworks Section */}
          <h2
            className='text-lg font-semibold mb-4 uppercase cursor-pointer'
            onClick={() => handleToggle('frameworks')}
          >
            Frameworks/Libraries
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
            className='text-lg font-semibold mb-4 uppercase cursor-pointer'
            onClick={() => handleToggle('databases')}
          >
            Databases
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
            className='text-lg font-semibold mb-4 uppercase cursor-pointer'
            onClick={() => handleToggle('cloud')}
          >
            Cloud Services
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
        </div>
      </section>
    );
  }

  return null;
};
