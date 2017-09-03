import { Card } from '@MemoryGame/models';
import { Reducer } from 'redux';

import { CardAction, CardActions } from '../actions/card-actions';

export type CardState = Card[];

export class CardReducer {
  public static readonly defaultState: CardState = [];

  public static reduce(state: CardState = CardReducer.defaultState, action: CardAction): CardState {
    switch (action.type) {
      case CardActions.SELECT:
        return CardReducer.select(state, action.payload);
      case CardActions.RESET:
        return CardReducer.reset();
      default:
        return state;
    }
  }

  private static reset(): CardState {
    return [];
  }

  private static select(state: CardState, card: Card): CardState {
    return [ ...state, card ];
  }
}
