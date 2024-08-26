import React from 'react';
import { useParams } from 'react-router-dom';
import cardData from './cardData';

const TitlePage = () => {
  const { title } = useParams();
  const card = cardData.find(card => card.title.toLowerCase() === title.toLowerCase());

  if (!card) {
    return <div>Title not found</div>;
  }

  return (
    <div className="container mx-auto my-5">
      <h1 className="text-3xl font-bold">{card.title}</h1>
      <img src={card.image} alt={card.title} className="w-full h-auto mt-5 rounded-lg" />
      <p className="mt-4">{card.para1}</p>
      <p className="mt-2">{card.para2}</p>
    </div>
  );
};

export default TitlePage;

