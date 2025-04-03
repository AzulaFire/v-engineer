import { PiUserCircleCheckDuotone } from 'react-icons/pi';
import { Label } from './ui/label';
import { Input } from './ui/input';

export const User = ({ result, language, selectedDevType, startDate }) => {
  return (
    <div className='flex flex-col gap-4 mx-4 py-2'>
      <div className='flex justify-center'>
        <PiUserCircleCheckDuotone className='text-8xl' />
      </div>

      {/* Display selected language */}
      <div className='flex flex-col'>
        <Label className='font-semibold'>
          {language ? 'Language:' : '言語:'}
        </Label>
        <Input
          className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
          disabled
          defaultValue={result.language || ''}
        />
      </div>

      {/* Display development type */}
      <div className='flex flex-col'>
        <Label className='font-semibold'>
          {language ? 'Development Type:' : '開発タイプ:'}
        </Label>
        <Input
          className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
          disabled
          defaultValue={selectedDevType.type || ''}
        />
      </div>

      {/* Start date */}
      <div className='flex flex-col'>
        <Label className='font-semibold'>
          {language ? 'Start Date:' : '開始日:'}
        </Label>
        <Input
          className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
          disabled
          defaultValue={startDate || ''}
        />
      </div>

      {/* Display selected type */}
      <div className='flex flex-col'>
        <Label className='font-semibold'>
          {language ? 'Project Type:' : 'プロジェクト・タイプ:'}
        </Label>
        <Input
          className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
          disabled
          defaultValue={result.type || ''}
        />
      </div>

      {/* Display frameworks/libraries */}
      <div className='flex flex-col'>
        <Label className='font-semibold'>
          {language ? 'Frameworks/Libraries:' : 'フレームワーク/ライブラリ:'}
        </Label>
        <Input
          className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
          disabled
          defaultValue={
            result.frameworks.length > 0 ? result.frameworks.join(', ') : 'None'
          }
        />
      </div>

      {/* Display databases */}
      <div className='flex flex-col'>
        <Label className='font-semibold'>
          {language ? 'Databases:' : 'データベース:'}
        </Label>
        <Input
          className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
          disabled
          defaultValue={
            result.databases.length > 0 ? result.databases.join(', ') : 'None'
          }
        />
      </div>

      {/* Display cloud services */}
      <div className='flex flex-col'>
        <Label className='font-semibold'>
          {language ? 'Cloud Services:' : 'クラウドサービス:'}
        </Label>
        <Input
          className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
          disabled
          defaultValue={
            result.cloudServices.length > 0
              ? result.cloudServices.join(', ')
              : 'None'
          }
        />
      </div>

      {/* Display experience */}
      <div className='flex flex-col'>
        <Label className='font-semibold'>
          {language ? 'Experience:' : '経験:'}
        </Label>
        <Input
          className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
          disabled
          defaultValue={
            result.experience.length > 0 ? result.experience : 'None'
          }
        />
      </div>
    </div>
  );
};
