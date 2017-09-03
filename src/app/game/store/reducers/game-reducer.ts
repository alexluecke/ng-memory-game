import { Card } from '@MemoryGame/models';
import { CardCmp } from '@MemoryGame/lib';
import { combineReducers } from 'redux';

import { CardAction, CardActions } from '../actions/card-actions';
import { CardReducer, CardState } from './card-reducer';
import { GameAction } from '../actions/game-actions';
import { PairActions } from '../actions/pair-actions';
import { PairReducer, PairState } from './pair-reducer';

export type GameState = {
  selected: CardState;
  pairs: PairState;
};

export class GameReducer {
  public static readonly defaultState: GameState = {
    selected: CardReducer.defaultState,
    pairs: []
  };

  public static reduce(state: GameState = GameReducer.defaultState, action: GameAction): GameState {
    switch (action.type) {
      case CardActions.SELECT:
        return GameReducer.select(state, action as CardAction);
      default:
        return state;
    }
  }

  private static select(state: GameState, action: CardAction): GameState {
    if (!GameReducer.canSelectCard(state, action.payload)) {
      return state;
    }

    switch (state.selected.length) {
      case 0:
        return {
          ...state,
          selected: CardReducer.reduce(state.selected, action)
        };
      case 1:
        const newCard = action.payload;
        const [x] = state.selected;

        if (CardCmp.isPair(newCard, x)) {
          return {
            selected: [],
            pairs: PairReducer.reduce(state.pairs, PairActions.add([newCard, x]))
          };
        } else {
          return {
            ...state,
            selected: CardReducer.reduce(state.selected, CardActions.reset())
          };
        }
      default:
        return state;
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
