import {useState} from 'react';

const useAllCards = () => {
  const [allCards, setAllCards] = useState([]);

  const handleGetCards = () => {
    return allCards;
  };

  const handleSetCards = cards => {
    setAllCards(cards);
  };
  return [allCards, {getCards: handleGetCards, setCards: handleSetCards}];
};
export default useAllCards;
