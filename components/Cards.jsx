import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaMobileAlt } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { GiCircuitry } from 'react-icons/gi';
import { MdWeb } from 'react-icons/md';

export const Cards = ({ languages, selected, setSelectedType }) => {
  const [activeCard, setActiveCard] = useState(null);

  // Reset activeCard when the selected language changes
  useEffect(() => {
    setActiveCard(null); // Reset active card when the language is changed
  }, [selected]); // Dependency on `selected` language

  if (!selected) return null; // Don't display cards if no language is selected

  const selectedLanguage = languages[selected];
  const selectedProjectTypes = selectedLanguage
    ? selectedLanguage.projectTypes
    : [];

  // Define the cards with their corresponding project type
  const cards = [
    {
      type: 'Web',
      title: 'Web',
      icon: <MdWeb className='text-8xl' />,
      bgClass: 'bg-amber-400', // Default background color
    },
    {
      type: 'Desktop',
      title: 'Desktop',
      icon: <FaComputer className='text-8xl' />,
      bgClass: 'bg-sky-600',
    },
    {
      type: 'Mobile',
      title: 'Mobile',
      icon: <FaMobileAlt className='text-8xl' />,
      bgClass: 'bg-pink-600',
    },
    {
      type: 'Embedded',
      title: 'Embedded',
      icon: <GiCircuitry className='text-8xl' />,
      bgClass: 'bg-green-600',
    },
  ];

  // Filter the cards to show only the ones that match the selected project's types
  const filteredCards = cards.filter((card) =>
    selectedProjectTypes.includes(card.type)
  );

  const handleCardClick = (cardType) => {
    setActiveCard(cardType); // Set the clicked card as active
    setSelectedType(cardType); // Update the parent with the selected type
  };

  return (
    <div className='flex flex-row gap-8 mt-8 justify-center'>
      {filteredCards.map((card, index) => (
        <Card
          key={index}
          className={`w-[200px] cursor-pointer transition-all duration-300 ease-in-out ${
            activeCard === card.type
              ? `${card.bgClass} shadow-lg scale-105` // Active/selected card: original color and visual effects
              : 'bg-zinc-200' // Non-selected card: grayed out background
          } hover:${activeCard !== card.type ? card.bgClass : ''}`} // Non-selected card hover effect
          onClick={() => handleCardClick(card.type)} // Set active card on click
        >
          <CardHeader>
            <CardTitle className='flex justify-center uppercase'>
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid w-full items-center justify-center gap-4'>
              {card.icon}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
