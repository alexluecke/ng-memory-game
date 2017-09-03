import { combineReducers } from 'redux';
import { GameAction, GameReducer, GameState } from '@MemoryGame/store';

export type AppState = {
  game: GameState;
};

export class AppReducer {
  public static defaultState = {
    game: GameReducer.defaultState
  };

  private static reducer = combineReducers<AppState>({
    game: GameReducer.reduce
  });

  public static reduce(state: AppState, action: GameAction): AppState {
    return AppReducer.reducer(state, action);
  }
}
