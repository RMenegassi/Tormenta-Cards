import {useState, useEffect} from 'react';
import {getCard, saveCard, getFavorites, getLearned} from '../services/Cards';

const useCards = (
  classCard = '',
  school = '',
  filterFavorite = false,
  filterLearned = false,
) => {
  const [allCards, setAllCards] = useState([]);
  const [cardChange, setCardChange] = useState();

  const changeFavorite = async card => {
    const newCard = {
      index: card.index,
      id: card.id,
      title: card.title,
      classCard: card.classCard,
      school: card.school,
      isFavorite: !card.isFavorite,
      isLearned: card.isLearned,
      level: card.level,
    };
    await saveCard(newCard);
    setCardChange(newCard);
  };

  const changeLearned = async card => {
    const newCard = {
      index: card.index,
      id: card.id,
      title: card.title,
      classCard: card.classCard,
      school: card.school,
      isFavorite: card.isFavorite,
      isLearned: !card.isLearned,
      level: card.level,
    };
    await saveCard(newCard);
    setCardChange(newCard);
  };

  useEffect(() => {
    const loadDB = async () => {
      if (filterFavorite) {
        const data = await getFavorites();
        setAllCards(data);
      } else if (filterLearned) {
        const data = await getLearned();
        setAllCards(data);
      } else {
        const data = await getCard(classCard, school);
        setAllCards(data);
      }
    };
    loadDB();
  }, [classCard, school, cardChange, filterFavorite, filterLearned]);

  return [allCards, changeFavorite, changeLearned];
};

export default useCards;
