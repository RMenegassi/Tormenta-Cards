import {getRealm} from './Realm';

export const getCard = async (classCard, school) => {
  let realm = await getRealm();
  realm = realm.objects('Cards');
  realm = realm.filtered('classCard == $0', classCard);
  realm = realm.filtered('school == $0', school);

  return realm;
};

export const getFavorites = async () => {
  console.log('getFavorites');
  let realm = await getRealm();
  realm = realm.objects('Cards');
  console.log(realm);
  realm = realm.filtered('isFavorite == $0', true);
  return realm;
};

export const getLearned = async () => {
  let realm = await getRealm();
  realm = realm.objects('Cards');
  realm = realm.filtered('isLearned == $0', true);
  return realm;
};

export const saveCard = async card => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        index: card.index,
        id: card.id,
        title: card.title,
        classCard: card.classCard,
        school: card.school,
        isFavorite: card.isFavorite,
        isLearned: card.isLearned,
        level: card.level,
      };
      realm.create('Cards', data, true);
    });
  } catch (error) {
    console.error('Error :: ', error);
  }
};
