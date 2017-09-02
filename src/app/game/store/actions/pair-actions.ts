import { Action } from 'redux';

import { StdAction } from '../../../lib/std-action';

export type PairAction = StdAction<[number, number], void>;

export class PairActions {
  public static readonly ADD = 'game.pair.ADD';
  public static readonly RESET = 'game.pair.RESET';

  public static add(pair: [number, number]): PairAction {
    return {
      type: PairActions.ADD,
      payload: pair
    };
  }

  public static reset(): PairAction {
    return {
      type: PairActions.RESET,
      payload: undefined
    };
  }
}

