import { PairAction, PairActions } from '../actions/pair-actions';
import { Reducer } from 'redux';

export type PairState = [number, number][];

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

  private static add(state: PairState, pair: [number, number]): PairState {
    const [a, b] = pair;

    /* a or b can be a zero value identifier => truthiness cannot be used */
    if (a === undefined || b === undefined) {
      return state;
    }

    if (state.some(p => a !== b && (a in p || b in p))) {
      return state;
    } else {
      return [ ...state, pair ];
    }
  }
}
