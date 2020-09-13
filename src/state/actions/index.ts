import { Card } from '..';

export type Actions = {
  addCard: (card: Card) => void;
  removeCard: (card: Card) => void;
  showCard: (card: Card) => void;
};

export { addCard } from './addCard';
export { removeCard } from './removeCard';
export { showCard } from './showCard';
