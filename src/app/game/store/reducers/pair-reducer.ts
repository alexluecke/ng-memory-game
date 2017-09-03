import { Card, CardPair } from '@MemoryGame/models';
import { CardCmp } from '@MemoryGame/lib';

import { PairAction, PairActions } from '../actions/pair-actions';
import { Reducer } from 'redux';

export type PairState = CardPair[];

export class PairReducer {
  public static readonly defaultState: PairState = [];

  public static reduce(state: PairState = PairReducer.defaultState, action: PairAction): PairState {
    switch (action.type) {
      case PairActions.ADD:
        return PairReducer.add(state, action.payload);
      case PairActions.RESET:
        return PairReducer.reset();
      default:
        return state;
    }
  }

  private static reset(): PairState {
    return [];
  }

  private static add(state: PairState, pair: CardPair): PairState {
    const [a, b] = pair;

    /* a or b can be a zero value identifier => truthiness cannot be used */
    if (a === undefined || b === undefined) {
      console.error('A pair matched with an undefined item.');
      return state;
    }

    if (CardCmp.isPair(a, b)) {
      return [ ...state, pair ];
    } else {
      return state;
    }
  }
}
