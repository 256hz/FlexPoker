import { Store } from 'use-global-hook';
import { State, Card } from '..';
import { Actions } from '.';

export const showCard = (store: Store<State, Actions>, card: Card) => {
  store.setState({
    ...store.state,
    chosenCard: card,
  });
};
