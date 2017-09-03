import { Action } from 'redux';
import { Card } from '@MemoryGame/models';
import { StdAction } from '@AppBase/lib';

export type CardAction = StdAction<Card, void>;

export class CardActions {
  public static readonly SELECT = 'game.card.SELECT';
  public static readonly RESET = 'game.card.RESET';

  public static select(card: Card): CardAction {
    return {
      type: CardActions.SELECT,
      payload: card
    };
  }

  public static reset(): CardAction {
    return {
      type: CardActions.RESET,
      payload: undefined
    };
  }
}
