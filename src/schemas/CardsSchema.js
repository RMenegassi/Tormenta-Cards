const CardsSchema = {
  name: 'Cards',
  primaryKey: 'index',
  properties: {
    index: 'int',
    id: 'string',
    title: 'string',
    classCard: 'string',
    school: 'string',
    isFavorite: 'bool',
    isLearned: 'bool',
    level: 'string',
  },
};

export default CardsSchema;
