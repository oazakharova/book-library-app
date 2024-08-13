import { v4 as uuidv4 } from 'uuid';

const createBookWithId = (book, sourсe) => {
  return {
    ...book,
    sourсe: sourсe,
    isFavorite: false,
    id: uuidv4(),
  };
};

export default createBookWithId;
