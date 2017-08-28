import { Action } from 'redux';

import { StdAction } from '../../../lib/std-action';

export type CardAction = StdAction<number, void>;

export class CardActions {
  public static readonly SELECT = 'game.card.SELECT';
  public static readonly RESET = 'game.card.RESET';

  public static select(id: number): CardAction {
    return {
      type: CardActions.SELECT,
      payload: id
    };
  }

  public static reset(): CardAction {
    return {
      type: CardActions.RESET,
      payload: undefined
    };
  }
}
