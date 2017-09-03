import { CardAction, CardActions } from '../actions/card-actions';
import { CardReducer, CardState } from './card-reducer';
import { combineReducers } from 'redux';
import { GameAction } from '../actions/game-actions';
import { PairActions } from '../actions/pair-actions';
import { PairReducer } from './pair-reducer';

export type GameState = {
  selected: CardState;
  pairs: [number, number][]
};

export class GameReducer {
  public static readonly defaultState: GameState = {
    selected: CardReducer.defaultState,
    pairs: []
  };

  public static reduce(state: GameState = GameReducer.defaultState, action: GameAction): GameState {
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
        const selected = CardReducer.reduce(state.selected, action);

        /* card might not have been added to selected cards */
        if (selected.length === 2) {
          // TODO a and b must have equal values in order to be selected. Currently any unmatched cards can become a
          // pair.
          const [a, b] = selected;
          return {
            selected: [],
            pairs: PairReducer.reduce(state.pairs, PairActions.add([a, b]))
          };
        }

        /* no cards were selected, return unchanged state */
        return state;
      default:
        return state;
    }
  }

  private static canSelectCard(state: GameState, cardId: number) {
    /* the card cannot be in either current selection or pairs */
    return this.inPairs(state.pairs, cardId) && this.inSelected(state.selected, cardId);
  }

  private static inPairs(pairs: [number, number][], cardId): boolean {
    return !pairs.some(pair => pair.some(id => id === cardId));
  }

  private static inSelected(selected: number[], cardId): boolean {
    return !selected.some(id => id === cardId);
  }
}
