import { Card, CardPair } from '@MemoryGame/models';
import { CardCmp } from '@MemoryGame/lib';
import { combineReducers } from 'redux';

import { CardAction, CardActions } from '../actions/card-actions';
import { CardReducer, CardState } from './card-reducer';
import { GameAction, GameActions } from '../actions/game-actions';
import { PairActions } from '../actions/pair-actions';
import { PairReducer, PairState } from './pair-reducer';

export type GameState = {
  waitingForPair: boolean,
  canSelect: boolean,
  selected: CardState;
  pairs: PairState;
};

/* GameReducer is used as a gateway for CardReducer and PairReducer */
export class GameReducer {
  public static readonly defaultState: GameState = {
    waitingForPair: false,
    canSelect: true,
    selected: CardReducer.defaultState,
    pairs: []
  };

  public static reduce(state: GameState = GameReducer.defaultState, action: GameAction): GameState {
    switch (action.type) {
      case CardActions.SELECT:
        return GameReducer.select(state, action);
      case GameActions.PAIR:
        return GameReducer.pair(state, action);
      case GameActions.WAIT_FOR_PAIR:
        return GameReducer.pairWaiting(state, action);
      default:
        return state;
    }
  }

  private static pair(state: GameState, action: GameAction): GameState {
    const [a, b] = action.payload as CardPair;

    const newStatePartial: Partial<GameState> = {
      canSelect: true,
      selected: []
    };

    if (CardCmp.isPair(a, b)) {
      return {
        ...state,
        ...newStatePartial,
        pairs: PairReducer.reduce(state.pairs, PairActions.add([a, b]))
      };
    } else {
      return {
        ...state,
        ...newStatePartial
      };
    }
  }

  private static pairWaiting(state: GameState, action: GameAction): GameState {
    return {
      ...state,
      waitingForPair: action.payload as boolean
    };
  }


  private static select(state: GameState, action: GameAction): GameState {
    if (!state.canSelect || !GameReducer.canSelectCard(state, action.payload as Card)) {
      return state;
    }

    if (state.selected.length < 2) {
      return {
        ...state,
        selected: CardReducer.reduce(state.selected, action as CardAction)
      };
    } else {
      return  {
        ...state,
        canSelect: false
      };
    }
  }

  private static canSelectCard(state: GameState, card: Card): boolean {
    /* the card cannot be in either current selection or pairs */
    return !CardCmp.cardInPairs(card, state.pairs) && !this.inSelected(state.selected, card);
  }

  private static inSelected(selected: CardState, card: Card): boolean {
    return selected.some(x => CardCmp.isSameCard(x, card));
  }
}
