import { Store } from 'use-global-hook';
import { State, Card } from '..';
import { Actions } from '.';

export const removeCard = (
  store: Store<State, Actions>,
  cardToRemove: Card,
) => {
  const newCards = store.state.cards.filter(
    (card) => card.value !== cardToRemove.value,
  );

  store.setState({
    cards: newCards,
  });
};
