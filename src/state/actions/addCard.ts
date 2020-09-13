import { Store } from 'use-global-hook';
import { State, Card } from '..';
import { Actions } from '.';

export const addCard = (store: Store<State, Actions>, newCard: Card) => {
  const newCards = [...store.state.cards, newCard];

  store.setState({
    cards: newCards.sort((a, b) => a.value - b.value),
  });
};
