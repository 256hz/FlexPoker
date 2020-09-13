import { Card } from '..';

export type Actions = {
  addCard: (card: Card) => void;
  removeCard: (card: Card) => void;
};

export { addCard } from './addCard';
