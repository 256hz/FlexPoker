import React from 'react';
import useGlobalHook from 'use-global-hook';

import * as actions from './actions';

export interface Card {
  value: number;
  imageUrl: string;
}

export type State = {
  chosenCard: Card;
  cards: Card[];
};

const defaultCards: Card[] = [
  {
    value: 0,
    imageUrl: '',
  },
  {
    value: 0.5,
    imageUrl: '',
  },
  {
    value: 1,
    imageUrl: '',
  },
  {
    value: 2,
    imageUrl: '',
  },
  {
    value: 3,
    imageUrl: '',
  },
  {
    value: 5,
    imageUrl: '',
  },
  {
    value: 7,
    imageUrl: '',
  },
  {
    value: 9,
    imageUrl: '',
  },
  {
    value: 12,
    imageUrl: '',
  },
  {
    value: 15,
    imageUrl: '',
  },
  {
    value: 18,
    imageUrl: '',
  },
  {
    value: 22,
    imageUrl: '',
  },
  {
    value: 28,
    imageUrl: '',
  },
  {
    value: 32,
    imageUrl: '',
  },
];

export const initialState = {
  cards: defaultCards,
  chosenCard: defaultCards[0],
};

// Paste the following into your code to use global state & actions:

// import useGlobal from '@state';
// const [ state, actions ] = useGlobal();

// eslint-disable-next-line react-hooks/rules-of-hooks
const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
