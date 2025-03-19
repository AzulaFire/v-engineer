import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

export const CheckboxList = ({
  language,
  selectedType,
  handleChange,
  languages,
}) => {
  // Get the language data from the 'languages' object using the `language` prop as the key
  const languageData = languages[language]; // e.g., languages['Java']

  // Ensure that languageData and selectedType are valid before rendering the checkboxes
  if (languageData && selectedType && languageData[selectedType]) {
    return (
      <section className='mt-10 ml-14'>
        <h2 className='text-lg font-semibold mb-4 uppercase'>
          Frameworks/Libraries
        </h2>
        <div className='grid grid-cols-4 gap-4'>
          {languageData[selectedType].map((item, index) => (
            <div key={index} className='flex items-center space-x-2'>
              <Checkbox
                id={item}
                onCheckedChange={() => handleChange(item)} // Correctly handle checkbox change
              />
              <label
                htmlFor={item}
                className='text-sm font-medium leading-none capitalize flex gap-x-2 items-center'
              >
                {item}
              </label>
            </div>
          ))}
        </div>
        <Separator className='my-4' />
        <h2 className='text-lg font-semibold mb-4 uppercase'>Databases</h2>
        <div className='grid grid-cols-4 gap-4'>
          {languageData['databases'].map((item, index) => (
            <div key={index} className='flex items-center space-x-2'>
              <Checkbox
                id={item}
                onCheckedChange={() => handleChange(item)} // Correctly handle checkbox change
              />
              <label
                htmlFor={item}
                className='text-sm font-medium leading-none capitalize flex gap-x-2 items-center'
              >
                {item}
              </label>
            </div>
          ))}
        </div>
        <Separator className='my-4' />
        <h2 className='text-lg font-semibold mb-4 uppercase'>Cloud Services</h2>
        <div className='grid grid-cols-4 gap-4'>
          {languageData['cloud'].map((item, index) => (
            <div key={index} className='flex items-center space-x-2'>
              <Checkbox
                id={item}
                onCheckedChange={() => handleChange(item)} // Correctly handle checkbox change
              />
              <label
                htmlFor={item}
                className='text-sm font-medium leading-none capitalize flex gap-x-2 items-center'
              >
                {item}
              </label>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // If the data is not available (either languageData[selectedType] is undefined or any other conditions), return null or some fallback
  return null;
};
