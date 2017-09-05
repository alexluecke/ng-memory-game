import { AppState } from '@AppBase/store';
import { Card, CardPair } from '@MemoryGame/models';
import { Dispatch } from 'redux';
import { StdAction } from '@AppBase/lib';

import { CardAction, CardActions } from './card-actions';
import { GameState } from '../reducers/game-reducer';
import { PairAction, PairActions } from './pair-actions';

export type GameAction = CardAction | PairAction | StdAction<boolean, void>;

type GameActionsDispatch = (dispatch: Dispatch<GameAction>, getState: () => AppState) => void;

export class GameActions {
  public static readonly PAIR = 'game.PAIR';
  public static readonly SELECT = 'game.SELECT';
  public static readonly WAIT_FOR_PAIR = 'game.WAIT_FOR_PAIR';

  /* method has a side affect that attempts to pair cards after a delay when the user has selected 2 cards */
  public static select(card: Card): GameActionsDispatch {
    return (dispatch, getState) => {

      /* first select card */
      dispatch(CardActions.select(card));

      /* now card should be selected */
      const { waitingForPair, selected } = getState().game as GameState;
      if (!waitingForPair && selected.length === 2) {
        dispatch(GameActions.waitForPair(true));
        setTimeout(() => {
          dispatch(GameActions.pair(selected as CardPair));
          dispatch(GameActions.waitForPair(false));
        }, 2000);
      }
    };
  }

  public static pair(cardPair: CardPair): GameAction {
    return {
      type: GameActions.PAIR,
      payload: cardPair
    };
  }

  public static waitForPair(wait: boolean): GameAction {
    return {
      type: GameActions.WAIT_FOR_PAIR,
      payload: wait
    };
  }
}
