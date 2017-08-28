import { CardAction, CardActions } from '../actions/card-actions';
import { Reducer } from 'redux';

export type CardState = number[];

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

  private static select(state: CardState, cardId: number): CardState {
    if (!state.some(id => id === cardId)) {
      return [ ...state, cardId ];
    }

    return state;
  }
}
