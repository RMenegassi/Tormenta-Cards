import Realm from 'realm';

import CardsSchema from '../schemas/CardsSchema';

import {getDefaultCards} from './List';

export const getRealm = async () => {
  console.log('getRealm');
  const realm = await Realm.open({
    schema: [CardsSchema],
    schemaVersion: 6,
  });

  //dropDB(realm);
  initDB(realm);
  return realm;
};

export const initDB = realm => {
  const cardsLength = realm.objects('Cards').length;

  if (cardsLength === 0) {
    const listCards = getDefaultCards();
    console.log('listCards :: ', listCards);
    try {
      realm.write(() => {
        listCards.forEach(card => {
          realm.create('Cards', card, true);
        });
      });
    } catch (error) {
      console.error('Error existente :: ', error);
    }
  } else {
  }
};

export const dropDB = realm => {
  realm.write(() => {
    realm.deleteAll();
  });
};
