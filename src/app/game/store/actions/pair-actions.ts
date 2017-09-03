import { Action } from 'redux';
import { CardPair } from '@MemoryGame/models';
import { StdAction } from '@AppBase/lib';

export type PairAction = StdAction<CardPair, void>;

export class PairActions {
  public static readonly ADD = 'game.pair.ADD';
  public static readonly RESET = 'game.pair.RESET';

  public static add(pair: CardPair): PairAction {
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

