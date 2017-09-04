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
  public static readonly SELECT = 'game.SELECT';
  public static readonly WAIT_FOR_PAIR = 'game.WAIT_FOR_PAIR';

  /* method has a side affect that attempts to pair cards after a delay when the user has selected 2 cards */
  public static select(card: Card): GameActionsDispatch {
    return (dispatch, getState) => {

      /* first add card to selected */
      dispatch(CardActions.select(card));

      /* card should now be added selected */
      const { waitingForPair, selected } = getState().game as GameState;
      if (!waitingForPair && selected.length === 2) {
        dispatch(GameActions.waitForPair(true));
        setTimeout(() => {
          dispatch(PairActions.add(selected as CardPair));
          dispatch(GameActions.waitForPair(false));
        }, 2000);
      }
    };
  }

  public static waitForPair(wait: boolean): GameAction {
    return {
      type: GameActions.WAIT_FOR_PAIR,
      payload: wait
    };
  }
}
