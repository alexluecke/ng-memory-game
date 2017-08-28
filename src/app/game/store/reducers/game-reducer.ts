import { CardAction, CardActions } from '../actions/card-actions';
import { CardReducer, CardState } from './card-reducer';
import { combineReducers } from 'redux';
import { GameAction } from '../actions/game-actions';

export type GameState = {
  selected: CardState;
};

export class GameReducer {
  public static readonly defaultState: GameState = {
    selected: CardReducer.defaultState
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
    if (state.selected.length < 2) {
      return {
        ...state,
        selected: CardReducer.reduce(state.selected, action)
      };
    } else {
      return state;
    }
  }
}
